import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../model/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blog: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.blog.getBlog();
  }

  edit(id: number){
    //edit logic
  }
  delete(id:number){
    //delete logic
  }
}
