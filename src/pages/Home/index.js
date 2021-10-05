import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StatusBar, FlatList, Text } from 'react-native';
import { useHistory } from 'react-router-native';

import Header from '~/components/Header';
import Product from '~/components/Product';
import OrderContainer from '~/components/OrderContainer';

import Menu from '~/components/Menu';

import { Container, CategoryTitle } from './styles';

import { useSelector } from 'react-redux';

export default function Home() {
  const { push } = useHistory();

  const products = useSelector(({ cart }) => cart.products);


  // fetch categorias
  // async map
  // -- header (append 'category' no id)
  // -- fetch
  // -- array - header + products
  // -- push
  // array com todas as categorias

  const [categories, setCategories] = useState([
    {
      id: 0,
      title: 'Entradas',
      notProduct: true,
    },
    {
      id: 1,
      title: 'Pratos',
      notProduct: true,
    },
    {
      id: 2,
      title: 'Carnes',
      notProduct: true,
    },
  ]);

  const [currentProducts, setCurrentProducts] = useState([]);

  const firstCategoryProducts = [
    {
      id: 1,
      title: 'Burger Especial do Rafa',
      picture:
        'https://img.estadao.com.br/thumbs/640/resources/jpg/2/8/1622178952282.jpg',
      description:
        'Pão, burger, queijo prato, alface, farofa levemente apimentada, cebola roxa chapeada e molho barbecue.',
      price: '9.00',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#63c',
      category: 0,
    },
    {
      id: 2,
      title: 'Especial da Casa',
      picture:
        'http://jornalgoias.com.br/wp-content/uploads/2018/06/brigadeiro-boleo-quiejo.jpg',
      description: 'Queijo, vinho, goiabada.',
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#63c',
      category: 0,
    },
    {
      id: 3,
      title: 'Pizza',
      picture:
        'https://www.pizzaprime.com.br/wp-content/uploads/2019/10/massa-de-pizza.jpeg',
      description: 'Pizza sabor Margherita',
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#63c',
      category: 0,
    },
  ];

  const secondCategoryProducts = [
    {
      id: 5,
      title: 'Refrigerante',
      picture:
        'https://media.gazetadopovo.com.br/bomgourmet/2016/05/guarana-jesus-com-exclusividad-97fec530.jpg',
      description: 'Coca-cola',
      price: '9.00',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#fd5',
      category: 1,
    },
    {
      id: 6,
      title: 'Açaí 500Ml',
      picture:
        'https://s2.glbimg.com/quwqrYKCCKel3KB_cJnZvIqxE0c=/620x455/e.glbimg.com/og/ed/f/original/2019/06/11/acai.jpg',
      description: 'Açaí com complementos',
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#fd5',
      category: 1,
    },
    {
      id: 7,
      title: 'Milk-shake',
      picture:
        'https://www.dicasdemulher.com.br/wp-content/uploads/2019/03/milk-shake.jpg',
      description: "It's a trap.",
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#fd5',
      category: 1,
    },
  ];

  const thirdCategoryProducts = [
    {
      id: 9,
      title: 'Sanduíche Vegano',
      picture:
        'https://i.pinimg.com/originals/74/c5/09/74c50988b9fa693c948abb654bae018c.jpg',
      description:
        'Pão, burger, queijo prato, alface, farofa levemente apimentada, cebola roxa chapeada e molho barbecue.',
      price: '9.00',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#f3c',
      category: 2,
    },
    {
      id: 10,
      title: 'Combo',
      picture:
        'https://static5.depositphotos.com/1000647/467/i/600/depositphotos_4674733-stock-photo-tasty-hamburger-and-french-fries.jpg',
      description:
        'Pão, burger, queijo prato, alface, farofa levemente apimentada, cebola roxa chapeada e molho barbecue.',
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#f3c',
      category: 2,
    },
    {
      id: 11,
      title: 'Batata-frita',
      picture:
        'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/02/batata-frita-sequinha-crocante.jpeg',
      description:
        'Pão, burger, queijo prato, alface, farofa levemente apimentada, cebola roxa chapeada e molho barbecue.',
      price: '9',
      price_promotional: '7.70',
      cashback: '0.38',
      backgroundColor: '#f3c',
      category: 2,
    },
  ];

  const [active, setActive] = useState('Entradas');

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (!!viewableItems[0].item.notProduct)
      setActive(viewableItems[0].item.title);
  }, []);

  const loadCategories = useCallback(async () => {
    try {
      // const { data: categoriesData } = await api.get('/categories');
      let currentCategories = [];

      // await Promise.all(
      // categoriesData.map(async c => {
      console.log('c');
      categories.map(c => {
        // const { data: products } = await api.get(
        //   `/products?category=${c.id}`
        // );

        console.log('a');
        const products =
          c.id === 1
            ? firstCategoryProducts
            : c.id === 2
            ? secondCategoryProducts
            : thirdCategoryProducts;

        console.log('b');
        let header = {
          ...c,
          id: `category${c.id}`,
          categoryId: c.id,
          productsLength: products.length,
        };

        const categoryProducts = [header, ...products];

        setCurrentProducts(prevState => [...prevState, ...categoryProducts]);
        currentCategories.push(header);
      });
      // );

      const formattedCategories = currentCategories.map(category => {
        let index = 0;

        for (let c of currentCategories) {
          if (c.id === category.id) break;
          index += category.productsLength + 1;
        }

        return { ...category, index };
      });

      setCategories(formattedCategories);
    } catch (err) {}
  }, [
    categories,
    firstCategoryProducts,
    secondCategoryProducts,
    thirdCategoryProducts,
  ]);

  useEffect(() => {
    // if (!categories.length)
    loadCategories();
  }, []);

  const flatListRef = useRef();

  const goIndex = useCallback(
    value => {
      if (!flatListRef.current) return;
      flatListRef.current.scrollToIndex({ animated: true, index: value });
    },
    [flatListRef]
  );

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        categories={categories}
        scrollToCategory={value => goIndex(value)}
        active={active}
        setActive={setActive}
      />
      <Container>
        <FlatList
          ref={flatListRef}
          keyExtractor={item => String(item.id)}
          data={currentProducts}
          onViewableItemsChanged={onViewableItemsChanged}
          renderItem={({ item }) =>
            item.notProduct ? (
              <CategoryTitle>{item.title}</CategoryTitle>
            ) : (
              <Product product={item} />
            )
          }
          contentContainerStyle={{
            paddingBottom: 20,
            paddingHorizontal: 27,
          }}
        />
      </Container>
      {!!products.length && <OrderContainer action={() => push('/order')} />}
      <Menu />
    </>
  );
}
