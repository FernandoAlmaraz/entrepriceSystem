import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home'),
    },
    {
        path: 'stock',
        loadComponent: () => import('./pages/stock/stock'), 
    },
    {
        path: 'users',
        loadComponent: () => import('./users/users/users'), 
    },
    {
        path: 'reactive',
        loadComponent: () => import('./pages/reactive-forms/reactive-forms'), 
    },
    {
        path: 'reactiveStock',
        loadComponent: () => import('./pages/stockReactiveForm/stockReactiveForm'), 
    },
    {
        path: '**',
        redirectTo: 'stock'
    }
];