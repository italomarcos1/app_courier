import styled from 'styled-components/native';

export const Form = styled.View`
  background-color: #fff;
  height: 351px;
  width: 100%;
  max-width: 314px;
  border-radius: 16px;
  margin-top: 78px;
  padding: 38px 27px 34px;
  position: relative;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #eeede7;
  height: 43px;
  width: 43px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
`;

export const InputTitleContainer = styled.View`
  flex-direction: row;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;

export const InputTitle = styled.Text`
  font-size: 14px;
  font-family: 'SanFrancisco';
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #eeede7;
  border-radius: 5px;
  color: #262626;
  padding-left: 20px;
  font-size: 14px;
  font-family: 'SanFrancisco';
  box-shadow: 20px 20px 5px black;
`;
