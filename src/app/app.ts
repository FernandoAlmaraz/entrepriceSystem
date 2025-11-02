import { Component, signal } from '@angular/core';
import Home  from './pages/home/home';
import  Stock  from './pages/stock/stock';
import { Sidebar } from './shared/sidebar/sidebar';


import { RouterOutlet } from '@angular/router';
import ReactiveForms from "./pages/reactive-forms/reactive-forms";
import StockReactiveForm from './pages/stockReactiveForm/stockReactiveForm';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Stock, Sidebar,ReactiveForms, StockReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('entrepriceSystem');
}
