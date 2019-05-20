import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ilist } from './ilist';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseStubService {

  constructor(private http: HttpClient) { }

  private url="newFolder/productsList.json";

  getProducts():Observable<Ilist[]>{

    return this.http.get<Ilist[]>(this.url)
    
  }
}
