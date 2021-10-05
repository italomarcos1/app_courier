import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 37px;
  padding: 0 15px;
`;

export const Header = styled.View`
  width: 100%;
  height: 46px;
  margin-top: 11px;
  flex-direction: row;
  position: relative;
  align-items: center;
`;

export const ProfileAvatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin: 0 12px;
  border-style: solid;
  border-width: 2px;
  border-color: #50d2c2;
`;

export const IsClient = styled.View`
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding-left: 15px;
  justify-content: center;
  margin-top: 10px;
`;

export const TitleAndStars = styled.View`
  flex-direction: row;
  margin-top: 51px;
`;

export const BoldText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: #000;
  font-family: 'SanFranciscoBold';
`;

export const LightGrayText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #595959;
  font-family: 'SanFrancisco';
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  /* margin-left: 10px; */
  width: ${({ length }) => length * 21 + (length - 1) * 5}px;
  justify-content: space-between;
  position: absolute;
  left: 42.5%;
`;

export const Form = styled.View``;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  height: 30px;
  align-items: flex-end;
  margin-top: 27px;
`;

export const InputLabel = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #333;
  font-family: 'SanFrancisco';
`;

export const GreenText = styled(InputLabel)`
  color: #37cf88;
`;

export const BillingContainer = styled.View`
  height: 83px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Value = styled.Text`
  font-size: 36px;
  line-height: 36px;
  color: #37cf88;
  font-family: 'SanFranciscoBold';
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#595959',
})`
  height: 30px;
  width: 70%;
  background-color: #fff;
  border-radius: 2px;
  color: #333;
`;

export const GenderContainer = styled.View`
  width: 70%;
  justify-content: space-between;
  flex-direction: row;
  height: 30px;
`;

export const GenderButton = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? '#37CF88' : '#ddd')};
  align-items: center;
  flex: 1;
  max-width: 31.5%;
  justify-content: center;
`;

export const GenderText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#fff' : '#595959')};
  font-family: 'SanFrancisco';
`;

export const SocialMediaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const SocialMedia = styled.TouchableOpacity`
  width: 188px;
  background-color: #3b5998;
  border-radius: 30px;
  height: 60px;
  margin-right: 21px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SocialMediaBadge = styled.View`
  width: 36px;
  height: 36px;
  background-color: #194998;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const SocialMediaText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;

export const FollowOnSocialMedia = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? '#37CF88' : '#ddd')};
  align-items: center;
  width: 90px;
  height: 30px;
  justify-content: center;
`;

