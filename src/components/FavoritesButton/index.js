import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import FavoritesOff from '~/assets/favoritos.svg';
import FavoritesOn from '~/assets/favoritos_active.svg';

import {
  addToFavoritesRequest,
  removeFromFavoritesRequest,
} from '../../store/modules/user/actions';

export default function FavoritesButton({ product, style }) {
  const dispatch = useDispatch();

  const favorites = useSelector(({ user }) => user.favorites);
  const updatingFavorite = useSelector(({ user }) => user.updatingFavorite);

  const isFavorite = useMemo(() => {
    const productIndex = favorites.findIndex(({ id }) => id === id);

    return productIndex !== -1;
  }, [favorites]);

  const handleFavorite = useCallback(() => {
    dispatch(
      isFavorite
        ? removeFromFavoritesRequest(product.id)
        : addToFavoritesRequest(product)
    );
  }, [isFavorite]);

  return (
    <Container
      onPress={handleFavorite}
      disabled={updatingFavorite}
      style={style}
    >
      {isFavorite ? <FavoritesOn /> : <FavoritesOff />}
    </Container>
  );
}

FavoritesButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

FavoritesButton.defaultProps = {
  style: {},
};
