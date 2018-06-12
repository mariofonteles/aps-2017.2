import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";
import { Session } from "../entities/Session";


@Injectable()
export class SessionService {

    mockSessions

    constructor(private http: HttpClient){}

    listSessions(movieId: number) {
        return this.http.get<any>(`${SharedInfo.URL_BASE}/Sessions/obterSessoes?movieId=${movieId}`).toPromise()
        .then( sessoes => JSON.parse(sessoes))
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