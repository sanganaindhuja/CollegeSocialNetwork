import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';


@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {

  faculty: Faculty = new Faculty();
  submitted = false;

  constructor(private facultyService: FacultyService,
    private router: Router) { }

  ngOnInit() {

  }

  newFaculty(): void {
    this.submitted = false;
    this.faculty = new Faculty();
  }


  saveFaculty(){ 
    this.facultyService.createFaculty(this.faculty).subscribe( data => {
      console.log(data);
      this.faculty = new Faculty();
      this.goToFacultyList();   
    },
       error  => console.log(error));   
  }

  goToFacultyList(){
    this.router.navigate(['/faculties']);
  }
  
  onSubmit() {
    this.submitted = true;
    this.saveFaculty();    
  }
}

