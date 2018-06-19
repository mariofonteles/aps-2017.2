import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";
import { Session } from "../entities/Session";
import {RequestOptions } from '@angular/http';

@Injectable()
export class SessionService {

    constructor(private http: HttpClient){
    }

    listSessions(movieId: number) {
        return this.http.get<any>(`${SharedInfo.URL_BASE}/Sessions/obterSessoes?movieId=${movieId}`).toPromise()
        .then( sessoes => JSON.parse(sessoes))
    }

    send(payload) {

        console.log(localStorage.getItem('userToken'))
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }

        debugger;

        return this.http.post<any>('http://localhost:8000/api/v1/sessions', JSON.stringify(payload), httpOptions).toPromise()
        .then( r => {
            debugger;
            return r
        }, e => {
            debugger;
        })
    }

    listSessionsMock(movieId: number) {

        return [
            new Session({Date: new Date(), MovieId: 1}),
            new Session({Date: new Date(), MovieId: 1}),
            new Session({Date: new Date(), MovieId: 1}),
            new Session({Date: new Date(), MovieId: 1})
        ]

    }
}