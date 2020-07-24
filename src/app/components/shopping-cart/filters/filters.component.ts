import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private filterService: FiltersService) { }

  filterList: any = [];

  colors: any = [];
  brand: any = [];
  minprice: any= [];
  maxprice: any=[];

  ngOnInit(): void {
    this.filterService.getFilterData().subscribe((item) => {
      this.filterList = item;
      console.log(this.filterList);
      for(let x=0; x < this.filterList.length; x++)
      {
        if(this.filterList[x].type==='COLOUR'){
          this.colors = this.filterList[x].values;
        }
        else if(this.filterList[x].type==='BRAND'){
          this.brand = this.filterList[x].values;
        }
        else if(this.filterList[x].type==='PRICE'){
          this.minprice = this.filterList[x].values;
          this.maxprice = this.filterList[x].values;
        }
      }
    })
  }

}
