import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Session } from "../../entities/Session";
import { SessionService } from "../../services/sessionService";
import { Router, ActivatedRoute } from "@angular/router";
import { Movies } from "../../entities/Movies";
import { DayDto } from "../../entities/Day";
import { Theater } from "../../entities/Theater";


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
    selectedDay: any
    theaters: Array<Theater>
    theatersFromApi: Array<Theater>
    sub: any
    weekDays: Array<any> = []
    sessionsShown: Array<Session> = []

    constructor( private sessionService: SessionService, private router: Router, private route: ActivatedRoute){}

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            this.selectedMovie = new Movies({ Name: params.name, Id: params.id, Image: localStorage.getItem('imageCurrent')})
        })

        this.sessions = [ new Session({Date: `${new Date().getDate()}/0${new Date().getMonth()+1}`, Time: '19:40'})
        ,
        new Session({Date: `${new Date().getDate()+1}/0${new Date().getMonth()+1}`, Time: '18:40'}),
        new Session({Date: `${new Date().getDate()+2}/0${new Date().getMonth()+1}`, Time: '17:40'}),
        new Session({Date: `${new Date().getDate()+3}/0${new Date().getMonth()+1}`, Time: '15:40'})]

        this.theatersFromApi = [ new Theater({Name: 'Cinema 1', Id: 1, Sessions: this.sessions}), 
                          new Theater({Name: 'Cinema 2', Id: 2, 
                          Sessions: [new Session({Date: `${new Date().getDate()+1}/0${new Date().getMonth()+1}`, Time: '18:40'})]})
                        ]
        localStorage.setItem('theaters', JSON.stringify(this.theatersFromApi))
        this.theaters = this.theaters

        this.weekDays = [{date: `${new Date().getDate()}/0${new Date().getMonth()+1}`}, 
        {date: `${new Date().getDate()+1}/0${new Date().getMonth()+1}`},
        {date: `${new Date().getDate()+2}/0${new Date().getMonth()+1}`},]
    }

    clickDay(day: any) {
        if (this.selectedDay)
            this.selectedDay.isSelected = false
        this.selectedDay = day
        day.isSelected = !day.isSelected
        this.theaters = []

        let theatersLocal:Array<Theater> = JSON.parse(localStorage.getItem('theaters'))
        this.theaters = theatersLocal.map( theater => {
            theater.Sessions = theater.Sessions.filter(session => session.Date == day.date)
            return theater.Sessions.length > 0? theater : null
        })
        //this.sessionsShown = this.sessions.filter( session => session.Date == day.date)
    }

    getTickets(session: Session) {
        localStorage.setItem('selectedSession', JSON.stringify(session))
        this.router.navigate(['/tickets'])
    }

    goToSeats() {
        this.router.navigate(['tickets', this.selectedSession])
    }
}