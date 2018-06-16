import { Session } from "./Session";
import { Room } from "./Room";

export class Theater {
    Name: string
    Id: number
   
    Rooms: Array<Room>

    constructor(data: any = {}){
        this.Name = data.Name
        this.Id = data.Id
        this.Rooms = data.Rooms
    }
}