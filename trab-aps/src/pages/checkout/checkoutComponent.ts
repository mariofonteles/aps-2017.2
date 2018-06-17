import { Component, OnInit } from "@angular/core";
import { Seat } from "../../entities/Seat";
import { Movies } from "../../entities/Movies";


@Component({
    selector: 'checkout-page',
    templateUrl: './checkoutComponent.html',
    styleUrls: ['./checkoutComponent.scss']
})
export class CheckoutComponent implements OnInit {

    get currentPrice() {
        if(this.selectedSeats.length > 0)
            return this.selectedSeats.map( seat => Number(seat.price)).reduce( (seatPrev, seatNext) => Number(seatPrev + seatNext))
        else 
            return 0.00
    }

    selectedSession: any
    selectedSeats: Array<Seat> = []
    viewModelDto: any
    seats: Array<Seat>
    selectedMovie: Movies
    payment: any = {}

    constructor(){}

    ngOnInit() {

        this.selectedSession = JSON.parse(localStorage.getItem('selectedSession'))

        this.selectedMovie = this.selectedSession.movie

        this.viewModelDto = {
            cinemaName: this.selectedSession.theater.Name,
            roomName: this.selectedSession.room.Name,
            session: this.selectedSession.session,
            sessionPrice: this.selectedSession.session.price
        }

        this.seats = this.selectedSession.room.free_seats
        this.seats.map( seat => seat.price = this.viewModelDto.sessionPrice) 
    }

    selectSeat(seat: Seat) {
        seat.clicked = !seat.clicked
        if (this.selectedSeats.includes(seat))
            this.selectedSeats = this.selectedSeats.filter( seatInArray => seatInArray != seat)
        else 
            this.selectedSeats.push(seat)

    }

    changePrice(seatSelected: Seat) {
        if (seatSelected.price == this.selectedSession.session.price) 
            seatSelected.price = seatSelected.price/2
        else 
            seatSelected.price = seatSelected.price * 2
    }

    buy() {
        debugger;
        let buyDto = {
            seats: this.selectedSeats,

        }

        //TODO
    }

}