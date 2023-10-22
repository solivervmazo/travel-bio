import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appSizes } from "../../themes";

const Icons = (icon, props = {}) => Icon[icon](props);

class _Icon {
  constructor(props) {
    const {
      size = appSizes.Icon.regular,
      color = "black",
      fill = false,
      style = {},
    } = props;
    this.size = size;
    this.color = color;
    this.fill = fill;
    this.style = style;
  }

  ionicons(defaultIcon, filledIcon) {
    return (
      <Ionicons
        name={!this.fill ? defaultIcon : filledIcon || defaultIcon}
        size={this.size}
        color={this.color}
        style={this.style}
      />
    );
  }

  materialicons(defaultIcon, filledIcon) {
    return (
      <MaterialIcons
        name={!this.fill ? defaultIcon : filledIcon || defaultIcon}
        size={this.size}
        color={this.color}
        style={this.style}
      />
    );
  }

  materialicons2(defaultIcon, filledIcon) {
    return (
      <MaterialCommunityIcons
        name={!this.fill ? defaultIcon : filledIcon || defaultIcon}
        size={this.size}
        color={this.color}
        style={this.style}
      />
    );
  }
}

const Back = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("arrow-back-outline", "arrow-back-sharp");
};

const Bed = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("bed-outline", "bed-sharp");
};

const Car = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("car-outline", "car-sharp");
};

const Dial = (props) => {
  const icon = new _Icon(props);
  return icon.materialicons2("phone-dial", "phone-dial-outline");
};

const Heart = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("md-heart-outline", "md-heart-sharp");
};

const Location = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("location-outline", "location-sharp");
};

const MenuDot = (props) => {
  const icon = new _Icon(props);
  return icon.materialicons2("dots-vertical", "dots-vertical");
};

const Pet = (props) => {
  const icon = new _Icon(props);
  return icon.materialicons("pets", "pets");
};

const Place = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("map-outline", "map-sharp");
};

const Pool = (props) => {
  const icon = new _Icon(props);
  return icon.materialicons("pool", "pool");
};

const Restaurant = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("restaurant-outline", "restaurant-sharp");
};

const Search = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("search-outline", "search-sharp");
};

const Share = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("ios-share-social-outline", "ios-share-social-sharp");
};

const Star = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("md-star-outline", "md-star-sharp");
};

const Tv = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("tv-outline", "tv-sharp");
};

const Wifi = (props) => {
  const icon = new _Icon(props);
  return icon.ionicons("wifi", "wifi");
};

const Icon = {
  Icons,
  Back,
  Bed,
  Dial,
  Car,
  Heart,
  Location,
  MenuDot,
  Pet,
  Place,
  Pool,
  Restaurant,
  Search,
  Share,
  Star,
  Wifi,
  Tv,
};

export default Icon;
