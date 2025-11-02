import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';


@Component({
  selector: 'stock-list',
  imports: [],
  templateUrl: './stockList.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockList { 
  stockTitle = signal<string>('Listado del Stock');

  stockList =  input.required<Stock[]>();
}
