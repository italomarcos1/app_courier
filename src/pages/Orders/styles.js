import styled from "styled-components";

export const Cashback = styled.TouchableOpacity`
  width: 100%;
  background-color: #343131;
  border-radius: 10px;
  height: 100px;
  margin-top: 20px;
  padding: 28px 20px;
  flex-direction: row;
  align-items: center;
`;

export const CashbackIcon = styled.View`
  width: 44px;
  border-radius: 7.5px;
  height: 44px;
  background-color: #fbfdfd;
  align-items: center;
  justify-content: center;
`;

export const CashbackContent = styled.View`
  margin-left: 8%;
`;

export const CashbackText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const PreviousOrders = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin: 17px 0px 0;
`;
