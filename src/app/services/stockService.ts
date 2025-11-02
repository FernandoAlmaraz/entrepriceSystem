import { effect, Injectable, signal } from '@angular/core';
import { Stock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor() { }

  stocklist = signal<Stock[]>(loadFromlocalStorage());

  saveStocksInLocalStorage = effect(() => {
    localStorage.setItem('stock', JSON.stringify(this.stocklist()));
  });

  AddStock(stockItem: Stock){
    this.stocklist.update((list) => [...list, stockItem]);
  };
  
  DeleteStock(id: number){
    this.stocklist.update((list) => list.filter(stock => stock.id !== id));
  };

  DeleteAllStocks(){
    this.stocklist.set([]);
  };
}

function loadFromlocalStorage() : Stock[]{
  const stock = localStorage.getItem('stock');
  return stock ? JSON.parse(stock) : [];
}