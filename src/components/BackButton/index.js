import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container } from './styles';

import Back from '~/assets/back.svg';

export default function BackButton({ style }) {
  const { goBack } = useHistory();

  return (
    <Container onPress={goBack} style={style}>
      <Back />
    </Container>
  );
}

BackButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

BackButton.defaultProps = {
  style: {},
};
