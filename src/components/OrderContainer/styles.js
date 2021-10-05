import styled from 'styled-components/native';

export const Container = styled.View`
  height: 75px;
  width: 80%;
  background-color: #343131;
  border-radius: 38px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20%;
  padding-right: 23px;
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: 8px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-size: ${({ placeOrder }) => (placeOrder ? 24 : 18)}px;
  font-family: 'SanFrancisco';
  line-height: ${({ placeOrder }) => (placeOrder ? 24 : 20)}px;
  margin-top: 2px;
`;

export const Title = styled(Text)`
  font-size: ${({ length }) => (length > 5 ? 20 : 24)}px;
  line-height: 24px;
`;

export const BuyButton = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  border-radius: 21.5px;
  background-color: #50d2c2;
  align-items: center;
  justify-content: center;
`;
