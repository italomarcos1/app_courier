import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StatusBar, ScrollView, View, Keyboard } from 'react-native';
import { useLocation, useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';

import Minus from '~/assets/add-ico-minus.svg';
import Plus from '~/assets/add-ico-plus-off.svg';

import {
  Container,
  ImageContainer,
  Image,
  Title,
  DescriptionContainer,
  Description,
  Notes,
  NotesText,
  NotesInput,
  AmountContainer,
  Amount,
  AmountButton,
} from './styles';

import Separator from './components/Separator';
import Option from './components/Option';
import Extra from './components/Extra';
import OrderContainer from '~/components/OrderContainer';
import BackButton from '~/components/BackButton';
import FavoriteButton from '~/components/FavoritesButton';

import { addToCartRequest } from '../../store/modules/cart/actions';

export default function ProductDetails() {
  const { push, goBack } = useHistory();
  const {
    state: { product },
  } = useLocation();

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState('');
  const [amount, setAmount] = useState(1);
  const [notes, setNotes] = useState('');

  const handleAddToCart = useCallback(() => {
    dispatch(addToCartRequest({ ...product, notes }, amount));
    Keyboard.dismiss();
  }, [amount, notes]);

  const handleSetTab = useCallback(
    title => {
      setIsOpen(isOpen === title ? '' : title);
    },
    [isOpen]
  );

  const loginButtonStyle = useMemo(() => {
    return { marginTop: 20 };
  }, []);

  const options = useMemo(
    () => [
      {
        id: 1,
        title: 'Extra proteína (XL)',
        required: true,
        badge: '',
        dropdown: true,
        options: [
          { isCheckbox: false, additional: '', price: '', title: 'Atum' },
          { isCheckbox: false, additional: '', price: '', title: 'Camarão' },
        ],
      },
      {
        id: 2,
        title: 'Adicione ao seu pedido',
        required: false,
        badge: '',
        dropdown: true,
        options: [
          {
            isCheckbox: false,
            additional: 'Oferta de 1,00 € de Crédito',
            price: '3,00',
            title: 'Bacalhau',
          },
          {
            isCheckbox: false,
            additional: '',
            price: '1,60',
            title: 'Camarão',
          },
          {
            isCheckbox: false,
            additional: 'Novidade',
            price: '2,00',
            title: 'Batata Frita',
          },
        ],
      },
      {
        id: 3,
        title: 'Ingredientes do Pedido',
        required: false,
        badge: 'Selecione o que deseja',
        dropdown: true,
        options: [
          {
            isCheckbox: true,
            additional: '',
            price: '',
            title: 'Cebola',
          },
          { isCheckbox: true, additional: '', price: '', title: 'Alface' },
          { isCheckbox: true, additional: '', price: '', title: 'Mostarda' },
          { isCheckbox: true, additional: '', price: '', title: 'Maionese' },
        ],
      },
      {
        id: 4,
        title: 'Instruções Especiais',
        required: false,
        badge: '',
        dropdown: false,
        options: [],
      },
    ],
    []
  );

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <Container>
        <ImageContainer>
          <Image source={{ uri: product.picture }} />
          <FavoriteButton product={product} style={{ top: '10%', right: 15 }} />
        </ImageContainer>
        <DescriptionContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
        </DescriptionContainer>
        {options.map(op => {
          return (
            <Option
              key={op.id}
              title={op.title}
              required={op.required}
              dropdown={op.dropdown}
              badge={op.badge}
              onPress={() => handleSetTab(op.title)}
              isOpen={isOpen}
            >
              {isOpen === op.title &&
                op.options.map(c => (
                  <View key={c.title}>
                    <Extra
                      title={c.title}
                      additional={c.additional}
                      price={c.price}
                      isCheckbox={c.isCheckbox}
                    />
                    <Separator />
                  </View>
                ))}
            </Option>
          );
        })}
        <Notes>
          <NotesText>
            Adicione uma observação (molho extra, sem cebola, etc.)
          </NotesText>
          <NotesInput
            autoCapitalize="none"
            autoCorrect={false}
            value={notes}
            onChangeText={text => setNotes(text)}
            onSubmitEditing={Keyboard.dismiss}
          />
        </Notes>
        <AmountContainer>
          <AmountButton
            disabled={amount === 1}
            onPress={() => setAmount(amount - 1)}
          >
            <Minus width={52} />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton onPress={() => setAmount(amount + 1)}>
            <Plus width={52} />
          </AmountButton>
        </AmountContainer>
      </Container>
      <BackButton />
      <OrderContainer
        action={handleAddToCart}
        productPrice={product.price_promotional}
        productCashback={product.cashback}
      />
    </>
  );
}
