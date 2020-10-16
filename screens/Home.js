import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

//////////////////// Style ////////////////////

// https://reactnative.dev/docs/animations --> transition 효과 참고하기
const Container = styled.View``;

const GameButton = styled.Button``;

const RuleButton = styled.Button``;

//////////////////// Components ////////////////////
const Home = ({ navigation }) => {
  return (
    <Container>
      <GameButton
        onPress={() => navigation.navigate("ThreeBalls")}
        title="세 자리 야구"
      />
      <GameButton
        onPress={() => navigation.navigate("FourBalls")}
        title="네 자리 야구"
      />
      <GameButton
        onPress={() => navigation.navigate("FiveBalls")}
        title="다섯 자리 야구"
      />
      <RuleButton
        onPress={() => navigation.navigate("Rules")}
        title="게임 설명"
      />
    </Container>
  );
};
export default Home;
