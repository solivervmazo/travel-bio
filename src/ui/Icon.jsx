import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icons = (icon, props) => Icon[icon](props);

const Back = (props) => {
  const { size = 24, color = "black" } = props;
  return <Ionicons name="arrow-back" size={size} color={color} />;
};

const Location = (props) => {
  const { size = 24, color = "black", fill = false } = props;
  return (
    <Ionicons
      name={fill ? "ios-location-outline" : "ios-location-sharp"}
      size={size}
      color={color}
    />
  );
};

const Search = (props) => {
  const { size = 24, color = "black" } = props;
  return <Ionicons name="search" size={size} color={color} />;
};

const Icon = {
  Icons,
  Back,
  Location,
  Search,
};

export default Icon;
