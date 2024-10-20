import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as SearchActions from './search.actions';
import { environment } from 'src/environments/environment';
import { SearchResult } from 'src/app/interfaces/search';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  private baseUrl: string = environment.apiBaseurl + 'search';

  loadSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.loadSearch),
      mergeMap((action) =>
        this.http.get<SearchResult>(`${this.baseUrl}/users?q=${action.q}&per_page=${action.per_page}`).pipe(
          map((search: SearchResult) => SearchActions.loadSearchSuccess({ search })), 
          catchError((error) => of(SearchActions.loadSearchFailure({ error })))
        )
      )
    )
  );
}