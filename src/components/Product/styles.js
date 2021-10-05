import styled, { css } from 'styled-components/native';
import { Link } from 'react-router-native';

const boldText = css`
  font-size: 18px;
  line-height: 19.2px;
  font-weight: bold;
  color: #000;
`;

export const Container = styled.View`
  width: 100%;
  height: 430px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  margin-top: 20px;
`;

export const ImageContainer = styled.TouchableOpacity`
  width: 100%;
  height: 240px;
  background-color: #00000000;
`;

export const Image = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 20px;
  background-color: #63c;
`;

export const Title = styled.Text`
  ${boldText}
  font-family: 'SanFranciscoBold';
`;

export const DescriptionContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  padding-bottom: 21px;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #595959;
  margin-top: 20px;
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
  ${boldText}
  font-family:'SanFranciscoPriceBold';
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #50d2c2;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;
