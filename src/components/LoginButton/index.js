import React from 'react';

import { Container } from './styles';

export default function LoginButton({
  children,
  platform,
  platformColor,
  ...rest
}) {
  return <Container {...rest}>{children}</Container>;
}
