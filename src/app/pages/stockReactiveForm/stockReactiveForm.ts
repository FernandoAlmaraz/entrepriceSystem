import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-reactive-form',
  imports: [],
  templateUrl: './stockReactiveForm.html',
  styleUrl:'./stockReactiveForm.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockReactiveForm { }
