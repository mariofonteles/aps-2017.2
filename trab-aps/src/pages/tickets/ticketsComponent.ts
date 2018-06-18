import { Component, OnInit } from "@angular/core";
import { Ticket } from "../../entities/Ticket";


@Component({
    selector: 'tickets-page',
    //styleUrls: ['./ticketsComponent.scss'],
    templateUrl: './ticketsComponent.html'
})
export class TicketsComponent implements OnInit {

    tickets: Array<Ticket>

    constructor(){}

    ngOnInit(){

        /*this.tickets = [new Ticket({
            Session: JSON.parse(localStorage.getItem('selectedSession')),
            Movie: JSON.parse(localStorage.getItem('selectedSession')).movie

        })]*/

    }
}