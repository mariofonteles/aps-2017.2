import { Movies } from "./Movies";
import { Room } from "./Room";
import { Seat } from "./Seat";
import { Session } from "./Session";

export class Ticket {

    Movie: Movies
    Room: Room
    Seats: Array<Seat>
    Session: Session
    totalPrice: any


    constructor(data: any={}) {

        this.Movie = data.movie
        this.Room = data.Room
        this.Seats = data.Seats
        this.Session = data.Session

    }
}