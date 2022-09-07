import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  id!: number
  faculty!: Faculty

  constructor(private route: ActivatedRoute, private facultyService: FacultyService) { }

  ngOnInit() {
    this.faculty = new Faculty();

    this.id = this.route.snapshot.params['id'];

    this.faculty = new Faculty();
    this.facultyService.getFacultyById(this.id).subscribe(data =>{
      this.faculty = data;
    });
  }

}
