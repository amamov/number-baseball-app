import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Tabs from "./Tabs";
import ThreeBallsStart from "../screens/ThreeBalls/ThreeBallsStart";
import ThreeBallsGame from "../screens/ThreeBalls/ThreeBallsGame";
import FourBallsStart from "../screens/FourBalls/FourBallsStart";
import FourBallsGame from "../screens/FourBalls/FourBallsGame";
import FiveBallsStart from "../screens/FiveBalls/FiveBallsStart";
import FiveBallsGame from "../screens/FiveBalls/FiveBallsGame";
import StartRules from "../screens/StartRules";

const Stack = createStackNavigator();

export default ({ init }) => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  return (
    <Stack.Navigator
      mode="card"
      screenOptions={
        fontLoaded && {
          gestureEnabled: false,
          headerShown: false,
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
      {!init && <Stack.Screen name="start" component={StartRules} />}
      <Stack.Screen name="Tabs" component={Tabs} />
      {/* 세 자리 */}
      <Stack.Screen name="ThreeBalls" component={ThreeBallsStart} />
      <Stack.Screen
        name="ThreeBallsGame"
        component={ThreeBallsGame}
        options={{
          headerShown: true,
          headerTitle: "세 자리 야구",
          // cardStyle: { backgroundColor: "transparent" },
          // cardOverlayEnabled: true,
          // headerShown: false,
          // animationEnabled: false,
          // cardOverlay: true,
        }}
      />
      {/* 네 자리 */}
      <Stack.Screen name="FourBalls" component={FourBallsStart} />
      <Stack.Screen
        name="FourBallsGame"
        component={FourBallsGame}
        options={{
          headerShown: true,
          headerTitle: "네 자리 야구",
        }}
      />
      {/* 다섯 자리 */}
      <Stack.Screen name="FiveBalls" component={FiveBallsStart} />
      <Stack.Screen
        name="FiveBallsGame"
        component={FiveBallsGame}
        options={{
          headerShown: true,
          headerTitle: "다섯 자리 야구",
        }}
      />
    </Stack.Navigator>
  );
};
