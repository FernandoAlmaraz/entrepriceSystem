import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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

  submitted = signal(false);

  public stockForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    quantity: [0, [Validators.required, Validators.min(1)]],
    existence: [0, [Validators.required, Validators.min(1)]]
  });

  onSubmit() {
    this.submitted.set(true);

    if (this.stockForm.valid) {
      const newStock: Stock = {
        id: Date.now(),
        name: this.stockForm.value.name!,
        quantity: this.stockForm.value.quantity!,
        existence: this.stockForm.value.existence!
      };

      this.stockService.AddStock(newStock);
      
      this.stockForm.reset({ name: '', quantity: 0, existence: 0 });
      this.submitted.set(false);
    }
  }

  hasError(fieldName: string): boolean {
    const field = this.stockForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || this.submitted()));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.stockForm.get(fieldName);
    
    if (!field || !field.errors) return '';

    if (field.errors['required']) {
      return this.getRequiredMessage(fieldName);
    }

    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }

    if (field.errors['min']) {
      const minValue = field.errors['min'].min;
      return `El valor mínimo es ${minValue}`;
    }

    return '';
  }

  private getRequiredMessage(fieldName: string): string {
    const messages: { [key: string]: string } = {
      'name': 'El nombre es requerido',
      'quantity': 'La cantidad es requerida',
      'existence': 'La existencia es requerida'
    };
    return messages[fieldName] || 'Este campo es requerido';
  }
}