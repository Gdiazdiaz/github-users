import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResult } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl: string = environment.apiBaseurl + 'search/users';
  constructor(private httpClient: HttpClient) {}

  GetSearchResults(q: string, per_page: number) {
    return this.httpClient
      .get<SearchResult>(this.baseUrl, {
        params: {
          q,
          per_page 
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        switchMap((res) => {
            return of(res);
          }),
        catchError((error) => {
          return throwError(() => error as HttpErrorResponse);
        })
      );
  }
}