import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../model/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  http = inject(HttpClient)
  api: string = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json'

  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.api}`)
  }

}
