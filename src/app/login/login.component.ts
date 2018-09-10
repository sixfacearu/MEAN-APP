import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
     password:new FormControl(null,[Validators.required])
   })
   
  constructor(private routes:Router) { }

  ngOnInit() {
  }
  movetoregister(){
    if(!this.loginform.valid){
      console.log('invalid');return
      
    }
      console.log(JSON.stringify(this.loginform.value))
  
    // this.routes.navigate(['/register'])

  }

}
