import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "../../ui";
import { appColors, appStyles } from "../../themes";

const ProductContentBar = (props) => {
  const { data } = props;
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <FlatList
          horizontal
          data={data}
          renderItem={(item) => {
            const {
              item: { icon, title },
            } = item;
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {Icon.Icons(icon, {
                  size: 20,
                  color: appColors.lightText,
                  style: { ...appStyles.textShadow },
                })}
                <Text
                  style={{
                    fontSize: 12,
                    color: appColors.lightTextSecondary,
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
        <View style={{ alignItems: "center", justifyContent: "space-around" }}>
          <Icon.MenuDot
            size={25}
            color={appColors.lightText}
            style={{ ...appStyles.textShadow }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductContentBar;
