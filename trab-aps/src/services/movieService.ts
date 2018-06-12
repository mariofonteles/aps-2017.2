import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";
import { Movies } from "../entities/Movies";


@Injectable()
export class MovieService {

    constructor( private HttpClient: HttpClient){}

    public getAllMovies() {
        this.HttpClient.get<any>(`${SharedInfo.URL_BASE}/Movie`)
        .toPromise().then( movies => JSON.parse(movies))
    }

    public addMovie(movie: Movies) {
        this.HttpClient.post<any>(`${SharedInfo.URL_BASE}/Movie/Add`, movie)
        .toPromise().then( res => JSON.parse(res))
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