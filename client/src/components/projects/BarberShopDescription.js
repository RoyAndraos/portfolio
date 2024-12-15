import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../contexts/ColorTheme";
import { CardTitle, Title } from "./GuitarDescription";
import barberShopSrc from "../../assets/barbershopSS.png";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { LinkToWebsite } from "./Vblack";
import { AnimationWrap } from "./PixSnap";
import clientSS from "../../assets/clientSS.png";
import gsap from "gsap";
const BarberShopDescription = ({ collapsed, setCollapsed, isMobile }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const collapseRef = useRef(null);
  const expandRef = useRef(null);

  useEffect(() => {
    if (collapsed.hollywood) {
      gsap.fromTo(
        expandRef.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );
    } else {
      gsap.fromTo(
        collapseRef.current,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );
    }
  }, [collapsed.hollywood]);

  //when collapse is pressed, animate the collapse
  const animateCollapse = () => {
    gsap.to(collapseRef.current, {
      duration: 0.5,
      maxHeight: "0",
      minHeight: "8vh",
      opacity: 0,
      onComplete: () => {
        setCollapsed({ ...collapsed, hollywood: true });
      },
    });
  };
  const animateExpand = () => {
    gsap.to(expandRef.current, {
      duration: 0.5,
      maxHeight: "300vh",
      minHeight: "40vh",
      opacity: 0,
      onComplete: () => {
        setCollapsed({ ...collapsed, hollywood: false });
      },
    });
  };
  return (
    <Container $theme={theme}>
      {collapsed.hollywood ? (
        <CollapseWrapper ref={expandRef}>
          {" "}
          <Title $theme={theme}>
            Hollywood Barber Shop{" "}
            <Collapse $theme={theme} onClick={() => animateExpand()}>
              <FaAngleDown />{" "}
            </Collapse>
          </Title>{" "}
          <CardTitle $theme={theme}>
            {!isMobile ? "May 2023 - April 2024" : " May 2023 - Apr 2024"}
          </CardTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: "5vw",
            }}
          >
            <Button
              $theme={theme}
              onClick={() => {
                navigate("/projects/hollywoodBarberShop/schedule");
              }}
            >
              Demo (admin)
            </Button>
            <LinkToWebsite
              $theme={theme}
              href="https://hollywoodfairmountbarbers.com"
            >
              Visit (client)
            </LinkToWebsite>
          </div>
        </CollapseWrapper>
      ) : (
        <AnimationWrap ref={collapseRef}>
          <TitleImgWrap>
            <div>
              <Title $theme={theme}>
                Hollywood Barber Shop
                <Collapse $theme={theme} onClick={() => animateCollapse()}>
                  <FaAngleUp />{" "}
                </Collapse>
              </Title>
              <CardTitle style={{ marginTop: "5vh" }} $theme={theme}>
                Overview
              </CardTitle>
              <p>
                Hollywood Barber Shop is a modern, full-stack application
                designed to streamline the barber booking experience for both
                clients and barbers. The platform features an intuitive user
                interface and powerful admin tools, making it the perfect
                solution for managing appointments, services, and client
                interactions seamlessly.
              </p>
            </div>
          </TitleImgWrap>
          <CardTitle $theme={theme}>Requirements & Features</CardTitle>
          <RequireWrapper>
            <div>
              <CardTitle style={{ fontSize: "1.2rem" }} $theme={theme}>
                Client Side
              </CardTitle>
              <a href="https://hollywoodfairmountbarbers.com">
                <StyledImage src={clientSS} alt="Hollywood Barber Shop" />
              </a>
              <p>
                <strong>Users can:</strong>
              </p>
              <ul>
                <li>
                  Access detailed information about the shop, including
                  services, barbers’ profiles, and essential links such as
                  social media, location, and contact details.
                </li>
                <li>
                  Book appointments effortlessly and receive automated
                  confirmation messages (or emails soon!).
                </li>
              </ul>
              <p>
                <strong>Booking Flow:</strong>
              </p>
              <ul>
                <li>
                  <strong>Navigation:</strong> A visually engaging featuring
                  four key sections: services, about, barbers, and a booking
                  form.
                </li>
                <li>
                  <strong>Personal Information Form:</strong> Easy-to-complete
                  forms with validation, guiding users step-by-step through the
                  booking process.
                </li>
                <li>
                  <strong>Booking Form & Confirmation:</strong> Users finalize
                  their bookings and are presented with a summary confirmation
                  page and a detailed SMS.
                </li>
              </ul>
            </div>
            <div>
              <CardTitle style={{ fontSize: "1.2rem" }} $theme={theme}>
                Admin Side
              </CardTitle>
              <StyledImage
                src={barberShopSrc}
                alt="Hollywood Barber Shop"
                onClick={() => {
                  navigate("/projects/hollywoodBarberShop/schedule");
                }}
              />
              <p>
                <strong>Barbers can:</strong>
              </p>
              <ul>
                <li>
                  Manage their schedules via an interactive{" "}
                  <strong>calendar</strong>, allowing them to view, edit, or
                  cancel reservations as needed.
                </li>
                <li>
                  Create new reservations directly through a user-friendly form.
                </li>
                <li>
                  Adjust their weekly availability by toggling specific time
                  slots or taking time off using a date range selection.
                </li>
              </ul>
              <p>
                <strong>Tools for Management:</strong>
              </p>
              <ul>
                <li>
                  <strong>Profile Management:</strong> Add, edit, or delete
                  personal profiles (name, picture, and description) displayed
                  to clients.
                </li>
                <li>
                  <strong>Service Customization:</strong> Manage services,
                  including names, prices, and durations, directly from the
                  admin panel.
                </li>
                <li>
                  <strong>Text and Images Editor:</strong> Update the website's
                  client-facing text and imagery to keep the content fresh and
                  relevant.
                </li>
                <li>
                  <strong>Client Database:</strong> Access and manage a database
                  of clients with the ability to view, edit, or delete client
                  details (name, email, phone number).
                </li>
              </ul>
            </div>
          </RequireWrapper>

          <div>
            <p>
              This project is a testament to creating a professional and
              efficient online booking platform that caters to the needs of both
              clients and administrators.
            </p>
            Checkout the demo I built for the admin side{" "}
            <Link
              $theme={theme}
              onClick={() => {
                navigate("/projects/hollywoodBarberShop/schedule");
              }}
            >
              Barbershop Demo
            </Link>
            or visit the client side{" "}
            <RealLink
              href="https://hollywoodfairmountbarbers.com"
              style={{ textDecoration: "none", color: "#a742bc" }}
            >
              here
            </RealLink>
          </div>
        </AnimationWrap>
      )}
    </Container>
  );
};
const StyledImage = styled.img`
  width: 80%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1000px) {
    width: 95%;
  }
`;
const RealLink = styled.a`
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "#50196f")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 1.4rem;
  &:hover {
    color: ${(props) => (props.$theme === "dark" ? "#50196f" : "whitesmoke")};
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const Link = styled.button`
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "#50196f")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 1.4rem;
  &:hover {
    color: ${(props) => (props.$theme === "dark" ? "#50196f" : "whitesmoke")};
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export const Collapse = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "#50196f")};
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export const CollapseWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 100%;
  align-items: baseline;
  min-height: 8vh;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
  }
`;

export const TitleImgWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Container = styled.div`
  position: relative;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  width: 90%;
  display: flex;
  gap: 5vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: ${(props) =>
    props.$theme === "dark" ? "3px solid #a742bc" : "3px solid #50196f"};
  padding: 3% 0;

  p,
  li,
  div {
    color: ${(props) => (props.$theme === "dark" ? "whitesmoke" : "black")};
  }
`;

const RequireWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 5vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 5vh;
  }
`;
export const Button = styled.button`
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "white")};
  background-color: ${(props) =>
    props.$theme === "dark" ? "transparent" : "#50196f"};
  border: ${(props) =>
    props.$theme === "dark" ? "1px solid #a742bc" : "1px solid #50196f"};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 1vh 2vw;
  &:hover {
    background-color: white;
    color: #50196f;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export default BarberShopDescription;
