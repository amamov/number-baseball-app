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
  width: 65%;
`;

const Text1 = styled.Text`
  margin-right: auto;
  color: #007aff;
  font-size: 47px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Text2 = styled.Text`
  margin-left: auto;
  color: #ffffff;
  font-size: 40px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const ImageContainer = styled.View``;

const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

const DescriptionBox = styled.View`
  align-items: center;
`;

const Desciription = styled.Text`
  color: #ffffff;
  font-size: 20px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const TextBox = styled.View`
  flex-direction: row;
`;

const BlueText = styled.Text`
  color: #007aff;
  font-size: 20px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Slider2 = () => {
  const [fontLoaded] = Font.useFonts({
    NotoSansMono: require("../../assets/NotoSansMonoCJKkr-Bold.otf"),
  });
  return (
    <Container>
      <Header>
        <Text1 fontLoaded={fontLoaded}>어떻게</Text1>
        <Text2 fontLoaded={fontLoaded}>풀 수 있어?</Text2>
      </Header>
      <ImageContainer>
        <Image source={require("../../assets/rule/check.png")} />
      </ImageContainer>
      <DescriptionBox>
        <Desciription fontLoaded={fontLoaded}>
          각 자리에 숫자와 위치가
        </Desciription>
        <TextBox>
          <BlueText fontLoaded={fontLoaded}>모두 </BlueText>
          <Desciription fontLoaded={fontLoaded}>
            일치해야 성공이에요!
          </Desciription>
        </TextBox>
      </DescriptionBox>
    </Container>
  );
};

export default Slider2;
