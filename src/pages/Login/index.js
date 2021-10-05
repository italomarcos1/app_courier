import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
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

  const shadow = useMemo(() => {
    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.34,
      shadowRadius: 3.27,
      elevation: 6,
    };
  }, []);

  const handleLogin = useCallback(() => {
    push('/home');
  }, []);

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const [focusedInput, setFocusedInput] = useState('none');

  const emailOnFocus = useCallback(
    inputName => {
      return focusedInput === inputName ? '#fff' : '#eeede7';
    },
    [focusedInput]
  );

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
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
                onFocus={() => setFocusedInput('email')}
                style={{ ...shadow, backgroundColor: emailOnFocus('email') }}
              />
            </InputContainer>

            <InputContainer style={{ marginTop: 31 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <InputTitle style={{ fontWeight: 'bold' }}>Password</InputTitle>
                <TouchableOpacity onPress={() => {}}>
                  <InputTitle style={{ color: '#F89101' }}>
                    Esqueceu a palavra-passe?
                  </InputTitle>
                </TouchableOpacity>
              </View>
              <Input
                secureTextEntry
                onFocus={() => setFocusedInput('password')}
                style={{ ...shadow, backgroundColor: emailOnFocus('password') }}
              />
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
    </>
  );
}
