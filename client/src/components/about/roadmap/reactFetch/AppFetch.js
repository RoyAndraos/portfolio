import HeaderFetch from "./HeaderFetch";
import HomepageFetch from "./HomepageFetch";
import PizzaDetailsFetch from "./PizzaDetailsFetch";
import OrderFetch from "./OrderFetch";
import { useState } from "react";
import { useEffect } from "react";
import OrderConfirmedFetch from "./OrderConfirmedFetch";
import styled from "styled-components";

const AppFetch = () => {
  const [menu, setMenu] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState("/");
  const [orderId, setOrderId] = useState(null);
  const [pizzaId, setPizzaId] = useState(null);
  useEffect(() => {
    fetch("https://roy-portfolio-server.onrender.com/menu")
      .then((res) => res.json())
      .then((result) => setMenu(result.data));
  }, []);

  if (!menu) {
    return <p>...Loading</p>;
  }
  return (
    <Wrapper>
      <HeaderFetch
        setSelectedRoute={setSelectedRoute}
        selectedRoute={selectedRoute}
      />
      {selectedRoute === "/" && (
        <HomepageFetch
          menu={menu}
          setMenu={setMenu}
          setPizzaId={setPizzaId}
          setSelectedRoute={setSelectedRoute}
        />
      )}

      {selectedRoute === "/order" && (
        <OrderFetch
          menu={menu}
          setMenu={setMenu}
          setSelectedRoute={setSelectedRoute}
          setOrderId={setOrderId}
        />
      )}
      {selectedRoute === "/menu/pizza" && (
        <PizzaDetailsFetch
          pizzaId={pizzaId}
          setSelectedRoute={setSelectedRoute}
        />
      )}
      {selectedRoute === "/confirm" && (
        <OrderConfirmedFetch orderId={orderId} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  z-index: 990;
  display: flex;
  flex-direction: column;
`;
export default AppFetch;
