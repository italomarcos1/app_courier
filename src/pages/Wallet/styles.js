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
  position: relative;
`;

export const Flag = styled.View`
  width: 50px;
  align-items: center;
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

export const AddPaymentOption = styled.TouchableOpacity`
  width: 75%;
  max-width: 280px;
  border-radius: 30px;
  background-color: #343131;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 41px auto 0;
`;

export const AddPaymentOptionBadge = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #50d2c2;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const AddPaymentOptionTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;
