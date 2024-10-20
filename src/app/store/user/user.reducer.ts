import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState } from 'src/app/interfaces/user';

const MAX_USERS_IN_STATE = 1000; 

export const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
  since: '1',
};

export const userReducer = createReducer(
    initialState,
    on(UserActions.clearUsers, (state) => ({
      ...state,
      users: [], // Clear the users array
    })),
    on(UserActions.loadUsers, (state, { since }) => ({
      ...state,
      since,
      loading: true
    })),
    on(UserActions.loadUsersSuccess, (state, { users, since }) => {
      const updatedUsers = [...state.users, ...users];
      const usersToStore = updatedUsers.length > MAX_USERS_IN_STATE
        ? updatedUsers.slice(updatedUsers.length - MAX_USERS_IN_STATE)
        : updatedUsers;
  
      return {
        ...state,
        users: usersToStore,
        since,
        loading: false
      };
    }),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
  
    on(UserActions.loadUser, state => ({ ...state, loading: true })),
    on(UserActions.loadUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
  );

  