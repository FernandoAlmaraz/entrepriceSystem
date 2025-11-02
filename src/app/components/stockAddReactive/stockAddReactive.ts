import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Stock } from '../../interfaces/stock.interface';
import { StockService } from '../../services/stockService';

@Component({
  selector: 'app-stock-add-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './stockAddReactive.html',
  styleUrl: './stockAddReactive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockAddReactive {
  
  private fb = inject(FormBuilder);
  private stockService = inject(StockService);

  stockForm = this.fb.group({
    name: ['', Validators.required],
    quantity: [0, Validators.required],
    existence: [0, Validators.required]
  });

  onSubmit() {
    if (this.stockForm.valid) {
      const newStock: Stock = {
        id: Date.now(),
        name: this.stockForm.value.name!,
        quantity: this.stockForm.value.quantity!,
        existence: this.stockForm.value.existence!
      };

      this.stockService.AddStock(newStock);
      
      this.stockForm.reset({ name: '', quantity: 0, existence: 0 });
    }
  }
}