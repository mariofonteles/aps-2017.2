import { Component, OnInit } from "@angular/core";
import { Seat } from "../../entities/Seat";
import { Movies } from "../../entities/Movies";
import { CheckoutService } from "../../services/checkoutService";


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
    selectedSeats: Array<any> = []
    viewModelDto: any
    seats: Array<any>
    selectedMovie: Movies
    payment: any = {}

    constructor(private checkoutService: CheckoutService){}

    ngOnInit() {

        this.selectedSession = JSON.parse(localStorage.getItem('selectedSession'))

        debugger;

        this.selectedMovie = this.selectedSession.movie

        this.viewModelDto = {
            cinemaName: this.selectedSession.theater.name,
            roomName: this.selectedSession.room.number,
            session: this.selectedSession.session,
            sessionPrice: this.selectedSession.session.price,
            date: this.selectedSession.date
        }

        debugger;

        this.seats = this.selectedSession.session.seats
        this.seats.map( seat => seat.price = this.viewModelDto.sessionPrice) 
        this.seats.filter( seat => seat.buy_registers.length == 0)
    }

    selectSeat(seat: Seat) {
        if (this.selectedSeats.length == 4)
            return 
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
        let seats = []
        for (let seat of this.selectedSeats)
            seats.push(seat.id)
        let buyDto = {
            movie_id: this.selectedSession.movie.id,
            session_id: this.selectedSession.session.id,
            session_start: this.selectedSession.session.start_session,
            session_date: this.selectedSession.date,
            room_id: this.selectedSession.room.id,

            seats_id: seats,

            sessionPrice: this.currentPrice,
            number_midle_ticket: this.selectedSeats.length

        }

        let cardDto = {
            security_number: this.payment.securityNumber,
            number_card: this.payment.cardNumber,
            card_holder_name: this.payment.cardHolderName,
            due_date: this.payment.dueDate
        }

        debugger;

        this.checkoutService.send(buyDto).then( r => {

            this.checkoutService.saveCard(cardDto)
        })

        //TODO
    }

}