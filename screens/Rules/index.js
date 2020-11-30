import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";

const PrevButton = styled.View`
  margin-top: 20px;
`;

const NextButton = styled.View`
  /* margin-bottom: 20px; */
  /* border: 4px solid white; */
`;

const ButtonImage = styled.Image``;

export default ({ navigation }) => (
  <Swiper
    style={styles.wrapper}
    horizontal={false}
    showsPagination={false}
    bounces={true}
    loop={false}
    showsButtons={true}
    buttonWrapperStyle={{
      flexDirection: "column",
      paddingHorizontal: 20,
      paddingVertical: 10,
    }}
    nextButton={
      <NextButton>
        <ButtonImage
          source={require("../../assets/rule/downArrow.png")}
        ></ButtonImage>
      </NextButton>
    }
    prevButton={
      <PrevButton>
        <ButtonImage
          source={require("../../assets/rule/upArrow.png")}
        ></ButtonImage>
      </PrevButton>
    }
  >
    <Slider1 />
    <Slider2 />
    <Slider3 />
    <Slider4 />
    <Slider5 navigation={navigation} />
  </Swiper>
);

const styles = {
  wrapper: {},
};
