import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";
import { Movies } from "../entities/Movies";


@Injectable()
export class MovieService {

    constructor( private HttpClient: HttpClient){}

    public getAllMovies() {
        return this.HttpClient.get<any>(`http://localhost:8000/api/v1/movies/home_movies`)
        .toPromise().then( movies => movies, e => {
            debugger;
        })
    }

    public getMoviesAdmin() {
        return this.HttpClient.get<any>('http://localhost:8000/api/v1/movies').toPromise()
        .then( r => {
            debugger;
            return r;
        })
    }

    public addMovie(movie: any) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }
        return this.HttpClient.post<any>(`http://localhost:8000/api/v1/movies`, JSON.stringify(movie), httpOptions)
        .toPromise().then( res => {
            debugger;
            return res})
    }

    getAllMoviesMock() {
        return [
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),
            new Movies({ Name: 'Os Vingadores', Image: 'http://media.comicbook.com/2018/03/avengers-infinity-war-poster-all-iron-man-version-1096449.jpeg', Id: 1}),

        ]
    }
}