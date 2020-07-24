import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const searchApiUrl = 'https://xebiascart.herokuapp.com/products';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchDetails(value): Observable<Product[]> {
    return this.http.get<Product[]>(searchApiUrl + "?title=" + value);
  }
}

