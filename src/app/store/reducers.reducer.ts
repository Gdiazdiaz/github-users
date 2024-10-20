import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { searchReducer } from './search/search.reducer';

export const reducers: ActionReducerMap<any> = {
  user: userReducer,
  search: searchReducer
};