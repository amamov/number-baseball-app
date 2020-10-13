import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home";
// import Rules from "../screens/Rules";
import ThreeBalls from "../screens/ThreeBalls";
// import FourBalls from "../screens/FourBalls";
// import FiveBalls from "../screens/FiveBalls";
// import SixBalls from "../screens/SixBalls";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: true,
        headerTransparent: false,
        headerStatusBarHeight: 20,
        headerBackTitleVisible: false,
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
          shadowColor: "#fff",
        },
      }}
    >
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "숫자 야구",
        }}
      />
      <Stack.Screen
        name="Rules"
        component={Rules}
        options={{
          gestureEnabled: true,
          headerTitle: "게임 설명",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "gray",
        }}
      /> */}
      <Stack.Screen
        name="ThreeBalls"
        component={ThreeBalls}
        options={{
          headerTitle: "세 자리 야구",
        }}
      />
      {/* <Stack.Screen
        name="FourBalls"
        component={FourBalls}
        options={{
          headerTitle: "네 자리 야구",
        }}
      />
      <Stack.Screen
        name="FiveBalls"
        component={FiveBalls}
        options={{
          headerTitle: "다섯 자리 야구",
        }}
      />
      <Stack.Screen
        name="SixBalls"
        component={SixBalls}
        options={{
          headerTitle: "여섯 자리 야구",
        }}
      /> */}
    </Stack.Navigator>
  );
};
