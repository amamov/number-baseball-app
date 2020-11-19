import React, { useState, useEffect } from "react";
import { Alert, Platform } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Font from "expo-font";
import Board from "../components/Board";
import checkCountValue from "../funcs/checkCountValue";
import problemFactory from "../funcs/problemFactory";
import bullsAndCows from "../funcs/bullsAndCows";
import { accumulate_success, accumulate_attempts, init_status } from "../store";
import { loaded_data, clear_local_storage } from "../local_storage";
//////////////////// Style ////////////////////
const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: white;
`;

const Output = styled.View`
  width: 100%;
  flex: 0.8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
`;

const OutputBox = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutputText = styled.Text`
  font-size: 38px;
  color: white;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans `}
`;

const KeypadContainer = styled.View`
  ${({ isHidden }) => (isHidden ? `display: none` : `display: flex`)};
  width: 100%;
  flex: 2;
  padding: 0 0 15px 0;
  justify-content: space-evenly;
  align-items: center;
  /* display: none; */
`;

const ModalKepad = styled.TouchableOpacity`
  ${({ isHidden }) => isHidden && `height: 50px;`}
  width: 100%;
  border: 1px solid gray;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const ModalText = styled.Text`
  font-size: 30px;
`;

const Keypad = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NumberBox = styled.TouchableOpacity`
  margin: 0 4px;
  width: 50px;
  height: 50px;
  /* border: 1px solid gray; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.Text`
  font-size: 28px;
  color: black;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans `}
`;

//////////////////// Components ////////////////////
const deleteKey = "<";

const ThreeBalls = ({
  status,
  navigation,
  dispatch_accumulate_success,
  dispatch_accumulate_attempts,
  dispatch_init_status,
}) => {
  const [problem, setProblem] = useState(problemFactory(3));
  const [output, setOutput] = useState({ one: "", two: "", three: "" });
  const [results, setResults] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  useEffect(() => {
    // clear_local_storage();
    loaded_data._W && dispatch_init_status(loaded_data._W);
  }, [dispatch_init_status]);

  useEffect(() => {
    // 개발 체크용
    console.log("문제 : ", problem);
  }, [problem]);

  const onSubmit = () => {
    if (checkCountValue(output, "", 0)) {
      const answer = [output.one, output.two, output.three];
      const [strike, ball, goal] = bullsAndCows(problem, answer);
      // Alert.alert("answer", `${answer.join("")}`);

      if (goal) {
        setResults([]);
        setProblem(problemFactory(3));
        dispatch_accumulate_success(0);
        // Alert.alert("홈런!", "축하합니다!");
        navigation.navigate("Wow");
      } else {
        setResults((prev) => [
          {
            answer: answer.join(""),
            strike,
            ball,
            goal,
          },
          ...prev,
        ]);
        dispatch_accumulate_attempts(0);
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
      <Output>
        <OutputBox>
          <OutputText fontLoaded={fontLoaded}>{output.one}</OutputText>
        </OutputBox>
        <OutputBox>
          <OutputText fontLoaded={fontLoaded}>{output.two}</OutputText>
        </OutputBox>
        <OutputBox>
          <OutputText fontLoaded={fontLoaded}>{output.three}</OutputText>
        </OutputBox>
      </Output>

      <Board results={results} />

      <ModalKepad
        isHidden={isHidden}
        onPress={() => {
          setIsHidden((prev) => !prev);
        }}
      >
        {Platform.OS == "ios" ? (
          <Ionicons name="ios-arrow-down" size={23} color="black" />
        ) : (
          <Ionicons name="md-arrow-dropdown" size={23} color="black" />
        )}
      </ModalKepad>

      <KeypadContainer isHidden={isHidden}>
        <Keypad>
          <NumberBox onPress={() => inputNumber(1)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(1)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(2)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(2)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(3)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(3)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(4)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(4)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(5)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(5)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(deleteKey)}>
            <Number fontLoaded={fontLoaded}>{"<"}</Number>
          </NumberBox>
        </Keypad>

        <Keypad>
          <NumberBox onPress={() => inputNumber(6)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(6)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(7)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(7)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(8)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(8)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(9)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(9)}</Number>
          </NumberBox>
          <NumberBox onPress={() => inputNumber(0)}>
            <Number fontLoaded={fontLoaded}>{responseKeypad(0)}</Number>
          </NumberBox>

          <NumberBox onPress={onSubmit}>
            <Number fontLoaded={fontLoaded}>⏎</Number>
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
    dispatch_accumulate_success: (ballsIndex) =>
      dispatch(accumulate_success(ballsIndex)),
    dispatch_accumulate_attempts: (ballsIndex) =>
      dispatch(accumulate_attempts(ballsIndex)),
    dispatch_init_status: (data) => dispatch(init_status(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeBalls);
