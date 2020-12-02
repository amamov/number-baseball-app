import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components/native";
import * as Font from "expo-font";

//////////////////// Style ////////////////////
const Container = styled.View`
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
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
const Record = ({ balls, status }) => {
  const [fontLoaded] = Font.useFonts({
    BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
  });

  return (
    <Container>
      <View>
        <Text fontLoaded={fontLoaded}>성공 횟수</Text>
        {balls === 3 ? (
          <Data fontLoaded={fontLoaded}>{status["0"].success}</Data>
        ) : balls === 4 ? (
          <Data fontLoaded={fontLoaded}>{status["1"].success}</Data>
        ) : (
          balls === 5 && (
            <Data fontLoaded={fontLoaded}>{status["2"].success}</Data>
          )
        )}
      </View>
      <View>
        <Text fontLoaded={fontLoaded}>평균 횟수</Text>
        {balls === 3 ? (
          <Data fontLoaded={fontLoaded}>{status["0"].avg_attempts}</Data>
        ) : balls === 4 ? (
          <Data fontLoaded={fontLoaded}>{status["1"].avg_attempts}</Data>
        ) : (
          balls === 5 && (
            <Data fontLoaded={fontLoaded}>{status["2"].avg_attempts}</Data>
          )
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

export default connect(mapStateToProps, null)(Record);
