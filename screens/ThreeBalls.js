import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Dimensions, Alert } from "react-native";
import { connect } from "react-redux";
import Record from "../components/Record";
import checkCountValue from "../funcs/checkCountValue";
import problemFactory from "../funcs/problemFactory";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const Container = styled.View`
  display: flex;
  flex: 1;
`;

const Output = styled.View`
  width: 100%;
  flex: 0.8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const OutputBox = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutputText = styled.Text`
  font-size: 28px;
`;

const Board = styled.ScrollView`
  width: 100%;
  flex: 4;
  /* height: ${HEIGHT / 2}; */
  border: 1px solid gray;
`;

const Result = styled.View``;

const Text = styled.Text``;

const KeypadContainer = styled.View`
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Keypad = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NumberBox = styled.TouchableOpacity`
  background: gray;
  margin: 0 4px;
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.Text`
  font-size: 20px;
`;

//////////////////// Components ////////////////////

const deleteKey = "<";

const bullsAndCows = (problem, answer) => {
  const strike = 0;
  const ball = 0;
  return [strike, ball];
};

const ThreeBalls = () => {
  const [problem, setProblem] = useState(problemFactory(3));
  const [output, setOutput] = useState({ one: "", two: "", three: "" });
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log(problem);
  }, [problem]);

  const onSubmit = () => {
    if (checkCountValue(output, "", 0)) {
      const answer = [output.one, output.two, output.three];
      const [strike, ball] = bullsAndCows(problem, answer);
      Alert.alert("answer", `${answer.join("")}`);

      setResults((prev) => [
        { answer: answer.join(""), strike, ball },
        ...prev,
      ]);
      setOutput({ one: "", two: "", three: "" });
    }
  };

  const inputNumber = (key) => {
    if (key === deleteKey) {
      if (checkCountValue(output, "", 0)) {
        setOutput((prev) => ({ ...prev, three: "" }));
      } else if (checkCountValue(output, "", 1)) {
        setOutput((prev) => ({ ...prev, two: "" }));
      } else if (checkCountValue(output, "", 2)) {
        setOutput((prev) => ({ ...prev, one: "" }));
      }
    } else {
      if (checkCountValue(output, "", 3)) {
        setOutput((prev) => {
          if (checkCountValue(prev, key, 0)) return { ...prev, one: key };
          else return prev;
        });
      } else if (checkCountValue(output, "", 2)) {
        setOutput((prev) => {
          if (checkCountValue(prev, key, 0)) return { ...prev, two: key };
          else return prev;
        });
      } else if (checkCountValue(output, "", 1)) {
        setOutput((prev) => {
          if (checkCountValue(prev, key, 0)) return { ...prev, three: key };
          else return prev;
        });
      }
    }
  };

  return (
    <Container>
      <Record />

      <Output>
        <OutputBox>
          <OutputText>{output.one}</OutputText>
        </OutputBox>
        <OutputBox>
          <OutputText>{output.two}</OutputText>
        </OutputBox>
        <OutputBox>
          <OutputText>{output.three}</OutputText>
        </OutputBox>
      </Output>

      <Board>
        {results.map((result, idx) => (
          <Result key={idx}>
            <Text>{result.answer}</Text>
          </Result>
        ))}
      </Board>

      <KeypadContainer>
        <Keypad>
          <NumberBox onPressOut={() => inputNumber(1)}>
            <Number>1</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(2)}>
            <Number>2</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(3)}>
            <Number>3</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(4)}>
            <Number>4</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(5)}>
            <Number>5</Number>
          </NumberBox>
          <NumberBox onPressOut={onSubmit}>
            <Number>GO</Number>
          </NumberBox>
        </Keypad>

        <Keypad>
          <NumberBox onPressOut={() => inputNumber(6)}>
            <Number>6</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(7)}>
            <Number>7</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(8)}>
            <Number>8</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(9)}>
            <Number>9</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(0)}>
            <Number>0</Number>
          </NumberBox>
          <NumberBox onPressOut={() => inputNumber(deleteKey)}>
            <Number>{deleteKey}</Number>
          </NumberBox>
        </Keypad>
      </KeypadContainer>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeBalls);
