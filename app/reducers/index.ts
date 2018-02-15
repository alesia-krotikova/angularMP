import {StoreModule, ActionReducerMap} from '@ngrx/store';
import * as login from './login.reducer';

export interface State {
    login: login.State;
}

export const reducers: ActionReducerMap<State> = {
    login: login.reducer
};