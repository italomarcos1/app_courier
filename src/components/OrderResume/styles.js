import styled from 'styled-components';

export const NifContainer = styled.View`
  margin-top: 31px;
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const NifButton = styled.View`
  width: 45px;
  height: 30px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #FFF9F0;
  border-style: solid;
  border-width: 1px;
  border-color:  #FCCE6F;
`;

export const NifText = styled.Text`
  font-size: 14px;
  color: #595959;
`;

export const OptionalBadge = styled.View`
  padding: 0 15px;
  height: 20px;
  background-color: #37CF88;
  border-radius: 10px;
  margin-left: 9px;
`;

export const OptionalText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const NifInput = styled.TextInput`
  width: 50%;
  margin-left: auto;
  height: 30px;
  color: #333;
  font-size: 14px;
  padding-left: 14px;
  background-color: #fff;
`;

export const ResumeValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ResumeValue = styled.Text`
  color: #595959;
  font-size: 14px;
`;

export const PickYourTableContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  height: 70px;
  border-radius: 20px;
  padding: 0 20px;
  background-color: #fff;
`;

export const PickYourTableSelect = styled.TouchableOpacity`
  width: 104px;
  height: 30px;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: #f3f3f3;
  align-items: center;
  flex-direction: row;
  padding-left: 5px;
  position: relative;
`;

export const PickYourTableArrow = styled.View`
  width: 30px;
  height: 30px;
  border-style: solid;
  border-left-width: 1px;
  border-left-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

export const PickYourTable = styled.ScrollView`
  width: 104px;
  max-height: 104px;
  height: 104px;
  /* height: 30px; */
  background-color: #fff;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-top-width: 0;
  border-color: #f3f3f3;
  top: 30px;
`;

export const PickYourTableOption = styled.View`
  width: 104px;
  height: 30px;
  background-color: #fff;
  border-style: solid;
  border-bottom-width: 0.25px;
  border-color: #666;
  justify-content: center;
  align-items: center;
`;

export const PickYourTableOptionText = styled.Text`
  color: #333;
  font-size: 14px;
`;
