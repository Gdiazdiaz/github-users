import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState } from 'src/app/interfaces/user';

export const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUsers, state => ({ ...state, loading: true })),
    on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
    on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  
    on(UserActions.loadUser, state => ({ ...state, loading: true })),
    on(UserActions.loadUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
  );