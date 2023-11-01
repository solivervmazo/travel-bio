import React, { useContext } from "react";
import { Stack } from "expo-router";
import { HeaderTitle, BackButton, SearchButton } from "../app/";
import ContextScreenHome from "../home/ContextScreenHome";

const HomeHeader = () => {
  const { handleSearchClick } = useContext(ContextScreenHome);

  return (
    <Stack.Screen
      options={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <SearchButton onPress={handleSearchClick} />,
        headerLeft: () => <BackButton />,

        headerTransparent: true,
      }}
    />
  );
};

export default HomeHeader;
