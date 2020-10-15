import React, { useState, useEffect } from "react";
import { Dimensions, Alert } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Record from "../components/Record";
import Board from "../components/Board";
import checkCountValue from "../funcs/checkCountValue";
import problemFactory from "../funcs/problemFactory";
import bullsAndCows from "../funcs/bullsAndCows";
import { accumulate_success, accumulate_attempts, init_status } from "../store";
import { loaded_data, clear_local_storage } from "../local_storage";

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

const ThreeBalls = ({
  status,
  dispatch_accumulate_success,
  dispatch_accumulate_attempts,
  dispatch_init_status,
}) => {
  const [problem, setProblem] = useState(problemFactory(3));
  const [output, setOutput] = useState({ one: "", two: "", three: "" });
  const [results, setResults] = useState([]);

  useEffect(() => {
    // clear_local_storage();
    loaded_data._W && dispatch_init_status(loaded_data._W);
  }, [dispatch_init_status]);

  useEffect(() => {
    // 개발 체크용
    console.log("문제 : ", problem);
    console.log(status);
  }, [problem, status]);

  const onSubmit = () => {
    if (checkCountValue(output, "", 0)) {
      const answer = [output.one, output.two, output.three];
      const [strike, ball, goal] = bullsAndCows(problem, answer);
      // Alert.alert("answer", `${answer.join("")}`);

      if (goal) {
        setResults([]);
        setProblem(problemFactory(3));
        dispatch_accumulate_success();
      } else {
        setResults((prev) => [
          { answer: answer.join(""), strike, ball, goal },
          ...prev,
        ]);
        dispatch_accumulate_attempts();
      }

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

  const responseKeypad = (key) => checkCountValue(output, key, 0) && key;

  return (
    <Container>
      <Record success={status.success} avg_attempts={status.avg_attempts} />

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

      <Board results={results} />

      <KeypadContainer>
        <Keypad>
          <NumberBox onPress={() => inputNumber(1)}>
            <Number>{responseKeypad(1)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(2)}>
            <Number>{responseKeypad(2)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(3)}>
            <Number>{responseKeypad(3)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(4)}>
            <Number>{responseKeypad(4)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(5)}>
            <Number>{responseKeypad(5)}</Number>
          </NumberBox>
          <NumberBox onPress={onSubmit}>
            <Number>GO</Number>
          </NumberBox>
        </Keypad>

        <Keypad>
          <NumberBox onPress={() => inputNumber(6)}>
            <Number>{responseKeypad(6)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(7)}>
            <Number>{responseKeypad(7)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(8)}>
            <Number>{responseKeypad(8)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(9)}>
            <Number>{responseKeypad(9)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(0)}>
            <Number>{responseKeypad(0)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(deleteKey)}>
            <Number>{deleteKey}</Number>
          </NumberBox>
        </Keypad>
      </KeypadContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { status: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch_accumulate_success: () => dispatch(accumulate_success()),
    dispatch_accumulate_attempts: () => dispatch(accumulate_attempts()),
    dispatch_init_status: (data) => dispatch(init_status(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeBalls);
