import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 54px 30px 0;
`;

export const PaymentApprovedText = styled.Text`
  font-size: 22px;
  line-height: 22px;
  color: #1dbf73;
  text-align: center;
  margin-top: 22.5px;
  font-weight: bold;
`;

export const OrderPlacedText = styled.Text`
  font-size: 18px;
  line-height: 31px;
  color: #888c9b;
  text-align: center;
  margin-top: 17px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #1dbf73;
  height: 50px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
