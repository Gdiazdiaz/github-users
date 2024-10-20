import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserActions from './user.actions';
import { environment } from 'src/environments/environment';
import { User, UserByUsername } from 'src/app/interfaces/user';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  private baseUrl: string = environment.apiBaseurl + 'users';

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap((action) =>
        this.http.get<User[]>(`${this.baseUrl}?per_page=${action.per_page}`).pipe(
          map((users: User[]) => UserActions.loadUsersSuccess({ users })), 
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap((action) =>
        this.http.get<UserByUsername>(`${this.baseUrl}/${action.username}`).pipe(
          map((user: UserByUsername) => UserActions.loadUserSuccess({ user })),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );
}