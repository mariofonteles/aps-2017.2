

export class Seat {
    
    id: number
    number: number
    letter: string
    clicked: boolean
    price: number
    constructor( data: any = {}) {
        this.id = data.id
        this.number = data.number
        this.letter = data.letter
        this.price = data.price
    }
}