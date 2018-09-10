import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserserviceService} from '../userservice.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerform:FormGroup=new FormGroup({
email:new FormControl(null,[Validators.email,Validators.required]),
password:new FormControl(null,[Validators.required]),
cpassword:new FormControl(null,[Validators.required])
})
  constructor(private routes:Router,private UserserviceService:UserserviceService) { }

  ngOnInit() {
  }
  movetologin(){
    
    
    if(!this.registerform.valid||this.registerform.controls.password.value!=this.registerform.controls.cpassword.value){
    console.log('invalide'); return
  }
  this.UserserviceService.register(this.registerform.value).subscribe(data=>{console.log(data);this.routes.navigate(['/login'])
})
   

    
    
    // this.routes.navigate(['/login'])

  }

}
