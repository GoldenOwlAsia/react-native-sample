import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Screen, ListView, View, Tile, ImageBackground, Title, Subtitle, Divider, Text, Row, Icon } from '@shoutem/ui';
import { graphql } from 'react-apollo';
import { ShopQuery } from '../lib/queries';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: #fff;
`;

const StyledRow = styled(Row)`
  backgroundColor: #fff;
`

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
  },
});

class HomeScreen extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      allShops: PropTypes.array,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(shop) {
    return (
      <Row styleName="small">
        <Icon name="home" />
        <Text>{shop.name}</Text>
      </Row>
    );
  }

  render() {
    
    if (this.props.data.loading) {
      return (<View><Text>Loading</Text></View>)
    }
  
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View><Text>An unexpected error occurred</Text></View>)
    }

    const shops = this.props.data.allShops;

    return (
      <Screen>
        <ListView
          data={shops}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}

export default graphql(ShopQuery)(HomeScreen);
