import { createAction, props } from '@ngrx/store';
import { User, UserByUsername } from 'src/app/interfaces/user';

export const loadUsers = createAction('[User] Load Users', props<{ per_page: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUser = createAction('[User] Load User', props<{ username: string }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: UserByUsername }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());