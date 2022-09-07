import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  validateLogin(email: string, password: string) {

    if (email && password && email.trim().length > 0 && password.trim().length > 0) {
      this.router.navigate(['/postcopy/index'])
    }
    else {
      alert('Details seems to be invalid ! Please make sure to fill all the required fields before Login.')
    }
  }
}
