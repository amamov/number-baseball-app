import React, { useState, useRef } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import MoveView from "../../animations/MoveView";
import ImageContainer from "../../components/ImageContainer";
import Pagination from "./Pagination";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 5) / 4);

//////////////////// Style ////////////////////

const FlexBox = styled.View`
  margin-top: ${SLIDER_HEIGHT > 700 ? 60 : 0}px;
  height: ${SLIDER_HEIGHT / 1.5}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.View`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  align-items: center;
  justify-content: center;
`;

const GameButton = styled.TouchableOpacity`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_WIDTH}px;
  border-radius: ${ITEM_WIDTH / 2}px;
  background-color: black;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
`;

const Image1 = styled.Image`
  width: 50%;
  height: 40%;
`;

const Image2 = styled.Image`
  width: 40%;
  height: 40%;
`;

const Text = styled.Text`
  color: white;
  font-size: 20px;
`;

//////////////////// Components ////////////////////

const DATA = [
  { name: "ThreeBalls", title: "Three Balls" },
  { name: "FourBalls", title: "Four Balls" },
  { name: "FiveBalls", title: "Five Balls" },
];

const Home = ({ navigation }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const renderItem = ({ item }) => {
    return (
      <ItemContainer>
        <GameButton onPress={() => navigation.navigate(`${item.name}`)}>
          {`${item.name}` === "ThreeBalls" ? (
            <Image1 source={require("../../assets/homethree.png")} />
          ) : `${item.name}` === "FourBalls" ? (
            <Image2 source={require("../../assets/homefour.png")} />
          ) : (
            `${item.name}` === "FiveBalls" && (
              <Image2 source={require("../../assets/homefive.png")} />
            )
          )}
        </GameButton>
      </ItemContainer>
    );
  };

  return (
    <ImageContainer src={require("../../assets/homebg.png")}>
      <MoveView>
        <FlexBox>
          <Carousel
            ref={carouselRef}
            data={DATA}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={100}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
            // containerCustomStyle={{}}
            // layout={"tinder"}
            // layout={"stack"}
          />
          <Pagination />
        </FlexBox>
      </MoveView>
    </ImageContainer>
  );
};

export default Home;
