import React from "react";
import { DotWave } from "@uiball/loaders";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function Loader() {
  return (
    <FlexWrapper>
      <DotWave size={47} speed={1} color="red" />
    </FlexWrapper>
  );
}

export default Loader;
