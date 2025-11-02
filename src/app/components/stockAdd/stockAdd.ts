import { ChangeDetectionStrategy, Component, output, signal} from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'stock-add',
  imports: [],
  templateUrl: './stockAdd.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockAdd { 
  public stockAddTitle= signal<string>('Agregar nuevo producto al Stock');
  public name = signal<string>('fer');
  public quantity = signal<number>(10);
  public existence = signal<number>(100);
  OnNewStock = output<Stock>();
  AddStock() {
    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      quantity: this.quantity(),
      existence: this.existence()
    }
    this.OnNewStock.emit(newStock);
    this.resetInputs();
  }

  resetInputs() {
    this.name.set('');
    this.quantity.set(0);
    this.existence.set(0);
  }
}
