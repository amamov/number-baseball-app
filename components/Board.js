import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Dimensions, Alert } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const Container = styled.View`
  width: 100%;
  flex: 4;
  /* height: ${HEIGHT / 2}; */
  border: 1px solid gray;
`;
const Result = styled.View`
  display: flex;
  flex-direction: row;
`;

const Text = styled.Text`
  margin: 20px;
  font-size: 20px;
`;
//////////////////// Components ////////////////////

const Board = ({ results }) => {
  //   console.log(results);
  return (
    <Container>
      {results.map((result, idx) => (
        <Result key={idx}>
          <Text>{result.answer}</Text>
          <Text>{result.strike}</Text>
          <Text>{result.ball}</Text>
        </Result>
      ))}
    </Container>
  );
};

export default Board;
