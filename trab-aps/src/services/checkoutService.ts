import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";

@Injectable() 
export class CheckoutService {

    constructor( private http: HttpClient){}

    send(payload: any) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }

          debugger;

        return this.http.post<any>('http://localhost:8000/api/v1/clients/buy_ticket', JSON.stringify(payload), httpOptions).toPromise()
        .then( r => {
            return
        }, e => {
            debugger;
            return
        })
    }

    saveCard(payload: any) {

        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }

          return this.http.post<any>('http://localhost:8000/api/v1/clients/add_card', JSON.stringify(payload), httpOptions).toPromise()
          .then( r => r)

    }

}