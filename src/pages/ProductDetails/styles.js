import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  background-color: #fff;
  flex: 1;
  position: relative;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 240px;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  height: 240px;
  background-color: #f3f3f3;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #000;
  font-family: 'SanFranciscoBold';
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  padding: 13px 16px;
  background-color: #fff;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #595959;
  margin-top: 16px;
  font-family: 'SanFrancisco';
`;

export const Notes = styled.View`
  padding: 14px 15px 0;
  background-color: #fff;
`;

export const NotesText = styled.Text`
  color: #595959;
  font-size: 14px;
  line-height: 19.2px;
  font-family: 'SanFrancisco';
`;

export const NotesInput = styled.TextInput`
  width: 100%;
  height: 52px;
  margin-top: 4px;
  background-color: #00000000;
  padding-left: 4px;
  color: #333;
  border-color: #999;
  border-style: solid;
  border-bottom-width: 1px;
  font-family: 'SanFrancisco';
`;

export const AmountContainer = styled.View`
  margin: 46px auto 113px;
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.Text`
  width: 70px;
  height: 52px;
  background-color: #00000000;
  color: #333;
  font-size: 25px;
  text-align: center;
  padding-top: 8px;
  font-family: 'SanFrancisco';
`;

export const AmountButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #e9eaee;
  align-items: center;
  justify-content: center;
`;
