import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../../services/movieService";
import { Movies } from "../../../entities/Movies";
import { Theater } from "../../../entities/Theater";
import { StoreService } from "../../../services/storeService";
import { Router } from "@angular/router";


@Component({
    selector: 'addMovie-page',
    templateUrl: './addMoviesComponent.html'

})
export class addMoviesComponent implements OnInit{

    stores: Array<any>
    movies: Array<Movies> = [new Movies()]
    selectedStore: Array<number>
    base64forMovie: string
    currentMovieImg: Movies

    movie: Movies = new Movies()

    constructor( private movieService: MovieService, private storeService: StoreService, private router: Router){}

    async ngOnInit() {

        this.storeService.getStores().then( r => {
            this.stores = r
        })
        
        this.stores = ['1','2']//pegar os cinemas dps
    }

    addStore(event: any) {
        debugger;
        this.selectedStore.push(event)
    }

    handleFileSelect(event: any, movie: any) {
        var files = event.target.files;
        var file = files[0];
        debugger;
        let reader = new FileReader()        
        console.log(event)

        this.currentMovieImg = movie

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file)
        debugger;
    }

    _handleReaderLoaded(readerEvt) {
        debugger;
        var binaryString = readerEvt.target.result;
        console.log(binaryString)
               this.movie.photo_poster = btoa(binaryString);
               console.log(this.currentMovieImg);
        debugger;
       }
   

    send() {

        let payload = {
            stores_id: this.selectedStore.map(item => Number(item)),
            censorship: Number(this.movie.censorship),
            photo_poster: null,
            title: this.movie.title,
            synopsis: this.movie.synopsis,
            director: this.movie.director,
            genre: Number(this.movie.genre),
            duration: Number(this.movie.duration)
        }

        debugger;

        return this.movieService.addMovie(payload).then( r => {
            this.router.navigate(['/admin'])
        })

    }
}