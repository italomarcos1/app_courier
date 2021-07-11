import React, { useCallback, useMemo } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';

import LoginButton from '~/components/LoginButton';

import Bg from '~/assets/bg.jpg';
import Logo from '~/assets/logo.svg';
import Email from '~/assets/Email.svg';
import TGOO from '~/assets/TGOO.svg';
import Close from '~/assets/close.svg';
import EmailBadge from '~/assets/email-ico.svg';

import {
  CloseButton,
  Input,
  InputContainer,
  InputTitle,
  InputTitleContainer,
  Form,
} from './styles';

export default function Login() {
  const { push, goBack } = useHistory();

  const loginButtonStyle = useMemo(() => {
    return { marginTop: 20 };
  }, []);

  const handleLogin = useCallback(() => {
    push('/home');
  }, []);

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={Bg}
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 96,
          paddingBottom: 35,
        }}
      >
        <Logo height={132} width={185} />
        <Form>
          <CloseButton onPress={handleGoBack}>
            <Close width={19} height={19} />
          </CloseButton>

          <InputContainer>
            <InputTitleContainer>
              <EmailBadge
                width={16.5}
                height={14.15}
                style={{ marginRight: 5.5 }}
              />
              <InputTitle>
                Digite seu&nbsp;
                <InputTitle style={{ fontWeight: 'bold' }}>Email</InputTitle>
              </InputTitle>
            </InputTitleContainer>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </InputContainer>

          <InputContainer style={{ marginTop: 31 }}>
            <InputTitle style={{ fontWeight: 'bold' }}>Password</InputTitle>
            <Input secureTextEntry />
          </InputContainer>
          <LoginButton
            onPress={handleLogin}
            platform="Email"
            platformColor="#50D2C2"
            style={{
              marginTop: 27,
              backgroundColor: '#50D2C2',
            }}
          >
            <Email height="200%" width="100%" />
          </LoginButton>
        </Form>

        <TGOO
          height={19}
          width={52}
          style={{
            marginTop: 93,
          }}
        />
      </ImageBackground>
    </ScrollView>
  );
}
