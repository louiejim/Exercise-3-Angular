import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogItemComponent } from './component/blog-item/blog-item.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

@NgModule({
  declarations: [
  
    BlogItemComponent,
       BlogListComponent
  ],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
