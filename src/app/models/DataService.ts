import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    // For Searching products

    private dataSearch = new ReplaySubject<any>();
    currentSearch = this.dataSearch.asObservable();

    changeSearch(source: any){
        this.dataSearch.next(source);
    }

    // For FullName

    private dataFullName = new ReplaySubject<any>();
    currentFullNmae = this.dataFullName.asObservable();

    changeFullName(source: any){
        this.dataFullName.next(source);
    }

    // Cart Count

    private dataCart = new ReplaySubject<any>();
    currentCartCount = this.dataCart.asObservable();

    changeCartCount(source: any){
        this.dataCart.next(source);
    }

}