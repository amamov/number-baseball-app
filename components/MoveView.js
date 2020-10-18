import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const MoveView = (props) => {
  const moveOn = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(moveOn, {
      toValue: 40,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [moveOn]);

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ translateY: moveOn }],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default MoveView;
