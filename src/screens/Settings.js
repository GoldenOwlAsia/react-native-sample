import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { FormattedWrapper, FormattedMessage, PropTypes } from "react-native-globalize";

import { changeLanguage } from "../actions/language";
import { Button } from "../components";
import messages from "../Messages";
import TitleText from "../components/TitleText";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class SettingsScreen extends Component { // eslint-disable-line
  render() {
    return (
      <FormattedWrapper
        locale={this.props.curState.Language.language}
        messages={messages}
      >
        <ContainerView>
          <TitleText>
            <FormattedMessage message="Settings" />
          </TitleText>
          <Button
            text="Change language to es"
            onPress={() => this.props.onChangeLanguage("es")}
          />
        </ContainerView>
      </FormattedWrapper>
    );
  }
}

const mapStateToProps = state => ({
  curState: state
});

const mapDispatchToProps = dispatch => ({
  onChangeLanguage: language => dispatch(changeLanguage(language))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
