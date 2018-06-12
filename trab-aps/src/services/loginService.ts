import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedInfo } from "../shared/SharedInfo";


@Injectable()
export class LoginService {

    constructor( private http: HttpClient ) {}

    public login (username: string, password: string) {

        return this.http.post<any>( `${SharedInfo.URL_BASE}/login`, { username: username, password: password })
        .toPromise().then( user => {
            if (user) 
                localStorage.setItem('userToken', JSON.parse(user).token)
            
            return user
        })
    }

    public loginAdmin( admin: string, password: string) {
        return this.http.post<any>(`${SharedInfo.URL_BASE}/Admin`, {email: admin, password: password})
        .toPromise().then( res => {
            if (res)
                localStorage.setItem('adminToken', JSON.parse(res).token)
            return res
        })
    }

    public logout () {
        localStorage.removeItem('userToken')
    }
}