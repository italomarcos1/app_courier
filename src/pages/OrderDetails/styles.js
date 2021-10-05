import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #50d2c2;
  height: 46px;
  width: 100%;
  padding-left: 37px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderTitle = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;

export const BackButton = styled.TouchableOpacity`
  background-color: #00000000;
  height: 43px;
  width: 43px;
  position: absolute;
  left: 10%;
  align-items: center;
  justify-content: center;
`;
