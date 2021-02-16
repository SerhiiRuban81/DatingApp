import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter<boolean>();
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
    this.auth.register(this.model).subscribe((data)=>
    {
      console.log("Пользователь зарегистрирован!");
      console.log(data);
      this.cancelRegister.emit(false);
    },
    error=>{
      console.log(error);
    }
    );
  }

  cancel(){
    console.log("canceled");
    this.cancelRegister.emit(false);
  }


}
