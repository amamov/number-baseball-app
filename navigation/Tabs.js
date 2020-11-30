// ./navigation/Tabs.js
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Home from "../screens/Home";
import Rules from "../screens/Rules";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Home";

export default ({ navigation, route }) => {
  const name = getHeaderName(route);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name === "Home" ? "Number Balls" : "게임 설명",
      headerShown: route.name === "Home" ? true : false,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            let iconName = Platform.OS === "ios" ? "ios-" : "md-";
            if (route.name === "Home") {
              iconName += "baseball";
            } else if (route.name === "Rules") {
              iconName += "help-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                color={focused ? "white" : "gray"}
                size={40}
              />
            );
          },
        };
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Rules" component={Rules} />
    </Tabs.Navigator>
  );
};
