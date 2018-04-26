import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import {
  Screen,
  ListView,
  View,
  Tile,
  ImageBackground,
  Title,
  Subtitle,
  Divider,
  Text,
  Row,
  Icon,
  Button
} from "@shoutem/ui";
import { graphql } from "react-apollo";
import { ShopQuery } from "../lib/queries";

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 30;
  color: #fff;
`;

const StyledRow = styled(Row)`
  background-color: #fff;
`;

class HomeScreen extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      allShops: PropTypes.array
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  onShopPress(shop) {
    this.props.navigation.navigate("Map", { shop });
  }

  renderRow(shop) {
    return (
      <Row styleName="small">
        <Icon name="home" />
        <Button onPress={this.onShopPress.bind(this, shop)}>
          <Text>{shop.name}</Text>
        </Button>
      </Row>
    );
  }

  render() {
    if (this.props.data.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

    if (this.props.data.error) {
      return (
        <View>
          <Text>An unexpected error occurred</Text>
        </View>
      );
    }

    const shops = this.props.data.allShops;

    return (
      <Screen>
        <ListView data={shops} renderRow={this.renderRow.bind(this)} />
      </Screen>
    );
  }
}

export default graphql(ShopQuery)(HomeScreen);
