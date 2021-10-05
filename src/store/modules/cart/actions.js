export function addToCartRequest(product, amount) {
  return {
    type: '@cart/ADD_TO_CART_REQUEST',
    payload: { product, amount },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_TO_CART_SUCCESS',
    payload: { product },
  };
}

export function removeFromCartRequest(id) {
  return {
    type: '@cart/REMOVE_FROM_CART_REQUEST',
    payload: { id },
  };
}

export function removeFromCartSuccess(id) {
  return {
    type: '@cart/REMOVE_FROM_CART_SUCCESS',
    payload: { id },
  };
}

export function cleanCart() {
  return {
    type: '@cart/CLEAN_CART',
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}

export function updateNotes(id, notes) {
  return {
    type: '@cart/UPDATE_NOTES',
    payload: { id, notes },
  };
}

export function placeOrder(order) {
  return {
    type: '@cart/PLACE_ORDER',
    payload: order,
  };
}
