import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 58px; */
  height: 74px;
  align-items: center;
  flex-direction: row;
  padding-top: 6px;
  background-color: #f3f3f3;
`;

export const Badge = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #000;
  font-family: 'SanFranciscoBold';
  margin-left: 10px;
`;
