//./components/Movies/HorizontalSlider.js
import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const Container = styled.View`
  background-color: #131314;
`;

const HorizontalSlider = ({ children }) => {
  return (
    <Container>
      <ScrollView
        // style={{ marginVertical: 20 }}
        contentContainerStyle={{ paddingLeft: 10, marginBottom: 20 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </Container>
  );
};

HorizontalSlider.propTypes = {};

export default HorizontalSlider;
