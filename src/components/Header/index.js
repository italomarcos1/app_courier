import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '~/assets/menu.svg';
import Close from '~/assets/close_white.svg';

import {
  Container,
  LeftBackground,
  MenuButton,
  RightBackground,
  HeaderContent,
  OpenHeader,
  Category,
  CategoryTitle,
  HeaderTitle,
  MenuTitle,
} from './styles';

import { toggleMenu } from '~/store/modules/user/actions';

export default function Header({
  categories,
  scrollToCategory,
  platform,
  platformColor,
  active,
  setActive,
  ...rest
}) {
  // const [active, setActive] = useState(activeCategory);

  const dispatch = useDispatch();
  const menu = useSelector(({ user }) => user.menu);

  const handleMenu = useCallback(() => {
    console.log('menu', menu);
    dispatch(toggleMenu(!menu));
  }, [menu]);

  const handleSetCategory = useCallback(
    category => {
      setActive(category.title);

      scrollToCategory(category.index || 0);
    },
    [categories]
  );

  return (
    <Container {...rest}>
      <LeftBackground menu={menu}>
        <MenuButton menu={menu} onPress={handleMenu}>
          {!menu ? (
            <Menu />
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Close width={16} height={16} />
              <MenuTitle>Fechar</MenuTitle>
            </View>
          )}
        </MenuButton>
      </LeftBackground>
      <RightBackground>
        {!menu ? (
          <HeaderContent
            horizontal={true}
            contentContainerStyle={{
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}
            data={categories}
            renderItem={({ item }) => (
              <Category
                key={item.id}
                selected={active === item.title}
                onPress={() => handleSetCategory(item)}
              >
                <CategoryTitle selected={active === item.title}>
                  {item.title}
                </CategoryTitle>
              </Category>
            )}
          />
        ) : (
          <OpenHeader>
            <HeaderTitle />
          </OpenHeader>
        )}
      </RightBackground>
    </Container>
  );
}
