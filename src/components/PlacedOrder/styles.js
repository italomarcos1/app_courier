import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Picture = styled.Image`
  background-color: #63c;
  width: 100px;
  height: 80px;
  margin-right: 10px;
  border-radius: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: #393939;
  flex-shrink: 1;
  font-family: 'SanFranciscoBold';
`;

export const ProductDescription = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #595959;
  margin-top: 2px;
  flex-shrink: 1;
  font-family: 'SanFrancisco';
`;

export const DetailsContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.TextInput`
  flex: 1;
  padding: 2px 11px;
  color: #f03f39;
  font-size: 14px;
  line-height: 16px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #d8d8d8;
  font-family: 'SanFrancisco';
`;

export const DetailsText = styled.Text`
  font-size: 12px;
  color: #333;
  margin-right: 5px;
  font-family: 'SanFrancisco';
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #595959;
  margin-top: 10px;
  font-family: 'SanFrancisco';
`;

export const OldPrice = styled(Description)`
  margin-top: 0px;
  text-decoration: line-through;
  font-family: 'SanFranciscoPriceBold';
`;

export const Cashback = styled(Description)`
  margin-top: 0px;
  color: #50d2c2;
  font-family: 'SanFranciscoPriceBold';
`;

export const Price = styled.Text`
  font-size: 18px;
  line-height: 19.2px;
  color: #000;
  font-family: 'SanFranciscoPriceBold';
`;

export const FinalPrice = styled(Price)`
  font-size: 23px;
  line-height: 27px;
  font-family: 'SanFranciscoPriceBold';
`;

export const AmountAndPriceContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 17px;
  justify-content: space-between;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.Text`
  width: 58px;
  height: 42px;
  background-color: #00000000;
  color: #333;
  font-size: 25px;
  text-align: center;
  padding-top: 3px;
  font-family: 'SanFrancisco';
`;

export const AmountButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #e9eaee;
  align-items: center;
  justify-content: center;
`;
