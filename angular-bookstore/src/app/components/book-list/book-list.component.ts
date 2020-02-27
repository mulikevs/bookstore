import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]=[]
  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    this.lostBooks();
  }

  lostBooks(){
    this._bookService.getBooks().subscribe(
      data =>this.books=data
    )
  }

}
