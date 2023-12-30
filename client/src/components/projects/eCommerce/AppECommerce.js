import { useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Footer from "./Footer";
// import HomePage from "./HomePage";
// import ProductDetails from "./ProductDetails";
import Overlay from "./utils/overlay";
// import Category from "./Category";
// import Error from "./Error";
// // import PageNotFound from "./PageNotFound";
// import Brands from "./Brands";
// import Brand from "./Brand";
// import AllProducts from "./AllProducts";
// import Checkout from "./Checkout";
// import Confirmation from "./Confirmation";
// import Signup from "./auth/Signup";
// import Login from "./auth/Login";
// import { UserContext } from "./UserContext";
import Profile from "./auth/Profile";
// import Spinner from "./loaders/Spinner";
import Overlay2 from "./auth/Overlay";
import HeaderECommerce from "./HeaderECommerce";

const AppECommerce = () => {
  const [isCart, setIsCart] = useState(false);
  const [showProfile, setShowProfile] = useState();

  return (
    <ContainerAll>
      <Cart isCart={isCart} setIsCart={setIsCart} />
      <Profile showProfile={showProfile} setShowProfile={setShowProfile} />
      {isCart && <Overlay setIsCart={setIsCart} />}
      {showProfile && <Overlay2 setShowProfile={setShowProfile} />}
      <HeaderECommerce setIsCart={setIsCart} setShowProfile={setShowProfile} />
      <Profile />
      <Footer />
    </ContainerAll>
  );
};

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
// const Main = styled.main`
//   display: flex;
//   justify-content: center;
//   padding-top: 10rem;
// `;
export default AppECommerce;
