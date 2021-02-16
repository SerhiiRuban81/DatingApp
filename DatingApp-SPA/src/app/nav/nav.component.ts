import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log(JSON.stringify(this.model));
    this.auth.login(this.model).subscribe(next=>{
      console.log("Успешный вход");
    },
    error=>{
      console.log(error);
    })

    //console.log(data);
  }

  logout(){
    localStorage.removeItem("token");
    console.log("Пользователь вышел из аккаунта");
  }

  loggedIn()
  {
    const token = localStorage.getItem("token");
    return !!token;
  }

}
