import React from "react";
import styled from "styled-components";
import * as Font from "expo-font";
import FadeInOutView from "../../animations/FadeInOutView";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.View`
  margin-top: 23px;
  width: 60%;
`;

const Text1 = styled.Text`
  margin-right: auto;
  color: white;
  font-size: 47px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Text2 = styled.Text`
  margin-left: auto;
  color: #ffffff;
  font-size: 40px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const NumberContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

const NumberBox = styled.View`
  border: 3px solid white;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

const NumberText = styled.Text`
  font-size: 55px;
  font-weight: 500;
  color: #ffffff;
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

const GoHomeContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const GoHomeButton = styled.TouchableOpacity`
  border: 2px solid white;
  border-radius: 25px;
  padding: 5px 20px;
`;

const GoHomeText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  ${({ fontLoaded }) => fontLoaded && `font-family: NotoSansMono `}
`;

const Slider5 = ({ navigation }) => {
  const [fontLoaded] = Font.useFonts({
    NotoSansMono: require("../../assets/NotoSansMonoCJKkr-Bold.otf"),
  });
  return (
    <Container>
      <Header>
        <TextBox fontLoaded={fontLoaded}>
          <BlueText style={{ fontSize: 47 }} fontLoaded={fontLoaded}>
            예시
          </BlueText>
          <Text1 fontLoaded={fontLoaded}>를</Text1>
        </TextBox>
        <Text2 fontLoaded={fontLoaded}>보여줘!</Text2>
        <NumberContainer>
          <NumberBox>
            <TextBox>
              <NumberText style={{ color: "gray" }}>2 1 </NumberText>
              <NumberText>3</NumberText>
            </TextBox>
          </NumberBox>
        </NumberContainer>
      </Header>
      <DescriptionBox>
        <Desciription fontLoaded={fontLoaded}>
          정답 숫자가 1 2 3 인 경우에
        </Desciription>
        <Desciription fontLoaded={fontLoaded}>2 1 3을 눌렀다면,</Desciription>
        <Desciription style={{ marginTop: 20 }} fontLoaded={fontLoaded}>
          숫자는 모두 맞았지만
        </Desciription>
        <Desciription style={{ fontSize: 18 }} fontLoaded={fontLoaded}>
          1과 2의 자리수가 일치하지 않기 때문에
        </Desciription>
        <TextBox style={{ marginTop: 20 }}>
          <Desciription style={{ fontSize: 28 }} fontLoaded={fontLoaded}>
            1{" "}
          </Desciription>
          <Desciription
            style={{ fontSize: 28, color: "#2e86c1" }}
            fontLoaded={fontLoaded}
          >
            스트라이크{" "}
          </Desciription>
          <Desciription style={{ fontSize: 28 }} fontLoaded={fontLoaded}>
            2{" "}
          </Desciription>
          <Desciription
            style={{ fontSize: 28, color: "#148f77" }}
            fontLoaded={fontLoaded}
          >
            볼
          </Desciription>
        </TextBox>
      </DescriptionBox>
      <GoHomeContainer>
        <FadeInOutView>
          <GoHomeButton onPress={() => navigation.navigate("Home")}>
            <GoHomeText fontLoaded={fontLoaded}>게임하기</GoHomeText>
          </GoHomeButton>
        </FadeInOutView>
      </GoHomeContainer>
    </Container>
  );
};

export default Slider5;
