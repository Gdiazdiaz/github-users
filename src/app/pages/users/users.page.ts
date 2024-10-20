import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as UserAction from '../../store/user/user.actions';
import { User, UserState } from 'src/app/interfaces/user';
import { debounceTime, Observable, take } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users$: Observable<User[]> = this.store.select(state => state.users.users);
  since$: Observable<string> = this.store.select(state => state.users.since);
  loading$: Observable<boolean> = this.store.select(state => state.users.loading);
  isLoading: boolean = false;

  constructor(private store: Store<{ users: UserState }>) {}

  ngOnInit() {
    this.store.dispatch(UserAction.loadUsers({ per_page: 100, since: '1' }));
    this.since$.subscribe(sinceValue => {
      console.log('Since value:', sinceValue);
    });
    this.loading$.subscribe(loading => {
      this.isLoading = loading;
    })
  }

  onIonInfinite(ev: Event) {
    if (this.isLoading) {
      (ev as InfiniteScrollCustomEvent).target.complete();
      return;
    }

    this.since$
      .pipe(
        debounceTime(300),
        take(1)
      )
      .subscribe(since => {
        this.store.dispatch(UserAction.loadUsers({ per_page: 100, since: since }));
        (ev as InfiniteScrollCustomEvent).target.complete();
      });
  }

  onRefresh() {
    this.store.dispatch(UserAction.clearUsers()); // Clear the state
    this.store.dispatch(UserAction.loadUsers({ per_page: 100, since: '1' }));
  }
}