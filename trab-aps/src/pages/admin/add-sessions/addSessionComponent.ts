import { Component, OnInit } from "@angular/core";
import { Movies } from "../../../entities/Movies";
import { Session } from "../../../entities/Session";
import { Theater } from "../../../entities/Theater";
import { Room } from "../../../entities/Room";
import { MovieService } from "../../../services/movieService";
import { StoreService } from "../../../services/storeService";
import { RoomService } from "../../../services/roomService";
import { SessionService } from "../../../services/sessionService";


@Component({
    selector: 'addSession-page',
    templateUrl: './addSessionComponent.html',
    //styleUrls: ['./addSessionComponent.scss']
})
export class AddSessionComponent implements OnInit {

    movies: any
    stores: Array<any>
    rooms: Array<any>
    sessions: Array<Session> = [new Session()]
    selectedMovie: Movies
    selectedStore: any
    selectedRoom: Room

    moviesSelect: Array<any> = [{}]
    

    constructor(private movieService: MovieService, private storeService: StoreService, private roomService: RoomService,
                private sessionService: SessionService){}

    ngOnInit() {

        this.storeService.getStores().then( stores => {

            this.stores = stores
        })
        


    }

    updateMovies(store) {
        this.moviesSelect = store.movies
        debugger;
        this.updateRooms(store.id)
        /*this.movieService.getMoviesAdmin().then( movies => {
            this.movies = movies

            this.moviesSelect.push(movies)
        })*/
    }

    updateCurrentMovie(movie) {
        
        movie.rooms = movie.rooms.map(Number)
        console.log(movie)
        debugger;
    }

    showSelected(selected) {
        debugger;
    }

    async updateStores(movieId) {
       this.stores = await this.storeService.getStores()
        this.stores.filter( item => item.movies.some( movie => movie.id == Number(movieId)))
    }

    async updateRooms(store) {
        debugger;
       this.rooms = await this.roomService.getRooms(Number(store))
       debugger;
       this.rooms.map( item => Number(item.Id))
       console.log(this.rooms)
    }

    addSession() {
        debugger;
        this.sessions.push(new Session())
    }

    send() {

        this.moviesSelect.forEach( movie => {
            movie.rooms = movie.rooms.map(Number)
        })

        let payload = {

            store_id: this.selectedStore.id,
            movies_ids: this.moviesSelect,
            start_session: this.sessions[0].Time,
            days_of_week: this.sessions[0].daysOfWeek,
            price: this.sessions[0].price


        }

        debugger;

        this.sessionService.send(payload)



        debugger;
    }
}