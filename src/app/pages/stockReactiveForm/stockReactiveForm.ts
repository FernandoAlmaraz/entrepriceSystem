import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StockAddReactive } from '../../components/stockAddReactive/stockAddReactive';
import { StockListReactive } from '../../components/stockListReactive/stockListReactive';
import { StockService } from '../../services/stockService';

@Component({
  selector: 'app-stock-reactive-form',
  imports: [StockAddReactive, StockListReactive],
  templateUrl: './stockReactiveForm.html',
  styleUrl:'./stockReactiveForm.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockReactiveForm {
  public stockService = inject(StockService);

 }
