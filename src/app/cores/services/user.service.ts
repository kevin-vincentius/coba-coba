import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public all(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${environment.base_url}/users`);
  }
}
