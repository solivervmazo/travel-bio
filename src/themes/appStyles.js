import { StyleSheet } from "react-native";
import appColor from "./appColor";

export default appStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: appColor.darkBackground,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
});
