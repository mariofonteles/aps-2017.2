
export class Session {

    Date: string
    Time: string
    Chairs: Array<string>
    TheaterId: number
    MovieId: number

    constructor(data: any = {}) {

        this.Date = data.Date
        this.Time = data.Time
        this.Chairs = data.Chairs
        this.MovieId = data.MovieId
        this.TheaterId = data.TheaterId
    }
}