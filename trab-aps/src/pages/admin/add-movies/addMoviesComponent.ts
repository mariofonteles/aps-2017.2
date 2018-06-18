import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../../services/movieService";
import { Movies } from "../../../entities/Movies";
import { Theater } from "../../../entities/Theater";


@Component({
    selector: 'addMovie-page',
    templateUrl: './addMoviesComponent.html'

})
export class addMoviesComponent implements OnInit{

    stores: Array<any>
    movies: Array<Movies> = [new Movies()]
    selectedStore: Theater
    base64forMovie: string
    currentMovieImg: Movies

    constructor( private movieService: MovieService){}

    async ngOnInit() {
        
        this.stores = ['1','2']//pegar os cinemas dps
    }

    addStore() {
        this.movies.push(new Movies())
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
               this.currentMovieImg.Image = btoa(binaryString);
               console.log(this.currentMovieImg);
        debugger;
       }
   

    send() {

    }
}