import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  menu: false,
  favorites: [],
  updatingFavorite: false,
};

export default function user(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = payload.user;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = payload.profile;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = payload.profile;
        break;
      }

      case '@user/ADD_FAVORITES': {
        draft.favorites = payload.favorites;
        break;
      }

      case '@user/ADD_TO_FAVORITES_REQUEST': {
        draft.updatingFavorite = true;
        break;
      }

      case '@user/ADD_TO_FAVORITES_SUCCESS': {
        const { product } = payload;
        const productIndex = draft.favorites.findIndex(
          favorite => favorite.id === product.id
        );

        if (productIndex === -1) draft.favorites.push(product);
        draft.updatingFavorite = false;

        break;
      }

      case '@user/REMOVE_FROM_FAVORITES_REQUEST': {
        draft.updatingFavorite = true;
        break;
      }

      case '@user/REMOVE_FROM_FAVORITES_SUCCESS': {
        const { id } = payload;
        const productIndex = draft.favorites.findIndex(
          favorite => favorite.id === id
        );

        if (productIndex >= 0) draft.favorites.splice(productIndex, 1);
        draft.updatingFavorite = false;

        break;
      }

      case '@user/FAVORITES_FAILURE': {
        draft.updatingFavorite = false;

        break;
      }

      case '@user/TOGGLE_MENU': {
        draft.menu = payload.state;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
