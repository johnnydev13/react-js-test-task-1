import {SHOW, HIDE} from './actions';

const initialState = {
    isVisible: false,
    payload:   null,
};

export default function modalReducer (state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {
                isVisible: true,
                payload:   action.payload ? action.payload : null
            };
        case HIDE:
            return {
                isVisible: false,
                payload:   null
            };

        default:
            return initialState;
    }
}
