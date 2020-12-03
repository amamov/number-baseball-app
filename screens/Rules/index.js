import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";

const PrevButton = styled.View``;

const NextButton = styled.View``;

const ButtonImage = styled.Image``;

export default ({ navigation }) => (
  <Swiper
    style={styles.wrapper}
    horizontal={true}
    showsPagination={false}
    bounces={true}
    loop={false}
    showsButtons={true}
    buttonWrapperStyle={{
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 10,
    }}
    nextButton={
      <NextButton>
        <ButtonImage
          source={require("../../assets/rule/right.png")}
          style={{ width: 30, height: 30 }}
        ></ButtonImage>
      </NextButton>
    }
    prevButton={
      <PrevButton>
        <ButtonImage
          source={require("../../assets/rule/left.png")}
          style={{ width: 30, height: 30 }}
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
