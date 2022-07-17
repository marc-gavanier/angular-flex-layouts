import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayout} from '../layouts';
import {HomePage, TransactionsPage} from '../pages';

const routes: Routes = [
  {
    component: MainLayout,
    children: [
      {
        component: HomePage,
        path: ''
      },
      {
        component: TransactionsPage,
        path: 'transactions'
      }
    ],
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}
