import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/Welcome";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import FavoritesScreen from "./screens/Favorites";
import MapScreen from "./screens/Map";
import SettingsScreen from "./screens/Settings";
import ShopScreen from "./screens/Shop";
import ScanScreen from "./screens/Scan";

import { HamburgerIcon, SettingsIcon, BackIcon } from "./components/icons";

import { CustomDrawerContent } from "./components";
import { colors } from "./utils/constants";

const AppMainTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Pollen",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={23} color={tintColor} />
        ),
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitle: "Pollen",
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerLeft: (
          <HamburgerIcon onPress={() => navigation.navigate("DrawerOpen")} />
        )
      })
    },
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Nearby",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="map" size={23} color={tintColor} />
        ),
        tabBarLabel: "Nearby",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="map" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitle: "Nearby",
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerLeft: (
          <HamburgerIcon onPress={() => navigation.navigate("DrawerOpen")} />
        )
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Profile",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={23} color={tintColor} />
        ),
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitle: "Profile",
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerLeft: (
          <HamburgerIcon onPress={() => navigation.navigate("DrawerOpen")} />
        ),
        headerRight: (
          <SettingsIcon onPress={() => navigation.navigate("Settings")} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.WHITE,
      inactiveTintColor: colors.BLUE_50,
      inactiveBackgroundColor: colors.BLUE_100,
      activeBackgroundColor: colors.BLUE_100,
      showIcon: true,
      showLabel: Platform.OS === "ios",
      indicatorStyle: {
        backgroundColor: colors.BLUE_300
      },
      style: {
        backgroundColor: colors.BLUE_100
      },
      upperCaseLabel: false
    },
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false
  }
);

const AppMainStack = createStackNavigator(
  {
    Home: { screen: AppMainTab },
    Settings: { screen: SettingsScreen },
    Shop: {
      screen: ShopScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitleStyle: {
          color: colors.WHITE
        }
      })
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "QRCode Scanner",
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitleStyle: {
          color: colors.WHITE
        }
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.BLUE_50
    },
    mode: "modal"
  }
);

const AppDrawer = createDrawerNavigator(
  {
    Home: {
      screen: AppMainStack
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.BLUE_100
        },
        headerTitle: "Settings",
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })
    }
  },
  {
    contentComponent: props => <CustomDrawerContent {...props} />,
    contentOptions: {
      activeBackgroundColor: colors.BLUE_100,
      activeTintColor: colors.WHITE,
      inactiveTintColor: colors.BLUE_200
    }
  }
);

const Navigator = createBottomTabNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Main: { screen: AppDrawer }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    swipeEnabled: false
  }
);

export default Navigator;
