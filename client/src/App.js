import Header from "./components/Header";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import TransitionComponent from "./components/TransitionComponent";
import About from "./components/About";
import bg from "./assets/BG1.webp";
import bgLight from "./assets/5243451.webp";
import { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "./components/contexts/ColorTheme";
import "./scroll.css";
import NyanCat from "./components/about/roadmap/NyanCat";
import gsap from "gsap";
import RoadMapControllerWrapper from "./components/about/RoadMapControllerWrapper";
import Projects from "./components/projects/Projects";
import AppECommerce from "./components/projects/eCommerce/AppECommerce";
import Signup from "./components/projects/eCommerce/auth/Signup";
import Login from "./components/projects/eCommerce/auth/Login";
import AllProducts from "./components/projects/eCommerce/AllProducts";
import ProductDetails from "./components/projects/eCommerce/ProductDetails";
import Category from "./components/projects/eCommerce/Category";
import Brands from "./components/projects/eCommerce/Brands";
import Brand from "./components/projects/eCommerce/Brand";
import Checkout from "./components/projects/eCommerce/Checkout";
import Confirmation from "./components/projects/eCommerce/Confirmation";
import Error from "./components/projects/eCommerce/Error";
import { UserContext } from "./components/projects/eCommerce/UserContext";
import Spinner from "./components/projects/eCommerce/loaders/Spinner";
import HeaderECommerce from "./components/projects/eCommerce/HeaderECommerce";
import HomePageECommerce from "./components/projects/eCommerce/HomePageECommerce";
import Overlay from "./components/projects/eCommerce/utils/overlay";
import Overlay2 from "./components/projects/eCommerce/auth/Overlay";
import Cart from "./components/projects/eCommerce/Cart";
import Profile from "./components/projects/eCommerce/auth/Profile";
import AppBarbershop from "./components/projects/barbershop/components/AppBarbershop";
import { UserProvider } from "./components/projects/barbershop/components/contexts/UserContext";
import { ReservationProvider } from "./components/projects/barbershop/components/contexts/ReservationContext";
import { ServicesProvider } from "./components/projects/barbershop/components/contexts/ServicesContext";
import { NotificationProvider } from "./components/projects/barbershop/components/contexts/NotficationContext";
import { ClientsProvider } from "./components/projects/barbershop/components/contexts/ClientsContext";
import Contact from "./components/Contact.js";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const bgImageRef = useRef(null);
  const bgImageLightRef = useRef(null);
  const {
    state: { user },
    actions: { storeUser },
  } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname.includes("/projects/eCommerce")) {
      if (
        !user &&
        document.cookie.length &&
        document.cookie.includes("userToken")
      ) {
        setIsLoading(true);
        if (document.cookie) {
          const token = document.cookie.split("userToken=")[1].split(";")[0];
          fetch(`https://roy-portfolio-server.onrender.com/api/user/${token}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.status === 200) {
                storeUser({ user: data.user });
                setIsLoading(false);
              }
            })
            .catch(() => {
              navigate("/projects/eCommerce/404");
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    }
  }, [navigate, storeUser, user, location.pathname]);

  let bgImageDarkRef = useRef(null);
  let bgImageSecondLightRef = useRef(null);
  let bgImageThirdLightRef = useRef(null);

  const Redirector = (is, Route, to) => {
    if (is) {
      return Route;
    }
    return <Navigate to={to} />;
  };

  useEffect(() => {
    if (
      !location.pathname.includes("/projects/eCommerce") &&
      !location.pathname.includes("/projects/hollywoodBarberShop")
    ) {
      const bgAnimation = gsap.to(bgImageRef.current, {
        x: "100%",
        duration: 140,
        repeat: -1,
        ease: "linear",
      });

      const bgDarkAnimation = gsap.to(bgImageDarkRef.current, {
        x: "100%",
        duration: 140,
        repeat: -1,
        ease: "linear",
      });

      const bgLightAnimation = gsap.to(bgImageLightRef.current, {
        x: "200%",
        duration: 200,
        repeat: -1,
        ease: "linear",
      });

      const bgSecondLightAnimation = gsap.to(bgImageSecondLightRef.current, {
        x: "200%",
        duration: 200,
        repeat: -1,
        ease: "linear",
      });

      const bgThirdLightAnimation = gsap.to(bgImageThirdLightRef.current, {
        x: "200%",
        duration: 200,
        repeat: -1,
        ease: "linear",
      });

      return () => {
        // Stop the animations when the component is unmounted
        bgAnimation.kill();
        bgLightAnimation.kill();
        bgDarkAnimation.kill();
        bgSecondLightAnimation.kill();
        bgThirdLightAnimation.kill();
      };
    }
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper theme={theme}>
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <Header />
        )}
      {location.pathname.includes("/projects/eCommerce") &&
        location.pathname !== "/projects/eCommerce/login" &&
        location.pathname !== "/projects/eCommerce/signup" && (
          <HeaderECommerce
            isCart={isCart}
            setIsCart={setIsCart}
            setShowProfile={setShowProfile}
          />
        )}
      {location.pathname.includes("/projects/eCommerce") && (
        <Cart isCart={isCart} setIsCart={setIsCart} />
      )}
      {location.pathname.includes("/projects/eCommerce") && (
        <Profile showProfile={showProfile} setShowProfile={setShowProfile} />
      )}
      {isCart && <Overlay setIsCart={setIsCart} />}
      {showProfile && <Overlay2 setShowProfile={setShowProfile} />}
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <BgImage
            src={bg}
            ref={bgImageRef}
            theme={theme}
            fetchpriority="high"
            alt="stary night"
          />
        )}
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <BgImageDark
            fetchpriority="high"
            src={bg}
            ref={bgImageDarkRef}
            theme={theme}
            alt="stary night"
          />
        )}
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <BGImageLight
            ref={bgImageLightRef}
            src={bgLight}
            theme={theme}
            alt="light sky"
          />
        )}
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <BGImageSecondLight
            alt="light sky"
            ref={bgImageSecondLightRef}
            src={bgLight}
            theme={theme}
          />
        )}
      {!location.pathname.includes("/projects/eCommerce") &&
        !location.pathname.includes("/projects/hollywoodBarberShop") && (
          <BGImageThirdLight
            alt="light sky"
            ref={bgImageThirdLightRef}
            src={bgLight}
            theme={theme}
          />
        )}
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <HomePage />
            </TransitionComponent>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionComponent>
              <About />
            </TransitionComponent>
          }
        />
        <Route
          path="/nyan-pizza"
          element={
            <TransitionComponent>
              <NyanCat />
            </TransitionComponent>
          }
        />
        <Route
          path="/roadmap"
          element={
            <TransitionComponent>
              <RoadMapControllerWrapper />
            </TransitionComponent>
          }
        />
        <Route
          path="/projects"
          element={
            <TransitionComponent>
              <Projects />
            </TransitionComponent>
          }
        />
        <Route
          path="/projects/ecommerce/*"
          element={
            <TransitionComponent>
              <AppECommerce />
            </TransitionComponent>
          }
        />
        <Route
          path="/contact"
          element={
            <TransitionComponent>
              <Contact />
            </TransitionComponent>
          }
        />

        <Route
          path="/projects/eCommerce/signup"
          element={Redirector(!user, <Signup />, "/projects/eCommerce")}
        />
        <Route
          path="/projects/eCommerce/login"
          element={Redirector(!user, <Login />, "/projects/eCommerce")}
        />
        <Route
          path="/projects/eCommerce"
          element={Redirector(
            user,
            <HomePageECommerce />,
            "/projects/eCommerce/login"
          )}
        />
        <Route
          path="/projects/eCommerce/products/allProducts"
          element={Redirector(user, <AllProducts />)}
        />
        <Route
          path="/projects/eCommerce/products/:productId"
          element={Redirector(user, <ProductDetails />)}
        />
        <Route
          path="/projects/eCommerce/categories/:category"
          element={Redirector(user, <Category />)}
        />
        <Route
          path="/projects/eCommerce/brands"
          element={Redirector(user, <Brands />)}
        />
        <Route
          path="/projects/eCommerce/brands/:brandId"
          element={Redirector(user, <Brand />)}
        />
        <Route
          path="/projects/eCommerce/checkout"
          element={Redirector(user, <Checkout />)}
        />
        <Route
          path="/projects/eCommerce/order/:orderId"
          element={Redirector(user, <Confirmation />)}
        />
        <Route path="/projects/eCommerce/404" element={<Error />} />
        <Route
          path="/projects/hollywoodBarberShop/*"
          element={
            <UserProvider>
              <ReservationProvider>
                <ServicesProvider>
                  <NotificationProvider>
                    <ClientsProvider>
                      <AppBarbershop></AppBarbershop>
                    </ClientsProvider>
                  </NotificationProvider>
                </ServicesProvider>
              </ReservationProvider>
            </UserProvider>
          }
        />
      </Routes>
    </Wrapper>
  );
};

const BgImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(0.5);
  ${({ theme }) => theme === "light" && `display: none;`};
  @media (max-width: 768px) {
    object-fit: cover;
    height: 100%;
  }
`;
const Wrapper = styled.div``;
const BGImageLight = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(1.15);
  ${({ theme }) => theme === "dark" && `display: none;`};
  @media (max-width: 768px) {
    object-fit: cover;
    height: 100%;
  }
`;
const BgImageDark = styled.img`
  position: fixed;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(0.5);
  transform: scaleX(1.01);
  ${({ theme }) => theme === "light" && `display: none;`};
  @media (max-width: 768px) {
    object-fit: cover;
    height: 100%;
  }
`;
const BGImageSecondLight = styled.img`
  position: fixed;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: rotateY(180deg);
  filter: brightness(1.15);
  ${({ theme }) => theme === "dark" && `display: none;`};
  @media (max-width: 768px) {
    object-fit: cover;
    height: 100%;
  }
`;

const BGImageThirdLight = styled.img`
  position: fixed;
  left: -200%;
  top: 0;
  width: 100%;
  height: 100vh;
  filter: brightness(1.15);
  ${({ theme }) => theme === "dark" && `display: none;`};
  @media (max-width: 768px) {
    object-fit: cover;
    height: 100%;
  }
`;
export default App;
