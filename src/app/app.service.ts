import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }
    getTags(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    }

    getHtml(number: string): Observable<any[]> {
      return this.httpClient.get<any[]>('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + number);
    }
}
