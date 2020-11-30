import React from "react";
import styled from "styled-components";
import * as Font from "expo-font";

const Container = styled.View`
  flex: 1;
  background-color: black;
  /* border: 1px solid white; */
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.View`
  align-items: center;
`;

const Text1 = styled.Text`
  color: #007aff;
  font-size: 50px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Text2 = styled.Text`
  color: #ffffff;
  font-size: 40px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const ImageContainer = styled.View``;

const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

const DescriptionBox = styled.View`
  align-items: center;
`;

const Desciription = styled.Text`
  color: #ffffff;
  font-size: 20px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Slider1 = () => {
  const [fontLoaded] = Font.useFonts({
    NotoSansMono: require("../../assets/NotoSansMonoCJKkr-Bold.otf"),
  });
  return (
    <Container>
      <Header>
        <Text1 fontLoaded={fontLoaded}>숫자 야구</Text1>
        <Text2 fontLoaded={fontLoaded}>그게 뭐야?</Text2>
      </Header>
      <ImageContainer>
        <Image source={require("../../assets/rule/baseball.png")} />
      </ImageContainer>
      <DescriptionBox>
        <Desciription fontLoaded={fontLoaded}>
          숫자야구란 랜덤으로 지정되는
        </Desciription>
        <Desciription fontLoaded={fontLoaded}>
          숫자가 무엇인지 맞추는 게임입니다.
        </Desciription>
      </DescriptionBox>
    </Container>
  );
};

export default Slider1;
