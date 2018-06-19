import { Session } from "./Session";
import { Room } from "./Room";

export class Theater {
    Name: string
    Id: number
    adress: string
    location: string
    city: string
   
    Rooms: Array<Room>

    constructor(data: any = {}){
        this.Name = data.Name
        this.Id = data.Id
        this.Rooms = data.Rooms
        this.city = data.city
        this.location = data.location
        this.adress = data.adress
    }
}