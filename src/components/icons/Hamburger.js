import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const IconLeftContainer = styled.TouchableOpacity`
  height: 100%;
  padding-left: 15;
  justify-content: center;
`;

const Hamburger = ({ onPress }) => (
  <IconLeftContainer onPress={onPress}>
    <Ionicons name="ios-menu" size={25} color="white" />
  </IconLeftContainer>
);

export default Hamburger;
