import { Injectable } from '@angular/core';
import { Book } from '../model/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  //In the Book Service, we will create an array of books, the Book will have an id:number,name:string, authors:string[], and isbn:string field

  books: Book[] = [
    { id: 1, name: 'Louie', authors: ['author1'], isbn: '1234565' },
    { id: 2, name: 'Juan', authors: ['author2'], isbn: '987654321' },
    { id: 3, name: 'Maria', authors: ['author3','author1'], isbn: '888877777' },
  ];

  constructor() {}

  //The Book Service should have a function that will return the array of books
  getBook() : Book[] {
    return this.books
  }
}
