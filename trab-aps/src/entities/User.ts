export class User {

    email: string
    password: string
    location: string
    birthdate: any
    is_student: boolean

    constructor(data: any={}){

        this.email = data.email
        this.password = data.password
        this.location = data.location
        this.birthdate = data.birthdate
        this.is_student = data.is_student
    }


}