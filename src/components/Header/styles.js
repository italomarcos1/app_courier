import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* height: 86px; */
  height: 86px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LeftBackground = styled.View`
  width: 61px;
  height: 86px;
  background-color: #fff;
  align-items: center;
  justify-content: flex-end;
`;

export const RightBackground = styled.View`
  flex: 1;
  height: 86px;
  background-color: #50d2c2;
  justify-content: flex-end;
`;

export const HeaderContent = styled.FlatList`
  height: 100%;
  border-bottom-left-radius: 20px;
  background-color: #fff;
  padding-bottom: 10px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 61px;
  height: 58px;
  border-top-right-radius: 20px;
  background-color: #50d2c2;
  align-items: center;
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
`;
