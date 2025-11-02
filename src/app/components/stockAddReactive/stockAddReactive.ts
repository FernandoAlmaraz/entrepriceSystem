import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-add-reactive',
  imports: [],
  templateUrl: './stockAddReactive.html',
  styleUrl: './stockAddReactive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAddReactive { }
