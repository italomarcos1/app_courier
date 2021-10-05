import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  min-height: 52.5px;
  padding: 15px;
  flex-direction: row;
`;

export const RadioButton = styled.View`
  width: 22px;
  height: 22px;
  background-color: #37cf88;
  border-radius: ${({ check }) => (check ? 0 : 11)}px;
  margin-right: 12px;
  border-width: 1px;
  border-color: #aaa;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'SanFrancisco';
`;

export const Additional = styled.Text`
  font-size: 16px;
  color: #37cf88;
  font-family: 'SanFrancisco';
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #494949;
  margin-left: auto;
  font-family: 'SanFrancisco';
`;
