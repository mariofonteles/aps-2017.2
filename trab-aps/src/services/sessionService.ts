import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";
import { Session } from "../entities/Session";
import {RequestOptions } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    }),
    token: `Token ${localStorage.getItem('userToken')}`
  };

@Injectable()
export class SessionService {

    constructor(private http: HttpClient){
    }

    listSessions(movieId: number) {
        return this.http.get<any>(`${SharedInfo.URL_BASE}/Sessions/obterSessoes?movieId=${movieId}`).toPromise()
        .then( sessoes => JSON.parse(sessoes))
    }

    send() {

        return this.http.post<any>(`${SharedInfo.URL_BASE}/Sessions`, {}, httpOptions)
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