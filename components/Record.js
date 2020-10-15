import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";

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
const Record = ({ success, avg_attempts }) => {
  return (
    <Container>
      <View>
        <Text>성공 : </Text>
        <Data>{success}회</Data>
      </View>
      <View>
        <Text>평균 시도 : </Text>
        <Data>{avg_attempts}회</Data>
      </View>
    </Container>
  );
};

Record.propTypes = {
  success: PropTypes.number.isRequired,
  avg_attempts: PropTypes.number.isRequired,
};

export default Record;
