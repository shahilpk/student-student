import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupform!:FormGroup
  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    // vallidation
    this.signupform = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]

    })
  }
   

  // creation
  signup(){
    this._http.post<any>("http://localhost:3000/signup",this.signupform.value)
    .subscribe(res=>{
      alert("student registered successfully")
      this.signupform.reset();
      this.router.navigate(['login'])
    },
    err=>{
      alert("something wents ")
    }
    )
  }
}
