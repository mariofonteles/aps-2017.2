import { Component, OnInit } from "@angular/core";
import { Movies } from "../../../entities/Movies";
import { Room } from "../../../entities/Room";


@Component({
    selector: 'add-stores-page',
    templateUrl: './addStoresComponent.html',
    styleUrls: ['./addStoresComponent.scss']
})
export class AddStoresComponent implements OnInit {

    store: Movies
    rooms: Array<Room>

    constructor(){

    }



    ngOnInit() {

    }

    
}