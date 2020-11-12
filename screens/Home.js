import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import MoveView from "../components/MoveView";
import * as Font from "expo-font";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 5) / 4);

//////////////////// Style ////////////////////

const Container = styled.View``;

const ItemContainer = styled.View`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 25px;
`;

const GameButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 20px;
`;

//////////////////// Components ////////////////////

const DATA = [
  { name: "ThreeBalls", title: "세 자리 야구", poster: "" },
  { name: "FourBalls", title: "네 자리 야구", poster: "" },
  { name: "FiveBalls", title: "다섯 자리 야구", poster: "" },
];

const Home = ({ navigation }) => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });
  const renderItem = ({ item }) => {
    return (
      <ItemContainer>
        <GameButton onPress={() => navigation.navigate(`${item.name}`)}>
          <Text
            style={fontLoaded && { fontFamily: "BlackHanSans" }}
          >{`${item.title}`}</Text>
        </GameButton>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <MoveView>
        <Carousel
          ref={(c) => (carousel = c)}
          data={DATA}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={{
            marginTop: 50,
          }}
          inactiveSlideShift={10}
          useScrollView={true}
          // layout={"tinder"}
          // layout={"stack"}
        />
      </MoveView>
    </Container>
  );
};
export default Home;
