import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedInfo } from "../shared/SharedInfo";


@Injectable()
export class LoginService {

    constructor( private http: HttpClient ) {}

    public login (username: string, password: string) {

        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              //'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }
          debugger;
        return this.http.post<any>( `http://localhost:8000/api/auth/login`, JSON.stringify({ email: username, password: password }), httpOptions)
        .toPromise().then( user => {
            if (user) 
                localStorage.setItem('userToken', user.token)
            
            return user
        })
    }

    public loginAdmin( admin: string, password: string) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              //'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }
          debugger;
        return this.http.post<any>(`http://localhost:8000/api/auth/login`,JSON.stringify({ email: admin, password: password }), httpOptions)
        .toPromise().then( res => {
            if (res)
                localStorage.setItem('userToken', res.token)
            return res
        })
    }

    public logout () {
        localStorage.removeItem('userToken')
    }
}