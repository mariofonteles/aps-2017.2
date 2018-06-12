
export class Session {

    Date: Date
    Chairs: Array<string>
    MovieId: number

    constructor(data: any = {}) {

        this.Date = data.Date
        this.Chairs = data.Chairs
        this.MovieId = data.MovieId
    }
}