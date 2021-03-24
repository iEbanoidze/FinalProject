import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'FinalProject';
  searchWord : string = "";
  searchInput : string = "";


  idWord: number = 0;
  idInput: number = 0;

  bodyWord: string ="";
  bodyInput: string = "";

  searchData(){
this.searchWord = this.searchInput;
  }

  searchById(){
    this.idWord = this.idInput;
    this.bodyWord = this.bodyInput;
  }
}
