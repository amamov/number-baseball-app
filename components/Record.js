import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";
import * as Font from "expo-font";

const { width, height } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const Container = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid gray; */
  /* background-color: black; */
`;

const View = styled.View`
  display: flex;
  flex-direction: row;
`;

const Text = styled.Text`
  /* color: white; */
  ${({ fontLoaded }) => fontLoaded && `font-family: Sunflower`}
`;

const Data = styled.Text`
  ${({ fontLoaded }) => fontLoaded && `font-family: Sunflower`}
`;

//////////////////// Components ////////////////////
const Record = ({ success, avg_attempts }) => {
  const [fontLoaded] = Font.useFonts({
    Sunflower: require("../assets/Sunflower-Medium.ttf"),
  });
  return (
    <Container>
      <View>
        <Text fontLoaded={fontLoaded}>성공 : </Text>
        <Data fontLoaded={fontLoaded}>{success}회</Data>
      </View>
      <View>
        <Text fontLoaded={fontLoaded}>평균 시도 : </Text>
        <Data fontLoaded={fontLoaded}>{avg_attempts}회</Data>
      </View>
    </Container>
  );
};

Record.propTypes = {
  success: PropTypes.number.isRequired,
  avg_attempts: PropTypes.number.isRequired,
};

export default Record;
