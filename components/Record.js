import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components/native";
import * as Font from "expo-font";
import { init_status } from "../store";
import { loaded_data, clear_local_storage } from "../local_storage";

//////////////////// Style ////////////////////
const Container = styled.View`
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid gray; */
`;

const View = styled.View`
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 30px;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans`}
`;

const Data = styled.Text`
  margin-top: 15px;
  color: white;
  font-size: 70px;
  ${({ fontLoaded }) => fontLoaded && `font-family: BlackHanSans`}
`;

//////////////////// Components ////////////////////
const Record = ({ balls, status, dispatch_init_status }) => {
  const [init, setInit] = useState(false);
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  useEffect(() => {
    // clear_local_storage();
    loaded_data._W && dispatch_init_status(loaded_data._W);
    setInit(true);
  }, [dispatch_init_status]);

  return (
    <Container>
      <View>
        <Text fontLoaded={fontLoaded}>성공 횟수</Text>
        {init ? (
          balls === 3 ? (
            <Data fontLoaded={fontLoaded}>{status["0"].success}</Data>
          ) : balls === 4 ? (
            <Data fontLoaded={fontLoaded}>{status["1"].success}</Data>
          ) : (
            balls === 5 && (
              <Data fontLoaded={fontLoaded}>{status["2"].success}</Data>
            )
          )
        ) : (
          <Data fontLoaded={fontLoaded}>계산중...</Data>
        )}
      </View>
      <View>
        <Text fontLoaded={fontLoaded}>평균 횟수</Text>
        {init ? (
          balls === 3 ? (
            <Data fontLoaded={fontLoaded}>{status["0"].avg_attempts}</Data>
          ) : balls === 4 ? (
            <Data fontLoaded={fontLoaded}>{status["1"].avg_attempts}</Data>
          ) : (
            balls === 5 && (
              <Data fontLoaded={fontLoaded}>{status["2"].avg_attempts}</Data>
            )
          )
        ) : (
          <Data fontLoaded={fontLoaded}>계산중...</Data>
        )}
      </View>
    </Container>
  );
};

Record.propTypes = {
  balls: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return { status: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch_init_status: (data) => dispatch(init_status(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
