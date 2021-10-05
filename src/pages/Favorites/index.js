import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import FavoritesIcon from '~/assets/favoritos_active.svg';

import Product from '~/components/Product';
import CustomHeader from '~/components/CustomHeader';
import OrderContainer from '~/components/OrderContainer';

export default function Favorites() {
  const products = useSelector(({ cart }) => cart.products);
  const favorites = useSelector(({ user }) => user.favorites);

  return (
    <>
      <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
      <CustomHeader title="Favoritos" icon={FavoritesIcon} />
      <FlatList
        keyExtractor={item => String(item.id)}
        data={favorites}
        renderItem={({ item }) => <Product product={item} />}
        contentContainerStyle={{
          backgroundColor: '#f3f3f3',
          flex: 1,
          paddingBottom: 20,
          paddingHorizontal: 27,
          // marginTop: 50,
        }}
      />
      {!!products.length && <OrderContainer action={() => push('/order')} />}
    </>
  );
}
