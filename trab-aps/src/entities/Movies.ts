

export class Movies {

    Name: string
    Image: string
    Id: number
    Gender: any
    Age: any

    constructor( data: any = {}){
        this.Name = data.Name
        this.Image = data.Image
        this.Id = data.Id
    }
}