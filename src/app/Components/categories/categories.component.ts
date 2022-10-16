import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FoodsecionsService } from 'src/app/services/foodsecions.service';
// const headers = new HttpHeaders()
//   .set('content-type', 'application/json')
//   .set('user_name', 'admin')
//   .set('auth_token', '33f78a0f-1de9-49d3-a0d6-ed15e098c3a2')
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  public isCollapsed = true;
  constructor(private http: HttpClient, private menu_item: FoodsecionsService) { }
  categories: any;
  category_item: any;
  subCategories:any
  subCategoriesID:any
  menus:any;
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
  clicked(categortID: any) {
    console.log(categortID)
    this.menu_item.getsubCategory(categortID).subscribe({
      next:(res)=>{
        this.subCategories = res;
        console.log(this.subCategories);
      },
      error:(err)=>{
        console.log('error');
        console.log(err.message)
      }
    })

  }

  getsubCategoryId(subCategoryID){
    console .log(subCategoryID)
    this.subCategoriesID = subCategoryID
    this.menu_item.getmainmenu(subCategoryID).subscribe({
      next:(res)=>{
        this.menus = res;
        console.log(this.menus);
      },
      error:(err)=>{
        console.log('error');
        console.log(err.message)
      }
    })
  }

  count = 0;
  increment(val: any) {
    this.count++;
    this.count == val;
  }
  searchText:string ='';
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText)
  }

  orderDetailforName:any;
  orderDetailforPrice :any;

  getMenusDetail(order_details){
   console.log(order_details.menuName);
   console.log(order_details.menuPrice);
  //  return order_details;
   this.orderDetailforName = order_details.menuName;
   this.orderDetailforPrice = order_details.menuPrice
  }

  getMenuName(){
    return this.orderDetailforName;
  }
  getMenuPrice(){
    return this.orderDetailforPrice;
  }

 
}
