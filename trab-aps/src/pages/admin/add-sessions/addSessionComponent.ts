import { Component, OnInit } from "@angular/core";
import { Movies } from "../../../entities/Movies";
import { Session } from "../../../entities/Session";
import { Theater } from "../../../entities/Theater";
import { Room } from "../../../entities/Room";


@Component({
    selector: 'addSession-page',
    templateUrl: './addSessionComponent.html',
    styleUrls: ['./addSessionComponent.scss']
})
export class AddSessionComponent implements OnInit {

    movies: Movies
    sessions: Array<Session> = [new Session()]
    selectedMovie: Movies
    selectedStore: Theater
    selectedRoom: Room
    

    constructor(){}

    ngOnInit() {

    }

    addSession() {
        this.sessions.push(new Session())
    }
}