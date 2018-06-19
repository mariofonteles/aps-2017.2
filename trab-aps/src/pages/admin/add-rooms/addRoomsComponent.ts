import { Component, OnInit } from "@angular/core";
import { Theater } from "../../../entities/Theater";
import { Room } from "../../../entities/Room";
import { StoreService } from "../../../services/storeService";
import { RoomService } from "../../../services/roomService";
import { Router } from "@angular/router";


@Component({
    selector: 'add-rooms-page',
    templateUrl: './addRoomsComponent.html'
})
export class addRoomsComponent implements OnInit {

    existingStores: Array<Theater>
    rooms: Array<Room> = [new Room()]
    selectedStore: Array<number> = []

    constructor( private storeService: StoreService, private roomService: RoomService, private router: Router){}

    ngOnInit(){


    }

    addRoom() {
        this.rooms.push(new Room())
    }

    submit() {
        let payload = {
            store: 1 //ESPERANDO O GET
            ,
            rooms: this.rooms
        }

        debugger;

        this.roomService.create(payload).then(
            () => {
                this.router.navigate(['/admin'])
            }
        )

    }
}