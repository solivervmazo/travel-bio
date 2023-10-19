import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { appColors, appSizes, appSpacing, appStyles } from "../../src/themes";
import SectionHeader from "../../src/components/SectionHeader";
import ProductCard from "../../src/components/product/ProductCard";

const data = [
  {
    id: 1,
    src: require("../../assets/hotel-1.jpg"),
  },
  {
    id: 2,
    src: require("../../assets/hotel-2.jpg"),
  },
  {
    id: 3,
    src: require("../../assets/hotel-3.jpg"),
  },
];

const WelcomeIndex = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[appStyles.screenContainer]}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionWrapper}>
            <SectionHeader
              size={appSizes.Text.medium}
              title={"Most Popular"}
              btnText={"See all"}
            />
          </View>
          <View
            style={{
              paddingBottom: 10,
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={(item) => <ProductCard src={item.item.src} />}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionWrapper}>
            <SectionHeader
              size={appSizes.Text.medium}
              title={"Nearby"}
              btnText={"See all"}
            />
          </View>
          <View
            style={{
              paddingBottom: 10,
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={(item) => <ProductCard src={item.item.src} />}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: appSpacing.screenPaddingLeft,
  },
  sectionWrapper: {
    flexShrink: 1,
    paddingVertical: 10,
  },
});

export default WelcomeIndex;
