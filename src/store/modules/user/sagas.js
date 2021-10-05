import { call, put, all, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-tiny-toast';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  addToFavoritesSuccess,
  removeFromFavoritesSuccess,
  favoritesFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Toast.show('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Toast.show('Houve um erro na atualização do perfil, verifique seus dados.');
    yield put(updateProfileFailure());
  }
}

export function* addToFavorites({ payload }) {
  try {
    const { product } = payload;

    // yield call(api.post, `clients/wishlists/${product.id}`);

    Toast.show('Produto adicionado aos favoritos!');

    yield put(addToFavoritesSuccess(product));
  } catch (error) {
    Toast.show('Não foi possível adicionar o produto aos favoritos .');
    yield put(favoritesFailure());
  }
}

export function* removeFromFavorites({ payload }) {
  try {
    const { id } = payload;

    // yield call(api.delete, `clients/wishlists/${id}`);
    Toast.show('Produto removido dos favoritos.');

    yield put(removeFromFavoritesSuccess(id));
  } catch (error) {
    Toast.show('Não foi possível remover o produto dos favoritos .');
    yield put(favoritesFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/ADD_TO_FAVORITES_REQUEST', addToFavorites),
  takeLatest('@user/REMOVE_FROM_FAVORITES_REQUEST', removeFromFavorites),
]);
