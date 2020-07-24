import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

const filtersApiUrl = 'https://xebiascart.herokuapp.com/filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }

  getFilterData(): Observable<Product[]> {
    return this.http.get<Product[]>(filtersApiUrl);
  }
}
