import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  orders: [],
};

export default function cart(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case '@cart/ADD_TO_CART_SUCCESS': {
        const { product } = payload;

        draft.products.push(product);

        break;
      }

      case '@cart/REMOVE_FROM_CART_SUCCESS': {
        const { id } = payload;

        const productIndex = draft.products.findIndex(
          product => product.id === id
        );

        if (productIndex > -1) {
          if (draft.products.length === 1) draft.products.splice(0, 1);
          else {
            draft.products = draft.products.filter(
              product => product.id !== id
            );
          }
        }

        break;
      }

      case '@cart/CLEAN_CART': {
        draft.products.splice(0, draft.products.length);
        break;
      }

      case '@cart/UPDATE_AMOUNT': {
        const { id, amount } = payload;

        const productIndex = draft.products.findIndex(
          product => product.id === id
        );

        if (productIndex >= 0) draft.products[productIndex].qty = amount;

        break;
      }

      case '@cart/UPDATE_NOTES': {
        const { id, notes } = payload;

        const productIndex = draft.products.findIndex(
          product => product.id === id
        );

        if (productIndex >= 0) draft.products[productIndex].notes = notes;

        break;
      }

      case '@cart/PLACE_ORDER': {
        console.log(payload);
        draft.orders.push(payload);
        draft.products = [];

        break;
      }

      case '@auth/SIGN_OUT': {
        draft.favorites = [];
        draft.products = [];
        draft.updating = false;
        break;
      }

      default:
    }
  });
}
