import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Userrole } from 'src/app/Admin/customer/Userrole';
import { CustomerService } from 'src/app/Admin/customer/customer.service';
import { User } from './user';
import { ifError } from 'assert';
import { Customeruser } from 'src/app/Admin/customer/CustomerUser';
import { Customerusr } from 'src/app/Admin/customer/CustomerUsr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allCustomer : Userrole[];
  isLoggedIn: string='';
  errorMessage: string = "Wrong Email Id & Password. Pls try again";
  check: string = "success";
  user : User={
    emailid : '',
    password : '',
    role : '',
    status: ''
  };
  user1 : Userrole;
  public email: string ='';
  public password: string ='';
  constructor(private router: Router,
    public service: CustomerService
    ) { }
  
  // authenticate(mail : string, pass: string){
  //   this.matchUser(mail,pass);
     
    // usr.role="";
    // let role = this.service.currentUser;
    // console.log(this.service.currentUser);
    
    // if(this.service.userRole[0].email==this.email && this.service.userRole[0].password==this.password && this.service.userRole[0].ro){
    
    // if(form.valid){  
      // if(this.email=='iftekharhossain395@gmail.com' || this.password=='0000'){
        // this.router.navigateByUrl("/dhrubo/admin/dashboard");
      // }else{
      //   this.errorMessage = "Alert!!! Wrong Email Id & Password";

      // }
    // }
    // else{
    //   this.errorMessage = "Wrong Email Id & Password";
    // }
  // }

  ngOnInit(): void {
    // sessionStorage.setItem();
  }
  checkMail: number ;
  
   matchUser(email: string, password: string){
      this.service.getUser(email,password).subscribe((data: Customerusr[])=>{
        this.service.userRole1 = data;
        this.checkMail = this.service.userRole1.length;
        console.log(this.service.userRole1);
        console.log(this.checkMail);
        // if(this.service.userRole1 = []){
        // this.errorMessage = "Alert!!! Wrong Email Id & Password";
        // }
        // else
         if(this.service.userRole1[0][1].email==this.email || this.service.userRole1[0][0].password==this.password ||this.service.userRole1[0][0].status=="Active"){
          // this.isLoggedIn = "yes";
          console.log(this.service.userRole1[0][0].status);
          if(this.service.userRole1[0][0].role=="Admin"){
          this.router.navigateByUrl("/dhrubo/admin/dashboard");
        }else if (this.service.userRole1[0][0].role=="Customer") {
          this.router.navigateByUrl("/dhrubo/user/fpage");
          
        } else {
          this.router.navigateByUrl("/dhrubo/agent");
          
        }
        }
      })
   }
  // loginForm: FormGroup;
  // invalidLogin: boolean = false;
  // constructor(private formBuilder: FormBuilder,
  //             private router: Router,
  //             private service: CustomerService
  //   ){}

  //  ngOnInit(){
  //    this.loginForm = this.formBuilder.group({
  //      username: ['', Validators.compose([Validators.required])],
  //      password: ['', Validators.required]
  //    })
  //  } 

  //  onSubmit(){
  //   //  console.log(this.loginForm.value);
  //   if(this.loginForm.invalid){
  //     return true;
  //   }

  //  const loginData = {
  //    username: this.loginForm.controls.username.value,
  //    password: this.loginForm.controls.password.value
  //  }

  //  this.service.login()
  // }
}
