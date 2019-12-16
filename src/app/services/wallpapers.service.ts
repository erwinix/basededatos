import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WallpapersService {

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get<any[]>('https://picsum.photos/v2/list');
  }
}
