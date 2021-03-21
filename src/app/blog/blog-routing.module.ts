import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  { path: '', component: BlogHomeComponent },
  { path: 'edit', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
