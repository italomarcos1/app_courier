import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import { useHistory } from 'react-router-native';

import Header from '~/components/Header';
import Product from '~/components/Product';

// scrollToIndex
// initialScrollIndex -- efetua scroll
// ListHeaderComponent

import { api } from '~/services/api';

export default function Home() {
  const { push } = useHistory();

  const loginButtonStyle = useMemo(() => {
    return { marginTop: 20 };
  }, []);

  // nome da categoria + categoria.length
  // criar um array com itens do header, terá título e index
  // puxa as categorias
  // faz o fetch de uma
  // coloca a categoria encabeçando a lista e todas as outras categorias
  // assim que chega na outra categoria, faz o fetch e repopula
  // como colocar exatamente no index após a categoria?
  // deve parar o carregamento quando a categoria ainda não foi carregada?
  // ao clicar na categoria (no header) deve acontecer a mesma coisa

  const [categories, setCategories] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  // category
  // categoryProducts
  // category
  // categoryProducts - [] (se for vazio carrega)

  // no primeiro fetch monta isso
  // quando for descendo PAUSA e carrega

  const loadCategories = useCallback(async () => {
    const [categoriesResponse, productsResponse] = await Promise.all([
      api.get('/categories'),
      api.get('products?category=0'),
    ]);

    const { data: categoriesData } = categoriesResponse;
    const { data: products } = productsResponse;

    const formattedCategories = categoriesData.map(c => {
      return { ...c, id: `category${c.id}` };
    });

    setCategories(formattedCategories);

    setCurrentProducts([
      { id: `category${categoriesData[0].id}`, ...categoriesData[0] },
      ...products,
      ...formattedCategories,
    ]);
  }, []);

  const loadProducts = useCallback(
    async id => {
      if (!categories.length) return;

      const { data: products } = await api.get(`/products/${id}`);
      setCurrentProducts(s => [...s, ...products]);
    },
    [categories]
  );

  useEffect(() => loadCategories(), []);

  const flatListRef = useRef();

  const goIndex = useCallback(
    value => {
      // if (!this.flatListRef) return;
      if (!flatListRef.current) return;
      flatListRef.current.scrollToIndex({ animated: true, index: value });
    },
    [flatListRef]
  );

  return (
    <>
      <StatusBar
        // backgroundColor="#00000000"
        backgroundColor="#fff"
        barStyle="dark-content"
        // translucent
      />
      <Header
        categories={categories}
        scrollToCategory={value => goIndex(value)}
      />
      <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
        <FlatList
          ref={flatListRef}
          keyExtractor={item => String(item.id)}
          data={currentProducts}
          renderItem={({ item }) => {
            console.log(item);
            if (item.notProduct) {
              console.log('mama eu');
              loadProducts(item.id);
            }
            return item.notProduct ? (
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 28,
                  color: '#000',
                }}
              >
                {item.title}
              </Text>
            ) : (
              <Product product={item} />
            );
          }}
          contentContainerStyle={{
            paddingBottom: 20,
            paddingHorizontal: 27,
          }}
        />
      </View>
    </>
  );
}
