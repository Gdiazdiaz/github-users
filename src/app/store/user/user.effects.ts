import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
      switchMap(({ since, per_page }) =>
        this.http.get<User[]>(this.baseUrl, {
          params: { since: since.toString(), per_page: per_page.toString() },
          observe: 'response',
        }).pipe(
          map((response: HttpResponse<User[]>) => {
            const users = response.body || [];
            const linkHeader = response.headers.get('Link');
            const nextSince = this.getNextSince(linkHeader);
            console.log(nextSince, 'since')
            return UserActions.loadUsersSuccess({ users, since: nextSince.toString() });
          }),
          catchError(error => of(UserActions.loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  private getNextSince(linkHeader: string | null): number {
    if (linkHeader) {
      const nextLink = linkHeader.split(',').find(link => link.includes('rel="next"'));
      if (nextLink) {
        const sinceMatch = nextLink.match(/since=(\d+)/);
        return sinceMatch ? parseInt(sinceMatch[1], 10) : 0;
      }
    }
    return 0;
  }

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

