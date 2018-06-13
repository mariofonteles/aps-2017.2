import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Session } from "../../entities/Session";
import { SessionService } from "../../services/sessionService";
import { Router, ActivatedRoute } from "@angular/router";
import { Movies } from "../../entities/Movies";


@Component({
    selector: 'session-page',
    templateUrl: 'sessionComponent.html',
    styleUrls: ['sessionComponent.scss']
})
export class sessionComponent implements OnInit {
    @Input() model: Movies; 
    sessions: Array<Session> = []
    selectedMovie: Movies
    selectedSession: Session
    sub: any

    constructor( private sessionService: SessionService, private router: Router, private route: ActivatedRoute){}

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            this.selectedMovie = new Movies({ Name: params.name, Id: params.id, Image: localStorage.getItem('imageCurrent')})
            debugger;
        })
    }

    goToSeats() {
        this.router.navigate(['tickets', this.selectedSession])
    }
}