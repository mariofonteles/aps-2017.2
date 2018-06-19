import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";


@Injectable()
export class RegisterService {

    constructor( private http: HttpClient){}

    registerUser(payload: any) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              //'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }
        return this.http.post<any>(`http://localhost:8000/api/v1/clients`, JSON.stringify(payload), httpOptions).toPromise()
        .then( r => {
            debugger;
            console.log(JSON.parse(r))
        }, e => {
            debugger;
            console.log(e)
        })
    }
}