import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {

  id! : number;
  faculty! : Faculty;

  constructor(private facultyService: FacultyService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit()  {
    this.faculty = new Faculty();

    this.id = this.route.snapshot.params[`id`];

   this.facultyService.getFacultyById(this.id)
   .subscribe(data =>{
    console.log(data)
    this.faculty = data;
   }, error => console.log(error));
 }
  onSubmit(){
    this.goToFacultyList();  
  }  
  updateFaculty() {

    this.facultyService.updateFaculty(this.id, this.faculty)
    .subscribe(data => {
      console.log(data);
      this.faculty = new Faculty();
      this.goToFacultyList();
    }, error => console.log(error));

  }
  goToFacultyList(){
    this.router.navigate(['/faculties']);
  }
}