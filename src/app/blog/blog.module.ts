import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuillModule } from 'ngx-quill';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './posts/posts.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { PostEditComponent } from './post-edit/post-edit.component';


@NgModule({
  declarations: [PostsComponent, BlogHomeComponent, PostEditComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
    QuillModule
  ]
})
export class BlogModule { }
