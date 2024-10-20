import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';
import { SearchState } from 'src/app/interfaces/search';

export const initialState: SearchState = {
  result: {
    total_count: 0,
    incomplete_results: true,
    items: [],
  },
  loading: false,
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.loadSearch, (state) => ({ ...state, loading: true })),
  on(SearchActions.loadSearchSuccess, (state, { search }) => ({
    ...state,
    search,
    loading: false,
  })),
  on(SearchActions.loadSearchFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
