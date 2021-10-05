import React, { useState } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';

import Star from '~/assets/crow-ico.svg';

import {
  Container,
  Header,
  ProfileAvatar,
  IsClient,
  BoldText,
  LightGrayText,
  TitleAndStars,
  StarsContainer,
  Form,
  InputContainer,
  InputLabel,
  Input,
  GenderContainer,
  GenderButton,
  GenderText,
  SocialMediaContainer,
  SocialMedia,
  FollowOnSocialMedia,
  Value,
  GreenText,
  BillingContainer,
  SocialMediaBadge,
  SocialMediaText,
} from './styles';

import BackButton from '~/components/BackButton';

import Fb from '~/assets/facebook.svg';
import Ig from '~/assets/instagram.svg';

export default function Account() {
  const [gender, setGender] = useState('f');

  return (
    <>
    <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
    <ScrollView
      style={{ flex: 1, backgroundColor: '#F3F3F3', position: 'relative' }}
      contentContainerStyle={{ paddingBottom: 190 }}
    >
      <Header>
        <BackButton style={{ position: 'relative', top: 0 }} />
        <ProfileAvatar
          source={{
            uri: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
          }}
        />
        <View>
          <BoldText>Darth Vader</BoldText>
          <LightGrayText>highground@sith.com</LightGrayText>
        </View>
      </Header>
      <IsClient>
        <TitleAndStars style={{ marginTop: 0 }}>
          <BoldText>Tu és um cliente</BoldText>
          <StarsContainer length={2} style={{ marginLeft: -7 }}>
            <Star />
            <Star />
          </StarsContainer>
        </TitleAndStars>
        <LightGrayText>Conquiste as 5 estrelas</LightGrayText>
      </IsClient>
      <Container>
        <Form>
          <TitleAndStars style={{ marginTop: 0 }}>
            <BoldText>Preencha Abaixo</BoldText>
            <StarsContainer length={2}>
              <Star />
              <Star />
            </StarsContainer>
          </TitleAndStars>

          <InputContainer>
            <InputLabel>Nome</InputLabel>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputLabel>Gênero</InputLabel>
            <GenderContainer>
              <GenderButton
                onPress={() => setGender('f')}
                selected={gender === 'f'}
              >
                <GenderText selected={gender === 'f'}>Feminino</GenderText>
              </GenderButton>
              <GenderButton
                onPress={() => setGender('m')}
                selected={gender === 'm'}
              >
                <GenderText selected={gender === 'm'}>Masculino</GenderText>
              </GenderButton>
              <GenderButton
                onPress={() => setGender('o')}
                selected={gender === 'o'}
              >
                <GenderText selected={gender === 'o'}>Outro</GenderText>
              </GenderButton>
            </GenderContainer>
          </InputContainer>
          <InputContainer>
            <InputLabel>Data Nasc.</InputLabel>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input />
          </InputContainer>
        </Form>
        <TitleAndStars>
          <BoldText>Siga as Redes</BoldText>
          <StarsContainer length={3}>
            <Star />
            <Star />
            <Star />
          </StarsContainer>
        </TitleAndStars>
        <SocialMediaContainer style={{ marginTop: 26 }}>
          <SocialMedia>
            <SocialMediaBadge>
              <Fb />
            </SocialMediaBadge>
            <SocialMediaText>Facebook</SocialMediaText>
          </SocialMedia>
          <FollowOnSocialMedia>
            <GenderText>Seguir</GenderText>
          </FollowOnSocialMedia>
        </SocialMediaContainer>
        <SocialMediaContainer>
          <SocialMedia style={{ backgroundColor: '#8036AD' }}>
            <SocialMediaBadge style={{ backgroundColor: '#6226AD' }}>
              <Ig />
            </SocialMediaBadge>
            <SocialMediaText>Instagram</SocialMediaText>
          </SocialMedia>
          <FollowOnSocialMedia selected>
            <GenderText selected>Seguindo</GenderText>
          </FollowOnSocialMedia>
        </SocialMediaContainer>
        <TitleAndStars>
          <BoldText>500 EUR</BoldText>
          <StarsContainer length={4}>
            <Star />
            <Star />
            <Star />
            <Star />
          </StarsContainer>
        </TitleAndStars>
        <BillingContainer>
          <InputLabel>Você já consumiu:</InputLabel>
          <Value>589,23 &euro;</Value>
          <InputLabel>
            Você já recebeu &nbsp;<GreenText>28,46 &euro;</GreenText>&nbsp; de
            crédito
          </InputLabel>
        </BillingContainer>
        <TitleAndStars>
          <BoldText>1.000 EUR</BoldText>
          <StarsContainer length={5}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </StarsContainer>
        </TitleAndStars>
        <BillingContainer>
          <InputLabel>Você já consumiu:</InputLabel>
          <Value style={{ color: '#ddd' }}>589,23 &euro;</Value>
          <InputLabel>
            Você já recebeu &nbsp;<GreenText>28,46 &euro;</GreenText>&nbsp; de
            crédito
          </InputLabel>
        </BillingContainer>
      </Container>
    </ScrollView>
    </>
  );
}
