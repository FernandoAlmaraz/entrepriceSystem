import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Stock } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-list-reactive',
  imports: [],
  templateUrl: './stockListReactive.html',
  styleUrl: './stockListReactive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListReactive { 
  stockReactiveList = input.required<Stock[]>();
}