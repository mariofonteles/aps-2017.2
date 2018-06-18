import { Component } from "@angular/core";
import { User } from "../../entities/User";
import { RegisterService } from "../../services/registerService";


@Component({
    selector: 'register-page',
    templateUrl: './registerComponent.html',
    styleUrls: ['./registerComponent.html']
})
export class RegisterComponent {

    userModel: User = new User({})

    

    constructor(private registerService: RegisterService) {}


    register() {
        debugger;

        let payloadDto= {
            user: {email: this.userModel.email, password: this.userModel.password},
            is_student: this.userModel.is_student || false,
            location: this.userModel.location,
            birth_date: this.userModel.birthdate
        }

        this.registerService.registerUser(payloadDto)

    }

    
}