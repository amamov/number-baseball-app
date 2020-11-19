import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
//////////////////// Style ////////////////////
const GameButton = styled.TouchableOpacity``;

const Text = styled.Text``;

const Container = styled.View`
  padding: 30px;
`;

//////////////////// Components ////////////////////
const Wow = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <GameButton onPress={onPress}>
        <Text>게임 다시 하기</Text>
      </GameButton>
    </Container>
  );
};

export default Wow;
