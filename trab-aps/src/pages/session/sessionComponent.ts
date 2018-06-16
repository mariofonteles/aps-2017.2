import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Session } from "../../entities/Session";
import { SessionService } from "../../services/sessionService";
import { Router, ActivatedRoute } from "@angular/router";
import { Movies } from "../../entities/Movies";
import { DayDto } from "../../entities/Day";
import { Theater } from "../../entities/Theater";
import { Room } from "../../entities/Room";
import { Seat } from "../../entities/Seat";


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
    isHovering: boolean = false

    constructor( private sessionService: SessionService, private router: Router, private route: ActivatedRoute){}

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            this.selectedMovie = new Movies({ Name: params.name, Id: params.id, Image: localStorage.getItem('imageCurrent')})
        })

        let rooms = [ new Room( {
            Name: 'Sala 1',
            Id: 1,
            Sessions: [new Session({Date: `${new Date().getDate()}/0${new Date().getMonth()+1}`, Time: '19:40', price: "19.00"}), 
            new Session({Date: `${new Date().getDate()+1}/0${new Date().getMonth()+1}`, Time: '16:40', price: "19.00",})],
            free_seats: [ new Seat({id: '1', number: 1, letter: 'A'}), new Seat({id: '2', number: 2, letter: 'A'})]
        }),
        new Room( {
            Name: 'Sala 2',
            Id: 2,
            Sessions:  [new Session({Date: `${new Date().getDate()}/0${new Date().getMonth()+1}`, Time: '14:40', price: "19.00",}), 
            new Session({Date: `${new Date().getDate()+1}/0${new Date().getMonth()+1}`, Time: '13:40', price: "19.00",})],
            free_seats: [ new Seat({id: '1', number: 1, letter: 'A'}), new Seat({id: '2', number: 2, letter: 'A'})]
        })]

        this.theatersFromApi = [ new Theater({Name: 'Cinema 1', Id: 1, Rooms: rooms})]
        debugger;
        localStorage.setItem('theaters', JSON.stringify(this.theatersFromApi))
        this.theaters = this.theatersFromApi

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
        //this.sessionsShown = this.sessions.filter( session => session.Date == day.date)
    }

    getTickets(session: Session, room: Room, theater: Theater) {
        debugger;
        let selecaoDto = {
            session: session,
            room: room,
            theater: theater,
            movie: this.selectedMovie
        }
        debugger;
        localStorage.setItem('selectedSession', JSON.stringify(selecaoDto))
        this.router.navigate(['/checkout'])
    }

    goToSeats() {
        this.router.navigate(['tickets', this.selectedSession])
    }
}