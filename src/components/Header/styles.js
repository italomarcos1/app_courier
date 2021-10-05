import styled, { css } from 'styled-components/native';

const headerStyle = css`
  height: 100%;
  border-bottom-left-radius: 20px;
  background-color: #fff;
  padding-bottom: 10px;
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
  /* height: 58px; */
  height: 58px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
`;

export const LeftBackground = styled.View`
  width: ${({ menu }) => (menu ? 160 : 61)}px;
  height: 58px;
  background-color: #fff;
  align-items: center;
  justify-content: flex-end;
`;

export const RightBackground = styled.View`
  flex: 1;
  height: 58px;
  background-color: #50d2c2;
  justify-content: flex-end;
`;

export const HeaderContent = styled.FlatList`
  ${headerStyle}
`;

export const OpenHeader = styled.View`
  ${headerStyle}
  justify-content: center;
  padding-bottom: 0;
  padding-left: 16px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: ${({ menu }) => (menu ? 160 : 61)}px;
  height: 58px;
  border-top-right-radius: 20px;
  background-color: #50d2c2;
  align-items: ${({ menu }) => (menu ? 'flex-start' : 'center')};
  padding-left: ${({ menu }) => (menu ? 23 : 0)}px;

  justify-content: center;
`;

export const Category = styled.TouchableOpacity`
  height: 37px;
  padding: 0 18px;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#333' : '#fff')};
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const CategoryTitle = styled.Text`
  font-size: 14px;
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  font-family: 'SanFrancisco';
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: 'SanFrancisco';
`;

export const MenuTitle = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 16px;
  font-family: 'SanFranciscoBold';
`;
