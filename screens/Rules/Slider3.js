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
  margin-right: auto;
  color: white;
  font-size: 45px;
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
  width: 90px;
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

const TextBox = styled.View`
  flex-direction: row;
`;

const BlueText = styled.Text`
  color: #007aff;
  font-size: 20px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Slider3 = () => {
  const [fontLoaded] = Font.useFonts({
    NotoSansMono: require("../../assets/NotoSansMonoCJKkr-Bold.otf"),
  });
  return (
    <Container>
      <Header>
        <Text1 fontLoaded={fontLoaded}>알아야 하는</Text1>
        <TextBox fontLoaded={fontLoaded}>
          <BlueText style={{ fontSize: 40 }} fontLoaded={fontLoaded}>
            규칙
          </BlueText>
          <Text2 fontLoaded={fontLoaded}>이 뭐야?</Text2>
        </TextBox>
      </Header>
      <ImageContainer>
        <Image source={require("../../assets/rule/calculator.png")} />
      </ImageContainer>
      <DescriptionBox>
        <Desciription fontLoaded={fontLoaded}>
          숫자는 0~9까지 구성되어 있으며
        </Desciription>
        <TextBox>
          <Desciription fontLoaded={fontLoaded}>각 숫자는 </Desciription>
          <BlueText fontLoaded={fontLoaded}>한번</BlueText>
          <Desciription fontLoaded={fontLoaded}>
            씩만 사용 가능해요.
          </Desciription>
        </TextBox>
      </DescriptionBox>
    </Container>
  );
};

export default Slider3;
