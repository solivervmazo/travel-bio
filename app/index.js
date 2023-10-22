import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { Link, Slot } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { appColors, appStyles } from "../src/themes";

export default function App() {
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <Stack.Screen options={{ header: () => null }} />
      <ImageBackground
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        source={require("../assets/splash.jpg")}
      >
        <LinearGradient
          colors={[
            "transparent",
            appColors.darkBackground,
            appColors.darkBackground,
            appColors.darkBackground,
          ]}
          style={{
            // backgroundColor: "red",
            height: "40%",
            width: "100%",
            position: "absolute",
            bottom: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: appColors.lightText,
              fontFamily: "Quicksand-Bold",
            }}
          >
            Plan Your Travels Ahead
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: appColors.lightText,
              fontFamily: "Quicksand-Regular",
              textAlign: "center",
              paddingHorizontal: 30,
              paddingVertical: 30,
            }}
          >
            Visit and Book Places, Hotels, Restaurants and Activities
            Effortlessly
          </Text>
          <LinearGradient
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              height: 60,
              borderWidth: 1,
              borderColor: "black",
            }}
            colors={["#edd7a8", "#edc56d"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Link replace href={"/home"} asChild>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Quicksand-Bold",
                }}
              >
                Get Started
              </Text>
            </Link>
          </LinearGradient>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}
