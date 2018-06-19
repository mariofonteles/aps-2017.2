import { Component, OnInit } from "@angular/core";
import { Movies } from "../../../entities/Movies";
import { Room } from "../../../entities/Room";
import { Theater } from "../../../entities/Theater";
import { StoreService } from "../../../services/storeService";
import { Router } from "@angular/router";


@Component({
    selector: 'add-stores-page',
    templateUrl: './addStoresComponent.html',
    //styleUrls: ['./addStoresComponent.scss']
})
export class AddStoresComponent implements OnInit {

    store: Theater = new Theater()

    constructor(private storeService: StoreService, private router: Router){

    }



    ngOnInit() {
    }

    send() {

        let payloadDto = {
            name: this.store.Name,
            address: this.store.adress,
            location: this.store.location,
            city: this.store.city
        }

        debugger;

        this.storeService.create(payloadDto).then( () => {
            this.router.navigate(['/admin'])
        })
    

    }

    
}