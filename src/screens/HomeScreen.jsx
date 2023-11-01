import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { appStyles } from "../themes";
import { HomeCover } from "../components/home";
import { ScrollView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";
import HomeHeader from "../components/home/HomeHeader";
const HomeScreen = ({ scrollOffsetY, scrollStartHide, scrollListener }) => {
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <HomeHeader />
      <HomeCover offset={scrollOffsetY} scrollStartHide={scrollStartHide} />
      <ScrollView scrollEventThrottle={50} onScroll={scrollListener}>
        <Slot />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
