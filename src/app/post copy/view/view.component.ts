import { Component, OnInit } from '@angular/core';
import { PostcopyService } from '../postcopy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { postcopy } from '../post';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  post!: postcopy;
  postcopy: postcopy | undefined;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostcopyService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
        
    this.postService.find(this.id).subscribe((data: postcopy)=>{
      this.postcopy = data;
    });
  }
    
}