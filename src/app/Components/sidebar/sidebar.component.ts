import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  active = false;
  constructor(private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  toggleClass(){
    this.active = !this.active;
  }

  logout(){
    this.user.deleteUser();
    this.route.navigate(['signin'])
  }

}
