import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Slot, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import appColor from "../../src/themes/appColor";
import { BlurView } from "expo-blur";
import Icon from "../../src/ui/Icon";
const ScreenLayout = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={{
        // paddingTop: headerHeight + 20,
        // padding: 15,
        backgroundColor: appColor.darkBackground,
        flex: 1,
      }}
    >
      <Stack.Screen />
      <View style={{ backgroundColor: "red", height: "40%" }}>
        <ImageBackground
          source={require("../../assets/hotel.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <LinearGradient
            colors={["transparent", appColor.darkBackground]}
            style={{
              // backgroundColor: "red",
              height: "30%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <ScrollView
                horizontal
                style={{ paddingHorizontal: 15, paddingVertical: 10 }}
                showsHorizontalScrollIndicator={false}
              >
                <BlurView
                  style={{
                    borderWidth: 2,
                    borderColor: "#edc56d",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    marginEnd: 15,
                    backgroundColor: appColor.darkBackground,
                  }}
                >
                  <Text
                    style={{
                      color: "#edc56d",
                      fontFamily: "Quicksand-Regular",
                      fontWeight: "800",
                      fontSize: 15,
                      marginEnd: 5,
                    }}
                  >
                    Places
                  </Text>
                  <Icon.Location size={18} color={"#edc56d"} />
                </BlurView>
              </ScrollView>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <Slot />
    </SafeAreaView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({});
