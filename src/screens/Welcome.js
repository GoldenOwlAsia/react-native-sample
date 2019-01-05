import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { FormattedWrapper, FormattedMessage } from "react-native-globalize";
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
import messages from "../Messages";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 30;
  color: #fff;
`;

const ButtonContainer = styled.View`
  top: 100;
`;
class WelcomeScreen extends Component {
  render() {
    return (
      <FormattedWrapper
        locale={this.props.curState.Language.language}
        messages={messages}
      >
        <ContainerView testID="welcome">
          <Title>
            <FormattedMessage message="Welcome" />
          </Title>
          <ButtonContainer>
            <Button onPress={() => this.props.navigation.navigate("Main")}>
              <Text> Go to main </Text>
            </Button>
          </ButtonContainer>
        </ContainerView>
      </FormattedWrapper>
    );
  }
}

const mapStateToProps = state => ({
  curState: state
});

export default connect(mapStateToProps, {})(WelcomeScreen);
