import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f3f3f3;
`;

export const PaymentOption = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  height: 93px;
  padding-left: 24px;
  margin-top: 21px;
`;

export const Flag = styled.Image`
  width: 50px;
`;

export const PaymentContent = styled.View`
  height: 44px;
  margin-left: 24px;
  justify-content: space-between;
`;

export const PaymentMethodTitle = styled.Text`
  font-size: 16px;
  color: #1d1e2c;
  font-weight: 600;
  font-family: 'SanFrancisco';
`;

export const PaymentMethodSubtitle = styled.Text`
  font-size: 14px;
  color: #7d8699;
  font-family: 'SanFrancisco';
`;

export const Card = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 30px;
  background-color: #63c;
  margin-top: 22px;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  height: 33px;
  align-items: center;
  margin-top: 24px;
`;

export const SmallInputContainer = styled.View`
  width: 45%;
`;

export const InputLabel = styled.Text`
  font-size: 14px;
  color: #333;
  font-family: 'SanFrancisco';
`;

export const Input = styled.TextInput`
  height: 33px;
  border-style: solid;
  width: 70%;
  max-width: 272px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  color: #333;
  padding-bottom: 7px;
  padding-left: 14px;
  font-size: 14px;
  `;

export const BgInput = styled(Input)`
  background-color: #fff;
  border-bottom-color: #eee;
`;

export const CardButton = styled.TouchableOpacity`
  width: 75%;
  max-width: 280px;
  border-radius: 30px;
  background-color: #ea4d59;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 41px auto 0;
`;

export const CardButtonBadge = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #c84d59;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const CardButtonTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;
