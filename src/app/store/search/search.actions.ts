import { createAction, props } from '@ngrx/store';
import { SearchResult } from 'src/app/interfaces/search';

export const loadSearch = createAction('[Search] Load Search', props<{ q: string, per_page: number }>());
export const loadSearchSuccess = createAction('[Search] Load Search Success', props<{ search: SearchResult }>());
export const loadSearchFailure = createAction('[Search] Load Search Failure', props<{ error: string }>());
export const clearSearch = createAction('[Search] Clear Search');