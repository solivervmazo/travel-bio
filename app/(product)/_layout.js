import React, { useRef, useState } from "react";
import { StyleSheet, View, SafeAreaView, Animated } from "react-native";
import { Slot, Stack } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { appStyles } from "../../src/themes";
import IconButton from "../../src/components/IconButton";
import { ProductCover } from "../../src/components/product";

const ScreenLayout = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(true);
  const scrollListener = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        if (event.nativeEvent.contentOffset.y > 60) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      },
    }
  );
  return (
    <SafeAreaView style={appStyles.screenContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => null,
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <IconButton icon={"Heart"} size={32} color={"lightText"} />
              {/* <View style={{ width: 10 }} />
              <IconButton icon={"Share"} size={32} color={"lightText"} /> */}
            </View>
          ),
          // headerRight: () => null,
          headerBackVisible: false,
        }}
      />
      <ProductCover offset={scrollOffsetY} showButton={showButton} />
      <ScrollView scrollEventThrottle={5} onScroll={scrollListener}>
        <>
          <Slot />
        </>
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "red",
          position: "absolute",
          bottom: 0,
        }}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ScreenLayout;
