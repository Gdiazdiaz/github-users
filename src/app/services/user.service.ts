import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserByID } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.apiBaseurl + 'users';
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _user: BehaviorSubject<UserByID | null> =
    new BehaviorSubject<UserByID | null>(null);
  constructor(private httpClient: HttpClient) {}
  get users$(): Observable<User[]> {
    return this._users.asObservable();
  }

  get user$(): Observable<UserByID | null> {
    return this._user.asObservable();
  }

  GetAll(per_page: number): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.baseUrl, {
        params: {per_page},
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((response) => {
          this._users.next(response);
        }),
        catchError((error) => {
          return throwError(() => error as HttpErrorResponse);
        })
      );
  }

  GetUserById(id: string): Observable<UserByID> {
    return this.httpClient
      .get<UserByID>(this.baseUrl + { id }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((response) => {
          this._user.next(response);
        }),
        catchError((error) => {
          return throwError(() => error as HttpErrorResponse);
        })
      );
  }
}
