import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.user.deleteUser();
    this.route.navigate(['signin'])
  }

}
