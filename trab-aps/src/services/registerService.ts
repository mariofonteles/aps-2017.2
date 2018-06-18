import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }),
    token: `Token ${localStorage.getItem('userToken')}`
  };


@Injectable()
export class RegisterService {

    constructor( private http: HttpClient){}

    registerUser(payload: any) {
        return this.http.post<any>(`${SharedInfo.URL_BASE}/clients`, payload, httpOptions)
    }
}