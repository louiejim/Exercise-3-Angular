import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Mr',
      author: 'Louie',
      description: 'Author1',
      comments: ['NA'],
    },
    {
      id: 2,
      title: 'Ms',
      author: 'Camille',
      description: 'Author2',
      comments: ['Director'],
    },
    {
      id: 3,
      title: 'Mr',
      author: 'Dereck',
      description: 'Author3',
      comments: ['Not applicable'],
    },
  ];

  constructor() {}
  //The Blog Service should have a function that will return the array of blogs
  getBlog(): Blog[] {
    return this.blogs;
  }
}
