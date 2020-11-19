import React, { useRef, useEffect } from "react";
import { Animated, Dimensions } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;

const MoveView = (props) => {
  const moveOn = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(moveOn, {
      toValue: 40,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [moveOn]);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ translateY: moveOn }],
        height: `${SLIDER_HEIGHT}%`,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default MoveView;
