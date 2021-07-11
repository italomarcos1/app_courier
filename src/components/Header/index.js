import React, { useCallback, useMemo, useState } from 'react';
import { FlatList } from 'react-native';

import Menu from '~/assets/menu.svg';

import {
  Container,
  LeftBackground,
  MenuButton,
  RightBackground,
  HeaderContent,
  Category,
  CategoryTitle,
} from './styles';

export default function Header({
  categories,
  scrollToCategory,
  platform,
  platformColor,
  ...rest
}) {
  const [active, setActive] = useState('Entradas');

  console.log(categories);

  const handleSetCategory = useCallback(title => {
    setActive(title);
    scrollToCategory(3);
  }, []);

  return (
    <Container {...rest}>
      <LeftBackground>
        <MenuButton>
          <Menu />
        </MenuButton>
      </LeftBackground>
      <RightBackground>
        <HeaderContent
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
          data={categories}
          renderItem={({ item: { id, title } }) => (
            <Category
              key={id}
              selected={active === title}
              onPress={() => handleSetCategory(title)}
            >
              <CategoryTitle selected={active === title}>{title}</CategoryTitle>
            </Category>
          )}
        />
      </RightBackground>
    </Container>
  );
}
