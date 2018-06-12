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
export class sessionComponent implements OnChanges {
    @Input() model: Movies; 
    sessions: Array<Session> = []
    selectedMovie: Movies
    selectedSession: Session

    constructor( private sessionService: SessionService, private router: Router, private route: ActivatedRoute){}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.model && changes.model.currentValue != changes.model.previousValue)
            this.sessions = this.sessionService.listSessionsMock(this.model.Id)
    }

    goToSeats() {
        this.router.navigate(['tickets', this.selectedSession])
    }
}