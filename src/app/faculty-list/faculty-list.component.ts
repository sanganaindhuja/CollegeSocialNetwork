import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Faculty } from '../faculty'
import { FacultyService } from '../faculty.service';


@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  faculties!: Faculty[];

  constructor(private facultyService: FacultyService,
    private router: Router) { }

  ngOnInit(): void {
   this.getfaculties();
 }
    private getfaculties(){
      this.facultyService.getFacultiesList().subscribe(data =>{
        this.faculties = data;
      });

    }
    facultyDetails(id: number){
      this.router.navigate( ['faculty-details', id]);

    }
    
    updateFaculty(id: number){
      this.router.navigate( ['update-faculty', id]);
    }

    deleteFaculty(id: number){
      this.facultyService.deleteFaculty(id).subscribe( data =>{
        console.log(data);
        this.getfaculties();
      })
    }
  }
