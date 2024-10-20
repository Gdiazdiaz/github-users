import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, Observable } from 'rxjs';
import { User, UserByUsername, UserState } from 'src/app/interfaces/user';
import * as UserActions from '../../store/user/user.actions';
import * as SearchActions from '../../store/search/search.actions';
import { SearchResult, SearchState } from 'src/app/interfaces/search';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ users: UserState; search: SearchState }>,
  ) {}

  user$: Observable<User | null> = this.store.select(
    (state) => state.users?.user
  );
  login: string | null = null;
  user: UserByUsername | null = null;
  searchTerm: string = '';
  searchResults$: Observable<SearchResult> = this.store.select(
    (state) => state.search.result
  );
  loading$: Observable<boolean> = this.store.select((state) => state.search.loading);
  openSearcher: boolean = false;

  ngOnInit() {
    this.login = this.route.snapshot.paramMap.get('login');
    if (this.login) {
      this.searchTerm = this.login;
      this.store.dispatch(UserActions.loadUser({ username: this.login }));
      this.user$.subscribe((userData) => {
        if (userData) {
          this.user = userData as UserByUsername;
        }
      });
    } else {
      this.login = null;
      this.user = null;
      this.searchTerm = '';
    }
  }

  onSearch(event: any) {
    this.openSearcher = true
    const query = event.target.value.trim();
    if (query) {
      this.store.dispatch(SearchActions.loadSearch({ q: query, per_page: 5 }));
    }
    else {
      this.store.dispatch(SearchActions.clearSearch());
    }
  }

  cleanLogin() {
    this.login = null;
    this.user = null;
    this.searchTerm = '';
    this.openSearcher = false;
  }

  clearSearch(){
    this.openSearcher = false;
    this.store.dispatch(SearchActions.clearSearch());
  }
}
