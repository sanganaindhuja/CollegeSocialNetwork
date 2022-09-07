import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  studentForm = new FormGroup({
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

  studentSubmitted(){
    console.log(this.studentForm.get(""));
  }
  get Name(): FormControl{
    return this.studentForm.get("Name") as FormControl;
  }
  get email(): FormControl{
    return this.studentForm.get("email") as FormControl;
  }
  get mobile(): FormControl{
    return this.studentForm.get("mobile") as FormControl;
  }
  get password(): FormControl{
    return this.studentForm.get("password") as FormControl;
  }
  // get rpwd(): FormControl{
  //   return this.registerForm.get("rpwd") as FormControl;
  // }
  validateLogin(email: string, password: string) {

        if (email && password && email.trim().length > 0 && password.trim().length > 0) {
           this.router.navigate(['/student-dashboard'])
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
