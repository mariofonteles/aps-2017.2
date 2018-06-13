import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../services/movieService";
import { Movies } from "../../entities/Movies";
import { Router } from "@angular/router";
import { sessionComponent } from "../session/sessionComponent";


@Component({
    selector: 'home-page',
    templateUrl: './homeComponent.html',
    styleUrls: ['./homeComponent.scss']
})
export class HomeComponent implements OnInit {

    movies: Array<Movies>
    selectedMovie: Movies

    constructor( private movieService: MovieService, private router: Router){}

    ngOnInit() {
       this.listMovies()
    }

    listMovies() {
        return this.movies = this.movieService.getAllMoviesMock()
    }

    goToSessions(movie: Movies) {
        debugger;
        //TODO: Mandar a imagem pro localStorage
        localStorage.setItem('imageCurrent', movie.Image)
        this.router.navigate(['/session',movie.Name, movie.Id])
    }
}