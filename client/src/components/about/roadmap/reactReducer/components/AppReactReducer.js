import { useContext, useEffect, useCallback } from "react";
import { SeatContext } from "./SeatContext";
import TicketWidget from "./TicketWidget";
import PurchaseModal from "./PurchaseModal";
import styled from "styled-components";

const AppReactContext = () => {
  const {
    actions: { receiveSeatInfoFromServer },
  } = useContext(SeatContext);

  const fetchDataAndReceiveSeatInfo = useCallback(async () => {
    try {
      const response = await fetch(
        "https://roy-portfolio-server.onrender.com/api/seat-availability"
      );
      const data = await response.json();
      receiveSeatInfoFromServer(data);
    } catch (error) {
      console.error("Error fetching seat info:", error);
    }
  }, [receiveSeatInfoFromServer]);

  useEffect(() => {
    fetchDataAndReceiveSeatInfo();
  }, [fetchDataAndReceiveSeatInfo]);

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
