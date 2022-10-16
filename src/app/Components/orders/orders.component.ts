import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FoodsecionsService } from 'src/app/services/foodsecions.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private menu_item:FoodsecionsService, private http:HttpClient) { }

  categories: any;
  ngOnInit(): void {
    this.menu_item.getmainCategory()
      .subscribe({
        next: (res) => {
          this.categories = res;
        },
        error: (err) => {
          console.log('error');
          console.log(err.message)
        }
      })
}
@Input() orderDetailName:any;
@Input() orderDetailPrice:any;
@Input() number:any = 1;
}
