import styled from 'styled-components/native';

export const Background = styled.ScrollView`
  flex: 1;
  background-color: rgba(51, 51, 51, 0.6);
  padding-bottom: 20px;
`;

export const Container = styled.ScrollView`
  width: 81%;
  min-height: 438px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #50d2c2;
  /* padding: 27px 23px 55px; */
  padding: 27px 23px;
`;

export const ProfileContainer = styled.View`
  width: 100%;
  min-height: 70px;
  flex-direction: row;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
  min-height: 70px;
  width: 100%;
  flex-shrink: 1;
`;

export const Username = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'SanFranciscoBold';
`;

export const EmailAddress = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-top: 2px;
  font-family: 'SanFrancisco';
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  /* border-style: ; */
  border-width: 2px;
  border-color: #fff;
`;

export const RatingContainer = styled.View`
  width: 78%;
  /* flex-shrink: 1; */
  height: 21px;
  margin-top: 6px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Cashback = styled.TouchableOpacity`
  width: 100%;
  background-color: #343131;
  border-radius: 7.5px;
  height: 65px;
  margin-top: 32px;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
`;

export const CashbackIcon = styled.View`
  width: 45px;
  border-radius: 7.5px;
  height: 46px;
  background-color: #fbfdfd;
  align-items: center;
  justify-content: center;
`;

export const CashbackContent = styled.View`
  height: 46px;
  width: 67.5%;
  margin-left: 10px;
`;

export const CashbackText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  height: 20px;
  flex-direction: row;
  /* margin-top: 50px; */
  margin-top: 40px;
  align-items: flex-end;
`;

export const OptionText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 20px;
  font-family: 'SanFranciscoBold';
`;
