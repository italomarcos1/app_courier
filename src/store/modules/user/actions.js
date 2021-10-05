export function updateProfileRequest(data) {
  return { type: '@user/UPDATE_PROFILE_REQUEST', payload: { data } };
}

export function updateProfileSuccess(profile) {
  return { type: '@user/UPDATE_PROFILE_SUCCESS', payload: { profile } };
}

export function updateProfileFailure() {
  return { type: '@user/UPDATE_PROFILE_FAILURE' };
}

export function toggleMenu(state) {
  return { type: '@user/TOGGLE_MENU', payload: { state } };
}

export function addFavorites(favorites) {
  return {
    type: '@user/ADD_FAVORITES',
    payload: { favorites },
  };
}

export function addToFavoritesRequest(product) {
  return {
    type: '@user/ADD_TO_FAVORITES_REQUEST',
    payload: { product },
  };
}

export function addToFavoritesSuccess(product) {
  return {
    type: '@user/ADD_TO_FAVORITES_SUCCESS',
    payload: { product },
  };
}

export function removeFromFavoritesRequest(id) {
  return {
    type: '@user/REMOVE_FROM_FAVORITES_REQUEST',
    payload: { id },
  };
}

export function removeFromFavoritesSuccess(id) {
  return {
    type: '@user/REMOVE_FROM_FAVORITES_SUCCESS',
    payload: { id },
  };
}

export function favoritesFailure() {
  return {
    type: '@user/FAVORITES_FAILURE',
  };
}
