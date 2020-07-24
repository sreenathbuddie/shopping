import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/models/DataService';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  fullName: string;
  cartCount: string;

  constructor(private dataSearch: DataService) { }

  ngOnInit(): void {
    this.dataSearch.currentFullNmae.subscribe(val => {
        this.fullName = val;
      })

      this.dataSearch.currentCartCount.subscribe(val => {
        this.cartCount = val;
      })
  }

}
