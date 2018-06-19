

export class Movies {

    Name: string
    Image: string
    Id: number
    Gender: any
    Age: any
    censorship: number
    photo_poster: string
    genre: number
    title: string
    synopsis: string
    director: string
    duration: number

    constructor( data: any = {}){
        this.Name = data.Name
        this.Image = data.Image
        this.Id = data.Id
    }
}