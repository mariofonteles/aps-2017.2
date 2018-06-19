import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";


@Injectable() 
export class StoreService {

    constructor( private http: HttpClient){}

    create(payload: any) {

        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }

        return this.http.post<any>('http://localhost:8000/api/v1/stores', JSON.stringify(payload), httpOptions).toPromise()
        .then( r => {
            debugger;
            return 
        }, e => { debugger; return})

    } 

    getStores() {
        return this.http.get<any>('http://localhost:8000/api/v1/stores').toPromise()
        .then( r => {
            debugger;
            return r
        })
    }
}