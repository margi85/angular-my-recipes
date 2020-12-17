import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  backendURL = 'https://api.backendless.com/91489BA3-1A30-C1BB-FFEE-DECBF7695D00/619A168C-5CC5-4B4D-A07D-17E96786F750';
  isLogged = false;
  userId: string;

  constructor(
    private storage: StorageService,
    private http: HttpClient) {
    this.isLogged = this.storage.getItem('isLogged');
    this.userId = this.storage.getItem('userId');
  }

  login(data: any): Observable<any> {
    return this.http
      .post(`${this.backendURL}/users/login`, data)
      .pipe(tap(user => {
        this.userId = user.objectId;
        this.isLogged = true;
        this.storage.setItem('isLogged', true);
        this.storage.setItem('userId', this.userId);     
      }));
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.backendURL}/users/register`, data);
  }

  logout(): Observable<any> {
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
    this.storage.setItem('userId', null);
    return of(null).pipe(delay(3000));
  }
}
