import React, { Component } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../utils/constants";

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  background-color: ${colors.PINK_100};
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20;
  color: ${colors.WHITE};
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer underlayColor={colors.PINK_200} onPress={onPress}>
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
