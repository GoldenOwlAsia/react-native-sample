import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import { ShopQuery } from '../lib/queries';
import { graphql } from 'react-apollo';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${colors.WHITE};
`;

class MapScreen extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      allShops: PropTypes.array,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: 1.3096036,
        longitude: 103.8536703,
      },
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    console.log('_getLocationAysnc');
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log('got location', location);
    this.setState({ location });
  }

  _getNearbyShops(shops) {
    if (shops && shops.length > 0) {
      return shops.map(x => {
        return {
          ...x,
          latlng: {
            latitude: x.latitude,
            longitude: x.longitude,
          },
        };
      });
    }

    return [];
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.coords) { 
      const { coords } = this.state;
      const nearby = this._getNearbyShops(this.props.data.allShops);
      console.log('nearby', nearby)
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
        >
          {nearby.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={marker.latlng}
              title={marker.name}
              description={marker.name}
            />
          ))}
        </MapView>
      );
    }

    return (
      <ContainerView>
        <TitleText>{text}</TitleText>
      </ContainerView>
    )
  }
}

export default graphql(ShopQuery)(MapScreen);
