import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockAddReactive } from '../../components/stockAddReactive/stockAddReactive';
import { StockListReactive } from '../../components/stockListReactive/stockListReactive';

@Component({
  selector: 'app-stock-reactive-form',
  imports: [StockAddReactive, StockListReactive],
  templateUrl: './stockReactiveForm.html',
  styleUrl:'./stockReactiveForm.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockReactiveForm { }
