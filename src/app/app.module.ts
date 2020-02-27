import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import('./modules/orders.modules').then(m => m.OrdersModule)
  },
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: 'order',
  //       loadChildren: './modules/orders.modules#OrdersModule'
  //     }
  //   ]
  // }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
