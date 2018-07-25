import React, { Component } from "react";
import styled from "styled-components/native";
import TitleText from "../components/TitleText";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class FavoritesScreen extends Component { // eslint-disable-line
  render() {
    return (
      <ContainerView>
        <TitleText>Favorites</TitleText>
      </ContainerView>
    );
  }
}

export default FavoritesScreen;
