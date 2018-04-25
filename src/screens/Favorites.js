import React, { Component } from "react";
import styled from "styled-components/native";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  fontsize: 30;
  color: ${props => props.theme.WHITE};
`;

class FavoritesScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Favorites</TitleText>
      </ContainerView>
    );
  }
}

export default FavoritesScreen;
