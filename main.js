import * as Expo from "expo";
import { YellowBox } from "react-native";

import App from "./src/App";

// remove warning
YellowBox.ignoreWarnings([
  // Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window)
  "Remote debugger is in a background tab",
  // require cirle on package @shoutem
  "Require cycle:"
]);

Expo.registerRootComponent(App);
