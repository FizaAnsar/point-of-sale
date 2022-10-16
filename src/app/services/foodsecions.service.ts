import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('user_name', 'admin')
  .set('auth_token', 'b32eba71-d1ae-4302-a40f-73c4b7d673f4')


@Injectable({
  providedIn: 'root'
})
export class FoodsecionsService {

  responsedata: any = '';
 

  constructor(private http: HttpClient, private user: UserService) { }
  token = this.user.getToken()
  // headers:new HttpHeaders({
  //   'content-type':'application/json',
  //   'user_name': 'admin',
  //   'auth_token': `{{this.token}}`
  // })
  getmainCategory() {
    return this.http.get('http://192.168.10.215:8080/handi-ear/api/sections', {'headers':headers });
      
  }
  getsubCategory(CategoryID){
    // this.subCategoryId = data;
    return this.http.get(`http://192.168.10.215:8080/handi-ear/api/categories/section/${CategoryID}`, {'headers':headers })
  }
  getmainmenu(subCategoryID){
    return this.http.get(`http://192.168.10.215:8080/handi-ear/api/menus/categories/${subCategoryID}`, {'headers':headers })
  }
}
