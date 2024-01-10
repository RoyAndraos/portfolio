import React, { useState } from "react";

import BarberProfiles from "./barber_profiles/BarberProfiles";
import ToolBar from "./ToolBar";
import styled from "styled-components";

import Clients from "./clients/Clients";

import Services from "./services/Services";
import WebsiteText from "./WebsiteText";

const WebsiteTools = () => {
  const [selectedOption, setSelectedOption] = useState("barberProfiles");

  return (
    <Wrapper>
      <ToolBar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div style={{ position: "relative" }}>
        <RestWrapper>
          {selectedOption === "barberProfiles" && <BarberProfiles />}
          {selectedOption === "clients" && <Clients />}
          {selectedOption === "services" && <Services />}
          {selectedOption === "websiteText" && <WebsiteText />}
          {selectedOption === "images" && <WebsiteText />}
        </RestWrapper>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 95vw;
  position: relative;
`;

const RestWrapper = styled.div`
  width: 80%;
  position: absolute;

  right: -2%;
`;

export default WebsiteTools;
