import { Session } from "./Session";

export class Theater {
    Name: string
    Id: number
    Sessions: Array<Session>

    constructor(data: any = {}){
        this.Name = data.Name
        this.Id = data.Id
        this.Sessions = data.Sessions
    }
}