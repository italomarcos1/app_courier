import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Container, RadioButton, Title, Additional, Price } from './styles';

export default function Extra({
  title,
  additional = '',
  price = '',
  isCheckbox = false,
}) {
  return (
    <Container>
      <RadioButton check={isCheckbox} />
      <View>
        <Title>{title}</Title>
        {!!additional && <Additional>{additional}</Additional>}
      </View>
      {!!price && <Price>+{price} &euro;</Price>}
    </Container>
  );
}

Extra.propTypes = {
  title: PropTypes.string.isRequired,
  additional: PropTypes.string,
  price: PropTypes.string,
  check: PropTypes.bool,
};
