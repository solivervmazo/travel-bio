import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { appColor, appSpacing, appStyles } from "../../themes";
import { Divider } from "../../ui";
import Icon from "../../ui/Icon";
import SectionHeader from "../SectionHeader";
const OFFERS = [
  {
    id: 1,
    title: "Beds",
    icon: "Bed",
  },
  {
    id: 2,
    title: "Wifi",
    icon: "Wifi",
  },
  {
    id: 3,
    title: "Pool",
    icon: "Pool",
  },
  {
    id: 4,
    title: "Eats",
    icon: "Restaurant",
  },
  {
    id: 5,
    title: "Car",
    icon: "Car",
  },
  {
    id: 6,
    title: "Pets",
    icon: "Pet",
  },
];
const LONGTEXT = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

const PHOTOS = [
  {
    id: "1",
    src: require("../../../assets/hotel-1.jpg"),
  },
  {
    id: "2",
    src: require("../../../assets/hotel-2.jpg"),
  },
  {
    id: "3",
    src: require("../../../assets/hotel-3.jpg"),
  },
  {
    id: "4",
    src: require("../../../assets/hotel-1.jpg"),
  },
  {
    id: "5",
    src: require("../../../assets/hotel-2.jpg"),
  },
];

const ProductDescription = ({
  description,
  truncated = false,
  onToggle = () => {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onToggle}>
      <View
        style={{
          padding: 10,
          backgroundColor: appColor.darkBgSecondary,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: appColor.lightText,
            fontFamily: "Quicksand-Regular",
            fontSize: 13,
          }}
        >
          {description}
          <Text
            style={{
              paddingHorizontal: 1,
              color: appColor.themeColor,
              //fontFamily: "Quicksand-Bold"Medium",
              fontSize: 13,
            }}
          >{`  Read ${truncated ? "more" : "less"}`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductGallery = () => {
  return (
    <FlatList
      horizontal
      data={PHOTOS}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item: item }) => (
        <ImageBackground
          source={item.src}
          style={{
            height: 80,
            backgroundColor: "red",
            aspectRatio: "1/1",
          }}
          key={item.id}
        ></ImageBackground>
      )}
    />
  );
};

const ProductContent = () => {
  const [description, setDescription] = useState(LONGTEXT.slice(0, 300));
  const [truncated, setTruncated] = useState(true);
  // const toggleDescription = useCallback(() => {
  //   if (!truncated) {
  //     setDescription(LONGTEXT.slice(0, 300));
  //     setTruncated(!truncated);
  //   } else {
  //     setDescription(LONGTEXT);
  //     setTruncated(!truncated);
  //   }
  // }, [description, truncated]);
  const toggleDescription = () => {};
  return (
    <SafeAreaView
      style={[
        appStyles.screenContainer,
        { paddingHorizontal: appSpacing.screenPaddingLeft },
      ]}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View style={{ flexGrow: 1 }}>
          <FlatList
            horizontal
            data={OFFERS}
            renderItem={(item) => {
              const {
                item: { icon, title },
              } = item;
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {Icon.Icons(icon, {
                    size: 20,
                    color: appColor.lightText,
                    style: { ...appStyles.textShadow },
                  })}
                  <Text
                    style={{
                      fontSize: 12,
                      color: appColor.lightTextSecondary,
                      ...appStyles.textShadow,
                    }}
                  >
                    {title}
                  </Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ flexShrink: 1 }}>
          <View
            style={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Icon.MenuDot
              size={25}
              color={appColor.lightText}
              style={{ ...appStyles.textShadow }}
            />
          </View>
        </View>
      </View>
      <Divider
        horizontal
        style={{
          backgroundColor: appColor.lightTextSecondary,
          marginVertical: 15,
        }}
      />
      <ProductDescription
        description={description}
        truncated={truncated}
        onToggle={toggleDescription}
      />
      <Divider
        horizontal
        style={{
          backgroundColor: appColor.lightTextSecondary,
          marginVertical: 15,
        }}
      />
      <SectionHeader
        title={`Photos`}
        titleSize={18}
        btnText={`See all`}
        containerStyle={{ marginBottom: 10 }}
      />
      <ProductGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductContent;
