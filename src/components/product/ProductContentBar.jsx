import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "../../ui";
import { appColors, appSizes, appStyles } from "../../themes";
import { Spacer } from "../../ui";

const ProductContentBar = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
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
                  size: appSizes.Icon.medium,
                  color: appColors.lightText,
                  style: { ...appStyles.textShadow },
                })}
                <Text
                  style={{
                    fontSize: appSizes.Text.small,
                    color: appColors.lightTextSecondary,
                    ...appStyles.textShadow,
                  }}
                >
                  {title}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <Spacer size={20} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.barActionContainer}>
        <View style={styles.barActionWrapper}>
          <Icon.MenuDot
            size={appSizes.Icon.large}
            color={appColors.lightText}
            style={{ ...appStyles.textShadow }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  wrapper: { flexGrow: 1 },
  barActionContainer: { flexShrink: 1 },
  barActionWrapper: { alignItems: "center", justifyContent: "space-around" },
});

export default ProductContentBar;
