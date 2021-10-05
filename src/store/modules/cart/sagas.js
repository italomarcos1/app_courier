import { all, put, select, takeLatest } from 'redux-saga/effects';

import {
  addToCartSuccess,
  removeFromCartSuccess,
  updateAmount,
} from './actions';

export function* addToCart({ payload }) {
  const { product, amount } = payload;

  const products = yield select(state => state.cart.products);

  const alreadyInCart = products.findIndex(p => p.id === product.id);

  if (alreadyInCart >= 0) {
    yield put(updateAmount(product.id, products[alreadyInCart].qty + amount));
  } else {
    const data = {
      ...product,
      qty: amount,
    };

    yield put(addToCartSuccess(data));
  }
}

export function* removeFromCart({ payload }) {
  const { id } = payload;

  yield put(removeFromCartSuccess(id));
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/REMOVE_FROM_CART_REQUEST', removeFromCart),
]);
