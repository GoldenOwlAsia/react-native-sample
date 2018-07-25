import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import { colors } from "../utils/constants";
import {
  Button,
  Title,
  ListView,
  View,
  Tile,
  ImageBackground,
  Subtitle,
  Divider,
  Text,
  Row,
  Icon
} from "@shoutem/ui";

import TitleText from "../components/TitleText";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  top: 100;
`;

class ProfileScreen extends Component { // eslint-disable-line
  render() {
    return (
      <ContainerView>
        <TitleText>Profile</TitleText>
        <ButtonContainer>
          <Button onPress={() => this.props.navigation.navigate("Scan")}>
            <Text>Scan QR code</Text>
          </Button>
        </ButtonContainer>
      </ContainerView>
    );
  }
}

export default ProfileScreen;
