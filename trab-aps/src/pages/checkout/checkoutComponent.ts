import { Component, OnInit } from "@angular/core";
import { Seat } from "../../entities/Seat";
import { Movies } from "../../entities/Movies";


@Component({
    selector: 'checkout-page',
    templateUrl: './checkoutComponent.html',
    styleUrls: ['./checkoutComponent.scss']
})
export class CheckoutComponent implements OnInit {

    selectedSession: any
    selectedSeats: Array<Seat> = []
    viewModelDto: any
    seats: Array<Seat>
    selectedMovie: Movies
    //currentPrice: number = 0.00

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
        debugger;
    }

    selectSeat(seat: Seat) {
        seat.clicked = !seat.clicked
        if (this.selectedSeats.includes(seat)) {
            this.selectedSeats = this.selectedSeats.filter( seatInArray => seatInArray != seat)
        }
        else 
            this.selectedSeats.push(seat)

        //this.currentPrice = this.viewModelDto.sessionPrice * this.selectedSeats.length
    }

    changePrice(seatSelected: Seat) {
        if (seatSelected.price == 19.00) {
            seatSelected.price = seatSelected.price/2
            debugger;
            //this.currentPrice = this.currentPrice/2
        }
        else if (seatSelected.price == 19.00/2) {

            seatSelected.price = seatSelected.price * 2
            debugger;
            //this.currentPrice = this.currentPrice * 2
        }

            //return this.selectedSeats.map( seat => seat.price = seat.id == seatSelected.id? seat.price*2 : seat.price)
    }

    get currentPrice() {
        if(this.selectedSeats.length > 0)
            return this.selectedSeats.map( seat => Number(seat.price)).reduce( (seatPrev, seatNext) => Number(seatPrev + seatNext))
        else 
            return 0.00
    }

    buy() {
        let buyDto = {
            seats: this.selectedSeats,

        }

        //TODO
    }

}