import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${colors.WHITE};
`;

class ShopScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Shop</TitleText>
        
      </ContainerView>
    );
  }
}

export default ShopScreen;
