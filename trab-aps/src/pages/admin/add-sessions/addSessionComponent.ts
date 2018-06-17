import { Component, OnInit } from "@angular/core";
import { Movies } from "../../../entities/Movies";
import { Session } from "../../../entities/Session";


@Component({
    selector: 'addSession-page',
    templateUrl: './addSessionComponent.html',
    styleUrls: ['./addSessionComponent.scss']
})
export class AddSessionComponent implements OnInit {

    movies: Movies
    sessions: Array<Session> = [new Session()]
    

    constructor(){}

    ngOnInit() {

    }

    addSession() {
        this.sessions.push(new Session())
    }
}