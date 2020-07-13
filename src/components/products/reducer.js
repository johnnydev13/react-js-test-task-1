import { createSlice } from '@reduxjs/toolkit';
import { getToday } from "../../app/funcs/date";

export const defaultProduct = {
    id:           0,
    name:         '',
    description:  '',
    creationDate: getToday(),
    price:        0,
};

export const productsSlice = createSlice({
    name: 'product',

    initialState: {
        items: [],
    },
    reducers: {
        edit: (state, action) => {
            return {
                ...state, ...{
                    items: state.items.map(product => {
                        return (product.id === action.payload.prevId)
                            ? action.payload
                            : product
                    })
                }
            }
        },
        add: (state, action) => {
            return {...state, ...{
                items: [ ...state.items, action.payload ]
            }}
        },
        remove: (state, action) => {
            return {
                ...state, ...{
                    items: state.items.filter(product =>
                        product.id !== action.payload
                    )
                }
            };
        },
    },
});

export const { edit, add, remove} = productsSlice.actions;

export const initialState = productsSlice.initialState;

export default productsSlice.reducer;
