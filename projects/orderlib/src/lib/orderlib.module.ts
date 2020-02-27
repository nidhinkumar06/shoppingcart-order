import { NgModule, ModuleWithProviders } from '@angular/core';
import { OrderlibComponent } from './orderlib.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    component: OrderlibComponent
  }
];

@NgModule({
  declarations: [OrderlibComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [OrderlibComponent]
})
export class OrderslibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OrderslibModule,
      providers: []
    };
  }
}
