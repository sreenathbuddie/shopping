import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { DataService } from 'src/app/models/DataService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchvalue: string;

  constructor(private searchservice: SearchService,private datasearch: DataService) { }

  ngOnInit(): void {
  }

  search(searchvalue: string){
    this.datasearch.changeSearch(searchvalue);
  }

}
