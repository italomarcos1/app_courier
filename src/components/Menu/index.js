import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';

import MyAccount from '~/assets/menu-minha-conta.svg';
import Favorites from '~/assets/favoritos-menu.svg';
import Restaurant from '~/assets/menu-restaurant.svg';
import Payments from '~/assets/menu-payments.svg';
import Crow from '~/assets/crow-ico.svg';
import TGOO from '~/assets/TGOO.svg';
import BlueArrow from '~/assets/blue_arrow.svg';
import QR from '~/assets/qr-code.svg';

import {
  Background,
  Container,
  ProfileContainer,
  Avatar,
  ProfileInfo,
  Username,
  EmailAddress,
  RatingContainer,
  Cashback,
  CashbackIcon,
  CashbackContent,
  CashbackText,
  Option,
  OptionText,
} from './styles';

import { toggleMenu } from '~/store/modules/user/actions';

import Header from '../Header';

export default function Menu() {
  const menu = useSelector(({ user }) => user.menu);

  const dispatch = useDispatch();

  const { push } = useHistory();

  const handleNavigate = useCallback(
    route => {
      push(`/${route}`);
      dispatch(toggleMenu(false));
    },
    [push]
  );

  return (
    <Modal visible={menu} onRequestClose={() => {}} transparent>
      <Header />
      <Background showsVerticalScrollIndicator={false}>
        <Container showsVerticalScrollIndicator={false}>
          <ProfileContainer>
            <Avatar
              source={{
                uri: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
              }}
            />
            <ProfileInfo>
              <Username>Darth Vader</Username>
              <EmailAddress>highground@sith.com</EmailAddress>
              <RatingContainer>
                <Crow />
                <Crow />
                <Crow />
                <Crow />
                <Crow />
              </RatingContainer>
            </ProfileInfo>
          </ProfileContainer>
          <Cashback
            onPress={() => handleNavigate('cashback')}
          >
            <CashbackIcon>
              <QR
                width={40}
                height={41}
              />
            </CashbackIcon>
            <BlueArrow
              style={{
                position: 'absolute',
                right: 5,
                top: 5,
              }}
              width={15}
              height={15}
            />
            <CashbackContent>
              <CashbackText>
                Crédito para uso&nbsp;
                <Username>R$ 6,15</Username>
              </CashbackText>
              <CashbackText>Faltam 29 dias para expirar</CashbackText>
            </CashbackContent>
          </Cashback>
          <Option onPress={() => handleNavigate('account')}>
            <MyAccount />
            <OptionText>Minha Conta</OptionText>
          </Option>
          <Option onPress={() => handleNavigate('favorites')}>
            <Favorites />
            <OptionText>Favoritos</OptionText>
          </Option>
          <Option onPress={() => handleNavigate('wallet')}>
            <Payments />
            <OptionText>Carteira</OptionText>
          </Option>
          <Option onPress={() => handleNavigate('orders')}>
            <Payments />
            <OptionText>Pagamentos</OptionText>
          </Option>
          <Option>
            <Restaurant />
            <OptionText>O Poke Chef Kiko</OptionText>
          </Option>
          <Option style={{ justifyContent: 'flex-end' }}>
            <TGOO
              height={19}
              width={52}
              style={{
                alignSelf: 'flex-end',
              }}
            />
          </Option>
        </Container>
      </Background>
    </Modal>
  );
}
