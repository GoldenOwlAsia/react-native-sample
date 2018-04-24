import React, { Component } from "react";
import { WebView } from "react-native";
import styled from "styled-components/native";
import { colors } from "../utils/constants";

const ContainerView = styled.View`
  flex: 1;
  flexdirection: row;
  justifycontent: center;
  alignitems: center;
`;

const TitleText = styled.Text`
  fontsize: 30;
  color: ${colors.WHITE};
`;

class ShopScreen extends Component {
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
