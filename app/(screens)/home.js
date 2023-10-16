import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeScreen from "../../src/screens/HomeScreen";
import { useHeaderHeight } from "@react-navigation/elements";

const WelcomeIndex = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View>
      <SafeAreaView style={{ paddingTop: headerHeight }}>
        <Text>{headerHeight}</Text>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
};

export default WelcomeIndex;
