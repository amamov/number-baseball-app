import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Tabs from "./Tabs";
import ThreeBalls from "../screens/ThreeBalls";
import FourBalls from "../screens/FourBalls";
import FiveBalls from "../screens/FiveBalls";

const Stack = createStackNavigator();

export default () => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  return (
    <Stack.Navigator
      mode="card"
      screenOptions={
        fontLoaded && {
          gestureEnabled: false,
          headerShown: true,
          // headerTransparent: false,
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "BlackHanSans",
          },
          headerStyle: {
            backgroundColor: "black",
            shadowColor: "black",
          },
        }
      }
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="ThreeBalls"
        component={ThreeBalls}
        options={{
          headerTitle: "Three Black Balls",
        }}
      />
      <Stack.Screen
        name="FourBalls"
        component={FourBalls}
        options={{
          headerTitle: "Four Black Balls",
        }}
      />
      <Stack.Screen
        name="FiveBalls"
        component={FiveBalls}
        options={{
          headerTitle: "Five Black Balls",
        }}
      />
    </Stack.Navigator>
  );
};
