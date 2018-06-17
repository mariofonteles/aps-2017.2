import { Component, OnInit } from "@angular/core";
import { Theater } from "../../../entities/Theater";
import { Room } from "../../../entities/Room";


@Component({
    selector: 'add-rooms-page',
    templateUrl: './addRoomsComponent.html'
})
export class addRoomsComponent implements OnInit {

    existingStores: Array<Theater>
    rooms: Array<Room> = [new Room()]
    selectedStore: number

    constructor(){}

    ngOnInit(){

        this.existingStores = [new Theater( {Name: 'Cinema Tal', Id: '3'} ), 
                                new Theater( {Name: 'O tal do Cinema', Id: '4'})]

    }

    addRoom() {
        this.rooms.push(new Room())
    }

    submit() {
        let payload = {
            selected_store: Number(this.selectedStore),
            rooms: this.rooms
        }

    }
}