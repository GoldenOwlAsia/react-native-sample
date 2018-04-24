import React, { Component } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../utils/constants";

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  backgroundcolor: ${colors.PINK_100};
  borderradius: 5;
  justifycontent: center;
  alignitems: center;
`;

const Text = styled.Text`
  fontsize: 20;
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
