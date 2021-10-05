import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #f6f6f6;
  height: 61px;
  padding: 9px 15px 11px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 4px;
  margin-right: auto;
  font-family: 'SanFranciscoBold';
`;

export const Dropdown = styled.View`
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: ${({ check }) => (check ? 0 : 14)}px;
  margin-left: auto;
  border-width: 1px;
  border-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.View`
  padding: ${({ badge }) => (!!badge ? '0' : '0 16px')};
  border-radius: 999px;
  height: 20px;
  /* width: 110px; */
  align-items: ${({ badge }) => (!!badge ? 'flex-start' : 'center')};
  background-color: ${({ required, badge }) =>
    !!badge ? '#0000' : required ? '#ea4d59' : '#37cf88'};
  justify-content: flex-start;
`;

export const BadgeContent = styled.Text`
  font-size: 14px;
  color: ${({ badge }) => (!!badge ? '#000' : '#fff')};
  font-family: 'SanFrancisco';
`;

export const AlternateExtra = styled.Text`
  font-size: 14px;
  color: #595959;
  font-family: 'SanFrancisco';
`;
