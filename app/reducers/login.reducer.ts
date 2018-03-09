import {Action} from '@ngrx/store';

export interface State {
    authorized: boolean;
}

const initialState: State = {
    authorized: !!JSON.parse(localStorage.getItem('currentUser'))
};

export function reducer(state: State = initialState, action: Action): State {
    switch(action.type){
        case 'login': {
            return {authorized: true};
        }

        case 'logout': {
            return {authorized: false};
        }

        default:
            return state;
    }
}