import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import { loaded_data } from "../local_storage";
import { init_status } from "../store";

const Stack = createStackNavigator();

const StackNavigator = ({ localData, dispatch_init_status }) => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  useEffect(() => {
    // clear_local_storage();
    localData && dispatch_init_status(loaded_data._W);
  }, [dispatch_init_status]);

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
      {!localData && <Stack.Screen name="start" component={StartRules} />}
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch_init_status: (data) => dispatch(init_status(data)),
  };
};

export default connect(null, mapDispatchToProps)(StackNavigator);
