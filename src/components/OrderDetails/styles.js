import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  height: 116px;
  padding-left: 24px;
  margin-top: 21px;
`;

export const Flag = styled.View`
  width: 50px;
  justify-content: center;
`;

export const Content = styled.View`
  margin-left: 37px;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-size: 32px;
  line-height: 38px;
  color: #393939;
  font-weight: 600;
  font-family: 'SanFranciscoBold';
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #393939;
  font-family: 'SanFrancisco';
`;
