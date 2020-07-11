import { createSelector } from 'reselect'

const getProducts = products => products.items;

export const getNextId = createSelector(
    [getProducts],
    (products) => {
        let id = 0;

        products.map(product => id = Math.max(id, product.id));

        return ++id;
    }
);

export const findProductById = createSelector(
    [getProducts],
    (products, id) => {
        return products.filter(product =>
            product.id === id
        )
    }
);
