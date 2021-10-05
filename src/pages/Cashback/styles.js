import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #333;
  align-items: center;
  justify-content: center;
  margin-top: 84px;
  /* padding-bottom: 35px; */
`;

export const CashbackContent = styled.View`
  height: 46px;
  margin-bottom: 32px;
`;

export const CashbackText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'SanFrancisco';
`;

export const CashbackBoldText = styled(CashbackText)`
  font-size: 18px;
  font-family: 'SanFranciscoBold';
`;

export const QRContainer = styled.View`
  width:293px;
  height:293px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
