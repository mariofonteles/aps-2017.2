import { Session } from "./Session";
import { Seat } from "./Seat";

export class Room {
    Name: string
    Id: number
    number: number
    number_rows: number
    number_seats_by_row: number
    Sessions: Array<Session>
    free_seats: Array<Seat>

    constructor( data: any = {}) {

        this.Name = data.Name
        this.Id = data.Id
        this.Sessions = data.Sessions
        this.free_seats = data.free_seats
    }
}