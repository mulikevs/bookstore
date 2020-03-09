import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]=[]
  currentCategoryID:number;
  constructor(private _bookService:BookService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.lostBooks();
    });
  }

  lostBooks(){

    const hasCotegoryID: boolean =this._activatedRoute.snapshot.paramMap.has('id');

    if(hasCotegoryID){

     this.currentCategoryID= +this._activatedRoute.snapshot.paramMap.get('id');


    }else{
      this.currentCategoryID=1;
    }



    this._bookService.getBooks(this.currentCategoryID).subscribe(
      data =>this.books=data
    )
  }

}
