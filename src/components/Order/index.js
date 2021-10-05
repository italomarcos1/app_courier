import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Minus from '~/assets/add-ico-minus.svg';
import Plus from '~/assets/add-ico-plus-on.svg';

import { calculatePriceBeta, formatPrice } from '~/utils/calculatePrice';

import {
  Container,
  ProductInfo,
  Picture,
  ProductName,
  ProductDescription,
  DetailsContainer,
  DetailsText,
  Details,
  Description,
  OldPrice,
  Price,
  Cashback,
  AmountContainer,
  Amount,
  AmountButton,
  FinalPrice,
  AmountAndPriceContainer,
} from './styles';

import { updateAmount, updateNotes } from '../../store/modules/cart/actions';

export default function Order({ product }) {
  const amount = useMemo(() => product.qty, [product]);

  const dispatch = useDispatch();

  const [notes, setNotes] = useState(product.notes);

  const finalPrice = useMemo(
    () => formatPrice(+product.price_promotional * +product.qty),
    [amount]
  );

  const handleProductAmount = useCallback(updatedAmount => {
    dispatch(updateAmount(product.id, updatedAmount));
  }, []);

  const handleUpdateNotes = useCallback(() => {
    dispatch(updateNotes(product.id, notes));
    Keyboard.dismiss();
  }, [notes]);

  return (
    <Container>
      <ProductInfo>
        <Picture source={{ uri: product.picture }} />
        <View style={{ flexShrink: 1 }}>
          <ProductName>{product.title}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
        </View>
      </ProductInfo>
      <DetailsContainer>
        <DetailsText>Observação</DetailsText>
        <Details
          multiline={true}
          autoCorrect={false}
          autoCapitalize="none"
          value={notes}
          onChangeText={text => setNotes(text)}
          onBlur={handleUpdateNotes}
        />
      </DetailsContainer>
      <Description>
        Unidade: de&nbsp;<OldPrice>{product.price} &euro;</OldPrice>
        &nbsp;por&nbsp;
        <Price>{product.price_promotional} &euro;</Price>
      </Description>
      <Description style={{ marginTop: 4 }}>
        Recebe&nbsp;<Cashback>{product.cashback} &euro;</Cashback>
        &nbsp;de crédito após 24h
      </Description>
      <AmountAndPriceContainer>
        <AmountContainer>
          <AmountButton
            disabled={amount === 1}
            onPress={() => handleProductAmount(amount - 1)}
          >
            <Minus width={52} />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton onPress={() => handleProductAmount(amount + 1)}>
            <Plus width={52} />
          </AmountButton>
        </AmountContainer>
        <FinalPrice>{finalPrice} &euro;</FinalPrice>
      </AmountAndPriceContainer>
    </Container>
  );
}

Order.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
