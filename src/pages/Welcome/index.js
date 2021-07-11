import React, { useMemo } from 'react';
import { View, ImageBackground, ScrollView, Image } from 'react-native';
import { useHistory } from 'react-router-native';

import LoginButton from '~/components/LoginButton';

import Bg from '~/assets/bg.jpg';
import Logo from '~/assets/logo.svg';
import Facebook from '~/assets/Facebook.svg';
import Google from '~/assets/Google.svg';
import Twitter from '~/assets/Twitter.svg';
import Apple from '~/assets/Apple.svg';
import Email from '~/assets/Email.svg';
import TGOO from '~/assets/TGOO.svg';

export default function Welcome() {
  const { push } = useHistory();

  const loginButtonStyle = useMemo(() => {
    return { marginTop: 20 };
  }, []);

  return (
    <ScrollView style={{ width: '100%' }}>
      <ImageBackground
        source={Bg}
        style={{
          backgroundColor: '#1c1c1c',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          paddingTop: 96,
          paddingBottom: 35,
        }}
      >
        <Logo height={132} width={185} />
        <LoginButton
          onPress={() => push('/login')}
          style={{
            ...loginButtonStyle,
            marginTop: 54,
          }}
        >
          <Facebook height="200%" width="100%" />
        </LoginButton>
        <LoginButton
          onPress={() => push('/login')}
          style={{
            ...loginButtonStyle,
          }}
        >
          <Google height="200%" width="100%" />
        </LoginButton>
        <LoginButton
          onPress={() => push('/login')}
          style={{
            ...loginButtonStyle,
          }}
        >
          <Twitter height="200%" width="100%" />
        </LoginButton>
        <LoginButton
          onPress={() => push('/login')}
          style={{
            ...loginButtonStyle,
          }}
        >
          <Apple height="200%" width="100%" />
        </LoginButton>
        <LoginButton
          onPress={() => push('/login')}
          style={{
            ...loginButtonStyle,
          }}
        >
          <Email height="200%" width="100%" />
        </LoginButton>
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
