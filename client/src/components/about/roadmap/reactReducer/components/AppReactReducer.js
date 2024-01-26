import { useContext, useEffect } from "react";
import { SeatContext } from "./SeatContext";
import TicketWidget from "./TicketWidget";
import PurchaseModal from "./PurchaseModal";
import styled from "styled-components";

const AppReactContext = () => {
  const {
    actions: { receiveSeatInfoFromServer },
  } = useContext(SeatContext);

  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);

  return (
    <Wrapper>
      <TicketWidget />
      <PurchaseModal />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AppReactContext;
