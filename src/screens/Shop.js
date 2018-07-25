import React, { Component } from "react";
import { WebView } from "react-native";
import styled from "styled-components/native";

const ContainerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

class ShopScreen extends Component { // eslint-disable-line
  render() {
    return (
      <ContainerView>
        <WebView
          source={{ uri: "https://pollenshops.com/" }}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled
          style={{ flex: 1 }}
        />
      </ContainerView>
    );
  }
}

export default ShopScreen;
