import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  router: any;
  myValue: any;

  constructor() { }

  ngOnInit(): void {
  }
  students= [
          {id:1001, name:"Ram", marks:90, department:"ECE"},
          {id:1002, name:"Sita", marks:75, department:"CSE"},
          {id:1003, name:"Karthik", marks:50, department:"IT"}
          ];
          model:any={};
          
          msg:any="";
    
          addStudents(){
           this.students.push(this.model);
          this.model = {};
         this.msg = "Record is successfully added..... "; 
         
          }
           
            model2:any={} ;
     
         
    
    updateStudent(){
        let k= this.myValue;
        for(let i=0; i<this.students.length;i++){
         if(i==k){
         this.students[i]= this.model2;
         this.model2 = {};
         this.msg = "Record is successfully updated..... ";
         }
        
         }
        
         }
    
          clickMe(){
            this.msg = "";
    }
  }
    
           
  // enterMarks() {
  //     this.router.navigate(['EnterMarks']);
  //     }
    
  //     updateMarks() {
  //       this.router.navigate(['UpdateMarks']);
  //     }
  //       createList() {
  //         this.router.navigate(['CreateList']);
  //       }
  //         logout() {
  //           this.router.navigate(['LogOut']);
  //         }
