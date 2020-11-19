import React, { useState } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Line = styled.View``;

const CurrentPageLine = styled.View``;

const PageLine = styled.View``;

const Pagination = () => {
  const [isCurent, setIsCurrent] = useState(false);

  return (
    <Container>
      <Text style={{ color: "white" }}>sadassadasdasdas</Text>
      <Line>
        {isCurent ? (
          <CurrentPageLine></CurrentPageLine>
        ) : (
          <PageLine>
            <Text style={{ color: "white" }}>sadasdas</Text>
          </PageLine>
        )}
      </Line>
      <Line>
        {isCurent ? <CurrentPageLine></CurrentPageLine> : <PageLine></PageLine>}
      </Line>
      <Line>
        {isCurent ? <CurrentPageLine></CurrentPageLine> : <PageLine></PageLine>}
      </Line>
    </Container>
  );
};

export default Pagination;
