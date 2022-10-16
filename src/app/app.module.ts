import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { authInterceptorProviders } from './services/token-interceptor.service';
import { CategoriesComponent } from './Components/categories/categories.component';
import { HeaderComponent } from './Components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NextDirective } from './Directives/next.directive';
import { PrevDirective } from './Directives/prev.directive';
import { CategoriesItemComponent } from './Components/categories-item/categories-item.component';
import { SearchComponent } from './Components/search/search.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { OrdersComponent } from './Components/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    CategoriesComponent,
    HeaderComponent,
    NextDirective,
    PrevDirective,
    CategoriesItemComponent,
    SearchComponent,
    SidebarComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    

  ],
  providers: [authInterceptorProviders],
  // {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  bootstrap: [AppComponent]
})
export class AppModule { }
