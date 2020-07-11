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
                        return (product.id === action.payload.id)
                            ? action.payload
                            : product
                    })
                }
            }
        },
        add: (state, action) => {
            let id = 0;

            state.items.map(product => {
                id = Math.max(id, product.id);
            });

            let product = Object.assign({}, action.payload);

            product.id = ++id;

            return {...state, ...{
                items: [ ...state.items, product ]
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

export default productsSlice.reducer;
