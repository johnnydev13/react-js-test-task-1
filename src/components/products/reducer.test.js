import reducer, { add, edit, remove, initialState} from './reducer';

const testProduct = {
    id:           1,
    price:        15,
    name:         'test name',
    description:  'test description',
    creationDate: '2020-07-13',
};

describe('products reducer', () => {
    it('should handle adding a product', () => {
        const action = { type: add, payload: testProduct};

        expect(
            reducer(initialState, action)
        ).toEqual({
            items: [
                testProduct
            ]
        });
    });

    it('should handle editing a product', () => {
        const editedProduct = {
            id:           2,
            price:        10,
            name:         'new test name',
            description:  'new test description',
            creationDate: '2019-12-12',
            prevId:       testProduct.id,
        };
        const action = { type: edit, payload: editedProduct};

        expect(
            reducer({
                items: [
                    testProduct
                ]
            }, action)
        ).toEqual({
            items: [
                editedProduct
            ]
        });
    });

    it('should handle removing a product', () => {
        const action = { type: remove, payload: testProduct.id};

        expect(
            reducer({
                items: [
                    testProduct
                ]
            }, action)
        ).toEqual({
            items: [

            ]
        });
    });
});
