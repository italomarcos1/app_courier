import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.View`
  /* margin-left: 10px; */
  align-items: flex-start;
`;

export const PlatformIcon = styled.View`
  background-color: #f90;
  background-color: ${({ color }) => `${color}`};
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
`;

export const LoginWith = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-family: 'SanFrancisco';
  /* font-weight: medium; */
`;

export const PlatformName = styled(LoginWith)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 1px;
`;
