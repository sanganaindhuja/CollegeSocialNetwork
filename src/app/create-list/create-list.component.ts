
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

students= [
    {id:1001, name:"Ram", marks:90, department:"ECE"},
    {id:1002, name:"Sita", marks:75, department:"CSE"},
    {id:1003, name:"Karthik", marks:50, department:"IT"}
    ];
    model:any={};
    model2:any={};
    msg:any="";

  deleteStudent(i:any){
        this.students.splice(i,1);
        this.msg = "Record is successfully deleted..... ";
        
      }
      myValue:any;
      editStudent(k:any){
        this.model2.name = this.students[k].name;
        this.model2.position = this.students[k].marks;
        this.model2.position = this.students[k].department;
        this.myValue = k;
    
     }
     clickMe(){
      this.msg = "";
     }
    

  }


