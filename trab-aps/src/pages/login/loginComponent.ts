import { Component, OnInit } from "@angular/core";
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

    /*ngOnInit() {
        if (localStorage.getItem('currentUser') || localStorage.getItem('userToken'))
            return this.router.navigate(['/home'])
    }*/


    public login () {

        debugger;

        /*if (this.isAdmin) {
            localStorage.setItem('currentUser', JSON.stringify(this.userModel))
            localStorage.setItem('userToken', 'reb43tewy3')
            localStorage.setItem('isAdmin', JSON.stringify({isAdmin: true}))
            return this.router.navigate(['/home'])
        }
        localStorage.setItem('currentUser', JSON.stringify(this.userModel))
        localStorage.setItem('userToken', 'reb43tewy3')
        return this.router.navigate(['/home'])*/


        //PRA API
        if (this.isAdmin) {
            return this.loginService.loginAdmin(this.userModel.username, this.userModel.password)
            .then ( admin => {
                if (admin) {
                    this.router.navigate(['/admin'])
                    localStorage.setItem('currentUser', this.userModel.username)
                    localStorage.setItem('isAdmin', JSON.stringify({isAdmin: true}))
                    return 
                }
            })
        }
        this.loginService.login(this.userModel.username, this.userModel.password)
        .then( userAuth => {
            if (userAuth) {
                localStorage.setItem('currentUser', this.userModel.username)
                debugger;
                return this.router.navigate(['/home'])
            }

            debugger;

            return false
        })

    }
}
