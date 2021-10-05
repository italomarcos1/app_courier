import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';

import Plus from '~/assets/plus.svg';
import { addToCartRequest } from '../../store/modules/cart/actions';

import FavoriteButton from '~/components/FavoritesButton';

import {
  Container,
  Image,
  ImageContainer,
  Description,
  DescriptionContainer,
  AddToCartButton,
  Title,
  OldPrice,
  Price,
  Cashback,
} from './styles';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCartRequest({ ...product, notes: '' }, 1));
  }, []);

  return (
    <Container>
      <ImageContainer onPress={() => push('/product', { product })}>
        <Image
          source={{ uri: product.picture }}
          style={{ backgroundColor: '#ccc' }}
        />
        <FavoriteButton product={product} />
      </ImageContainer>
      <DescriptionContainer onPress={() => push('/product', { product })}>
        <>
          <Title>{product.title}</Title>
          <Description style={{ height: 48 }}>
            {product.description}
          </Description>
          <Description>
            de&nbsp;<OldPrice>{product.price} &euro;</OldPrice>&nbsp;por&nbsp;
            <Price>{product.price_promotional} &euro;</Price>
          </Description>
          <Description style={{ marginTop: 8 }}>
            Recebe&nbsp;<Cashback>{product.cashback} &euro;</Cashback>
            &nbsp;de crédito
          </Description>
        </>
      </DescriptionContainer>
      <AddToCartButton onPress={handleAddToCart}>
        <Plus width={22.7} height={22.7} />
      </AddToCartButton>
    </Container>
  );
}
