import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SharedInfo } from "../shared/SharedInfo";

@Injectable() 
export class RoomService {

    constructor( private http: HttpClient){}

    create(payload: any) {
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Token '+localStorage.getItem('userToken')
            })
          }

        return this.http.post('http://localhost:8000/api/v1/rooms', JSON.stringify(payload), httpOptions).toPromise()
        .then( r => {
            return
        }, e => {
            return
        })
    }

    getRooms(storeId) {
        debugger;
        return this.http.get<any>(`http://localhost:8000/api/v1/rooms?store__id=${storeId}`).toPromise().then(r => r)
    }

}