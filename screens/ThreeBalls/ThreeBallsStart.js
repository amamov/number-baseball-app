import React from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import * as Font from "expo-font";
import ImageContainer from "../../components/ImageContainer";
import MoveView from "../../animations/MoveView";
import Record from "../../components/Record";
import FadeInOutView from "../../animations/FadeInOutView";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(WIDTH * 1.2);

const FlexBox = styled.View`
  height: ${HEIGHT / 1.5}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.View`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_WIDTH}px;
  border-radius: ${ITEM_WIDTH / 2}px;
  background-color: black;
  border: 3px solid white;
  align-items: center;
  justify-content: center;
`;

const GoHomeButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 50px;
  width: 70px;
  height: 70px;
  border-radius: ${70 / 2}px;
  background-color: black;
  border: 3px solid white;
  justify-content: center;
  align-items: center;
`;

const GoHomeText = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const PlayButton = styled.TouchableOpacity`
  margin-top: 40px;
  width: ${WIDTH}px;
  align-items: center;
`;

const PlayText = styled.Text`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans `}
`;

const ThreeBallsStart = ({ navigation }) => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../../assets/BlackHanSans-Regular.ttf"),
  });
  return (
    <ImageContainer src={require("../../assets/homebg.png")}>
      <MoveView>
        <FlexBox>
          <ItemContainer>
            <GoHomeButton onPress={() => navigation.navigate("Home")}>
              <GoHomeText>X</GoHomeText>
            </GoHomeButton>
            <Record balls={3} />
          </ItemContainer>
        </FlexBox>
        <FadeInOutView>
          <PlayButton onPress={() => navigation.navigate("ThreeBallsGame")}>
            <PlayText fontLoaded={fontLoaded}>Play</PlayText>
          </PlayButton>
        </FadeInOutView>
      </MoveView>
    </ImageContainer>
  );
};

export default ThreeBallsStart;
