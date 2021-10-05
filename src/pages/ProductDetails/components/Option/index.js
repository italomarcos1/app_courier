import React, { useMemo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DropdownIcon from '~/assets/dropdown.svg';
import CloseDropdownIcon from '~/assets/close_dropdown.svg';

import { Container, Dropdown, Title, Badge, BadgeContent } from './styles';

export default function Option({
  children,
  title,
  required = false,
  badge = '',
  dropdown = false,
  isOpen = false,
  ...rest
}) {
  const content = useMemo(() => {
    return !!badge ? badge : required ? 'Obrigatório' : 'Opcional';
  }, []);

  return (
    <>
      <Container {...rest}>
        <View>
          <Title>{title}</Title>
          <Badge badge={badge} required={required}>
            <BadgeContent badge={badge}>{content}</BadgeContent>
          </Badge>
        </View>
        {dropdown && (
          <Dropdown>
            {isOpen === title ? (
              <CloseDropdownIcon width={14} height={14} />
            ) : (
              <DropdownIcon width={14} height={14} />
            )}
          </Dropdown>
        )}
      </Container>
      {children}
    </>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  badge: PropTypes.string,
  background: PropTypes.string,
  isOpen: PropTypes.string.isRequired,
  dropdown: PropTypes.bool,
};
