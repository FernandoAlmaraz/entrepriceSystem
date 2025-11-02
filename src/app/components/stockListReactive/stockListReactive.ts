import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';
import { StockService } from '../../services/stockService';

@Component({
  selector: 'app-stock-list-reactive',
  imports: [],
  templateUrl: './stockListReactive.html',
  styleUrl: './stockListReactive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListReactive { 

  private stockService = inject(StockService);

  stockReactiveList = input.required<Stock[]>();

  deleteStock(id: number, name: string): void {
    const confirmed = confirm(`¿Estás seguro de eliminar "${name}"?\n\nEsta acción no se puede deshacer.`);
    
    if (confirmed) {
      this.stockService.DeleteStock(id);
    }
  }

  deleteAllStocks(): void {
    const confirmed = confirm(`⚠️ ¿Estás seguro de eliminar TODOS los productos?\n\nSe eliminarán ${this.stockReactiveList().length} productos.\n\nEsta acción no se puede deshacer.`);
    
    if (confirmed) {
      this.stockService.DeleteAllStocks();
    }
  }
}