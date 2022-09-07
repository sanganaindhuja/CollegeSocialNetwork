import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'postcopy/index', component: IndexComponent },
  { path: 'postcopy/:postId/view', component: ViewComponent },
  { path: 'postcopy/create', component: CreateComponent },
  { path: 'postcopy/:postId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostcopyroutingModule { }
