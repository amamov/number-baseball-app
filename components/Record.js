import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid gray;
`;

const View = styled.View`
  display: flex;
  flex-direction: row;
`;

const Text = styled.Text``;

const Data = styled.Text``;

//////////////////// Components ////////////////////
const Record = () => {
  return (
    <Container>
      <View>
        <Text>성공 : </Text>
        <Data>{"0"}회</Data>
      </View>
      <View>
        <Text>평균 시도 : </Text>
        <Data>{"0"}회</Data>
      </View>
    </Container>
  );
};

export default Record;
