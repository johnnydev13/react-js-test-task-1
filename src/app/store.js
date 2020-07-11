import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../components/products/reducer';
import modalReducer from '../components/common/modal/reducer';

export default configureStore({
  reducer: {
    modal:    modalReducer,
    products: productsSlice,
  },
});
