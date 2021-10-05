import React from 'react';
import PropTypes from 'prop-types';

import Menu from '~/assets/menu.svg';
import Close from '~/assets/close_white.svg';

import BackButton from '~/components/BackButton';
import FavoritesIcon from '~/assets/favoritos_active.svg';

import { Container, Badge, Title } from './styles';

export default function CustomHeader({ icon: Icon, title }) {
  return (
    <Container>
      <BackButton style={{ position: 'relative', top: 0 }} />
      <Badge>
        <Icon />
      </Badge>
      <Title>{title}</Title>
    </Container>
  );
}

CustomHeader.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
};

CustomHeader.defaultProps = {
  icon: FavoritesIcon,
};
