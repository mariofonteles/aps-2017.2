import { Component } from "@angular/core";
import { LoginService } from "../../services/loginService";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login-page',
    templateUrl: './loginComponent.html',
    styleUrls: ['./loginComponent.scss']
})
export class LoginComponent {

    userModel: any = {}
    loading: boolean = false
    isAdmin: boolean = true

    constructor (private loginService: LoginService, private router: Router, private route: ActivatedRoute){ }


    public login () {
        if (this.isAdmin) {
            this.loginService.loginAdmin(this.userModel.username, this.userModel.password)
            .then ( admin => {
                if (admin)
                    return this.router.navigate(['/admin'])
            })
        }
        this.loginService.login(this.userModel.username, this.userModel.password)
        .then( userAuth => {
            if (userAuth) {
                localStorage.setItem('currentUser', this.userModel.username)
                return this.router.navigate(['/home'])
            }

            return false
        })

    }
}
