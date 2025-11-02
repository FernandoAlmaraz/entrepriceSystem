import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-list-reactive',
  imports: [],
  templateUrl: './stockListReactive.html',
  styleUrl: './stockListReactive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListReactive { }
