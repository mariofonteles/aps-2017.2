import { Component } from "@angular/core";




@Component({
    selector: 'admin-page',
    templateUrl: './adminComponent.html'
})
export class adminComponent {

    moviesList : Array<any> = []

    constructor(){}

}