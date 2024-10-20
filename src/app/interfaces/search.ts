import { User } from './user';

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: SearchItem[];
}

export interface SearchItem extends User {
  score: number;
}

export interface SearchState {
  result: SearchResult,
  loading: boolean,
  error: string | null,
};