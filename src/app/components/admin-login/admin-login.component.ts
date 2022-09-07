import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  adminForm = new FormGroup({
    Name:new FormControl("",[Validators.required,
    Validators.minLength(5),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,
      Validators.pattern("['0-9']*"),
      Validators.minLength(10),
      Validators.maxLength(10)]),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]),
    rpwd: new FormControl(""),
  });

  adminSubmitted(){
    console.log(this.adminForm.get(""));
  }
  get Name(): FormControl{
    return this.adminForm.get("Name") as FormControl;
  }
  get email(): FormControl{
    return this.adminForm.get("email") as FormControl;
  }
  get mobile(): FormControl{
    return this.adminForm.get("mobile") as FormControl;
  }
  get password(): FormControl{
    return this.adminForm.get("password") as FormControl;
  }
  // get rpwd(): FormControl{
  //   return this.registerForm.get("rpwd") as FormControl;
  // }
  validateLogin(email: string, password: string) {

        if (email && password && email.trim().length > 0 && password.trim().length > 0) {
           this.router.navigate(['/admin'])
        }
        else {
          alert('Details seems to be invalid ! Please make sure to fill all the required fields before Login.')
        }
      }
}



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent implements OnInit {

//   constructor(private router: Router) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   validateLogin(email: string, password: string) {

//     if (email && password && email.trim().length > 0 && password.trim().length > 0) {
//       this.router.navigate(['/faculty'])
//     }
//     else {
//       alert('Details seems to be invalid ! Please make sure to fill all the required fields before Login.')
//     }
//   }
// }
