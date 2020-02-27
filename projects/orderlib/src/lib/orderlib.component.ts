import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-orderlib',
  templateUrl: './orderlib.component.html',
})
export class OrderlibComponent implements OnInit {

  orders: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getOrdersDetails();
  }

  getOrdersDetails() {
    this.http.get('assets/data/orders.json').subscribe((res: any) => {
      this.orders = res.response;
      console.log('orders is', this.orders);
    });
  }

}
