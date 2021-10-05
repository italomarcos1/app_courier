import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  calculateCashbackBeta,
  calculatePriceBeta,
} from '~/utils/calculatePrice';

import { Container, Text, Title, BuyButton } from './styles';

import Bag from '~/assets/bag.svg';

export default function OrderContainer({
  callToAction = 'Pedido',
  action,
  noCashback = false,
  productPrice = '',
  productCashback = '',
}) {
  const products = useSelector(({ cart }) => cart.products);

  const price = useMemo(
    () => (!!productPrice ? productPrice : calculatePriceBeta(products)),
    [productPrice, products]
  );
  const cashback = useMemo(
    () =>
      !!productCashback ? productCashback : calculateCashbackBeta(products),
    [productCashback, products]
  );

  console.log(price.length);

  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <View>
          <Text placeOrder={noCashback}>{callToAction}</Text>
          {!noCashback && <Text>Crédito</Text>}
        </View>
        <View
          style={{
            marginLeft: 15,
          }}
        >
          {!noCashback && (
            <>
              <Title length={price.length}>{price} &euro;</Title>
              <Text style={{ textAlign: 'right' }}>{cashback} &euro;</Text>
            </>
          )}
        </View>
      </View>
      <BuyButton onPress={action}>
        <Bag />
      </BuyButton>
    </Container>
  );
}

OrderContainer.propTypes = {
  callToAction: PropTypes.string,
  productPrice: PropTypes.string,
  productCashback: PropTypes.string,
  action: PropTypes.func.isRequired,
  noCashback: PropTypes.bool,
};
