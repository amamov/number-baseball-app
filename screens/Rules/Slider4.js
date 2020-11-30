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

const HeaderText = styled.Text`
  margin-left: auto;
  color: #ffffff;
  font-size: 35px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const ImageContainer = styled.View``;

const Image = styled.Image`
  width: 183px;
  height: 145px;
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

const Slider4 = () => {
  const [fontLoaded] = Font.useFonts({
    NotoSansMono: require("../../assets/NotoSansMonoCJKkr-Bold.otf"),
  });
  return (
    <Container>
      <Header>
        <TextBox fontLoaded={fontLoaded}>
          <HeaderText style={{ color: "#2e86c1" }} fontLoaded={fontLoaded}>
            스트라이크
          </HeaderText>
          <HeaderText fontLoaded={fontLoaded}>?</HeaderText>
        </TextBox>
        <TextBox fontLoaded={fontLoaded}>
          <HeaderText style={{ color: "#148f77" }} fontLoaded={fontLoaded}>
            볼
          </HeaderText>
          <HeaderText fontLoaded={fontLoaded}>? </HeaderText>
          <HeaderText style={{ color: "#b03a2e" }} fontLoaded={fontLoaded}>
            아웃
          </HeaderText>
          <HeaderText fontLoaded={fontLoaded}>? </HeaderText>
        </TextBox>
      </Header>
      <ImageContainer>
        <Image source={require("../../assets/rule/sbo.png")} />
      </ImageContainer>
      <DescriptionBox>
        <Desciription fontLoaded={fontLoaded}>숫자를 맞췄지만</Desciription>
        <TextBox>
          <Desciription style={{ marginTop: 8 }} fontLoaded={fontLoaded}>
            자리수가 일치하지 않으면{" "}
          </Desciription>
          <Desciription
            style={{ marginTop: 8, color: "#148f77" }}
            fontLoaded={fontLoaded}
          >
            볼
          </Desciription>
        </TextBox>
        <TextBox>
          <Desciription
            style={{ marginTop: 8, fontSize: 18 }}
            fontLoaded={fontLoaded}
          >
            숫자와 자리수까지 일치하면{" "}
          </Desciription>
          <Desciription
            style={{ marginTop: 8, color: "#2e86c1", fontSize: 18 }}
            fontLoaded={fontLoaded}
          >
            스트라이크
          </Desciription>
        </TextBox>
        <TextBox>
          <Desciription style={{ marginTop: 8 }} fontLoaded={fontLoaded}>
            하나도 일치하지 않을 경우{" "}
          </Desciription>
          <Desciription
            style={{ marginTop: 8, color: "#b03a2e" }}
            fontLoaded={fontLoaded}
          >
            아웃
          </Desciription>
        </TextBox>
      </DescriptionBox>
    </Container>
  );
};

export default Slider4;
