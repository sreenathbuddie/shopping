import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { Observable } from 'rxjs';

const loginApiUrl = 'https://xebiascart.herokuapp.com/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLoginDetails(username): Observable<Login[]> {
    return this.http.get<Login[]>(loginApiUrl + "?username=" + username);
  }
}
