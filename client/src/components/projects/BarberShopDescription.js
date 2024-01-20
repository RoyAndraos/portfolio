import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../contexts/ColorTheme";
import {
  BackButton,
  DemoButton,
  Container,
  BgImage,
  Wrapper,
  CardTitle,
  List,
} from "./ECommerceDescription";
import gsap, { TimelineLite } from "gsap";
import { Title, ProjectCard } from "./Projects";
import barberShopSrc from "../../assets/barbershopSS.png";
import styled from "styled-components";
const BarberShopDescription = ({
  eCommerceRef,
  guitarRef,
  hollywoodRef,
  demoRef,
  descriptionRef,
  hoverEffect,
  unHoverEffect,
  isMobile,
}) => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [animationStatus, setAnimationStatus] = useState("notInProgress");

  //Animation funtion for the description, mobile version
  const animateDescriptionMobile = (descriptionRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    descriptionRef.current &&
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: "0",
          position: "absolute",
          top: "0",
          left: "0",
        },
        {
          opacity: "1",
          duration: 1,
          delay: 1,
        }
      );
  };
  // Animation funtion for the description, desktop version
  const animateDescription = (descriptionRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    descriptionRef.current &&
      tl.fromTo(
        descriptionRef.current,
        {
          opacity: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
        {
          opacity: "1",
          duration: 1,
          delay: 1,
        }
      );
  };
  useEffect(() => {
    isMobile
      ? animateDescriptionMobile(descriptionRef)
      : animateDescription(descriptionRef);
  }, [showDemo, descriptionRef, isMobile]);

  //Animation funtion for the project Card, desktop version
  const animateShowDescription = (
    refClicked,
    secondProjCard,
    thirdProjCard
  ) => {
    setAnimationStatus("inProgress");
    setTimeout(() => {
      setAnimationStatus("notInProgress");
    }, 2000);
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      thirdProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      secondProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      refClicked.current,
      { opacity: "1" },
      {
        opacity: "0",
        zIndex: "-1",
        scale: "3",
        duration: 0.4,
        x: "-100%",
      }
    );
  };

  //Animation funtion for the closing of project Card, desktop version
  const unanimateShowDescription = (refClicked, otherRef, orhterOtherRef) => {
    setAnimationStatus("inProgress");
    setTimeout(() => {
      setAnimationStatus("notInProgress");
    }, 2000);
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { opacity: "0" },
      {
        opacity: "1",
        zIndex: "0",
        scale: "1",
        x: "0",
        duration: 0.4,
      }
    );
    tl.fromTo(
      otherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
    tl.fromTo(
      orhterOtherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
  };
  // Animation funtion for the project Card, mobile version
  const animateShowDescriptionMobile = (
    refClicked,
    secondProjCard,
    thirdProjCard
  ) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      thirdProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      secondProjCard.current,
      { opacity: "1", y: "0" },
      {
        y: "100%",
        opacity: "0",
        zIndex: "-1",
        duration: 0.2,
      }
    );
    tl.fromTo(
      refClicked.current,
      { opacity: "1" },
      {
        opacity: "0",
        zIndex: "-1",
        scale: "2",
        duration: 0.4,
        y: "-300%",
      }
    );
  };

  //Animation funtion for the closing of project Card, mobile version
  const unanimateShowDescriptionMobile = (
    refClicked,
    otherRef,
    orhterOtherRef
  ) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { opacity: "0" },
      {
        opacity: "1",
        zIndex: "0",
        scale: "1",
        y: "0",
        duration: 0.4,
      }
    );
    tl.fromTo(
      otherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
    tl.fromTo(
      orhterOtherRef.current,
      { y: "100%", opacity: "0" },
      { y: "0", opacity: "1", zIndex: "1", duration: 0.2 }
    );
  };

  return (
    <div>
      {showDemo && (
        <Container ref={descriptionRef}>
          {isMobile ? (
            <Title
              style={{
                width: "95%",
                height: "10vh",
                position: "fixed",
              }}
            ></Title>
          ) : (
            <Title
              style={{
                width: "95%",
                height: "10vh",
                position: "fixed",
              }}
            >
              Hollywood Barber Shop
            </Title>
          )}

          <Wrapper theme={theme}>
            <InfoWrapper>
              <InfoCard>
                <CardTitle>Requirements</CardTitle>
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                    color: "yellow",
                  }}
                >
                  Client Side
                </p>
                <List>
                  <p style={{ marginLeft: "20px", marginRight: "20px" }}>
                    Users should be able to:
                  </p>
                  <li>
                    Check all the relevant information, such as services
                    offered, the barbers, the shop's story as well as all the
                    links (socials, location and contact info).
                  </li>
                  <li>Book an appointment and recieve a confirmation email.</li>
                </List>
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                    color: "yellow",
                  }}
                >
                  Admin Side
                </p>

                <List>
                  <p style={{ marginLeft: "20px", marginRight: "20px" }}>
                    Admins (barbers) should be able to:
                  </p>
                  <li>
                    View their reservations on the calendar and edit/cancel them
                    if needed.
                  </li>
                  <li>Make a new reservation.</li>
                  <li>
                    Change their weekly availability (make slots available to
                    book or vice versa)
                  </li>
                  <li>
                    Take time off (make a specific day or more unavailable)
                  </li>
                  <li>
                    Edit their profile (which is shown on the client side)
                  </li>
                  <li>Edit text or images that are shown on the client side</li>
                  <li>Edit their services (names, prices, duration etc...)</li>
                </List>
              </InfoCard>
              <InfoCard style={{ overflowY: "scroll" }}>
                <CardTitle>Admin Side</CardTitle>{" "}
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                    color: "yellow",
                  }}
                >
                  Schedule
                </p>
                <List>
                  <li>
                    Calendar, <br />
                    Display all the reservations made, and allow the barber to
                    click on reservations to edit or delete them.
                  </li>
                  <li>Reservation Form.</li>
                </List>
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                    color: "yellow",
                  }}
                >
                  Availability
                </p>
                <List>
                  <li>
                    Availability Grid, <br />
                    Barbers can click on slots to toggle them from available to
                    unavailable and vice versa.
                  </li>
                  <li>
                    Time Off, <br />
                    Barbers will select start date and end date to make every
                    slot in between unavailable to book.
                  </li>
                </List>
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                    color: "yellow",
                  }}
                >
                  Tools
                </p>
                <List>
                  <li>
                    Profile, <br />
                    Barbers can add, delete or edit their profile (name,
                    picture, description).
                  </li>
                  <li>
                    Services, <br />
                    Barbers can add, delete or edit their services (name, price,
                    duration).
                  </li>
                  <li>
                    Text/Images, <br />
                    Barbers can edit the text/images that is shown on the client
                    side.
                  </li>
                  <li>
                    Clients, <br />
                    Barbers can view/edit/delete all the clients that have
                    previously booked with them. (name, email, phone number)
                  </li>
                </List>
              </InfoCard>
              <InfoCard>
                <CardTitle>Client Side</CardTitle>
                <List>
                  <li>
                    Built a single page showcasing all 3 sections (Menu, About,
                    Barbers) with a slideshow as the landing page.
                  </li>
                  <li>
                    Any "Book" button will navigate the user to the first step
                    of the booking, "Personal Information Form".
                  </li>
                  <li>
                    "Next Step" button will then validate the data and navigate
                    the user to the "Booking Form".
                  </li>
                  <li>
                    "Submit" button will then validate the data and navigate the
                    user to the "Confirmation" page, where all the information
                    will be displayed .
                  </li>
                  <li>
                    Users will also recieve a confirmation email with all said
                    information.
                  </li>
                </List>
              </InfoCard>
            </InfoWrapper>
          </Wrapper>
          <BackButton
            onClick={() => {
              isMobile
                ? unanimateShowDescriptionMobile(
                    hollywoodRef,
                    guitarRef,
                    eCommerceRef
                  )
                : unanimateShowDescription(
                    hollywoodRef,
                    guitarRef,
                    eCommerceRef
                  );
              setShowDemo(false);
            }}
          ></BackButton>
          <DemoButton
            onClick={() => {
              isMobile
                ? window.alert("Available only on desktop")
                : navigate("/projects/hollywoodBarberShop/schedule");
            }}
          >
            Demo
          </DemoButton>
        </Container>
      )}

      <ProjectCard
        key={"hollywoodProject"}
        ref={hollywoodRef}
        onMouseEnter={() => {
          animationStatus === "notInProgress" && hoverEffect(hollywoodRef);
        }}
        onMouseLeave={() => {
          animationStatus === "notInProgress" && unHoverEffect(hollywoodRef);
        }}
        onClick={() => {
          isMobile
            ? animateShowDescriptionMobile(
                hollywoodRef,
                eCommerceRef,
                guitarRef
              )
            : animateShowDescription(hollywoodRef, eCommerceRef, guitarRef);
          setShowDemo(true);
        }}
      >
        <Title>Hollywood Barber Shop</Title>
        <BgImage src={barberShopSrc} alt="screenshot of the project" />
      </ProjectCard>
    </div>
  );
};

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 80%;
  position: relative;
  top: 58%;
  left: 50%;
  transform: translateX(-50%) translateY(-35%);
  column-gap: 3%;
  row-gap: 3%;
  width: 90%;
  height: 100%;
  padding-left: 3%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 14vh;
    left: 0;
    width: 90%;
    gap: 2vh;
    transform: translateX(2.5%) translateY(0);
    padding-bottom: 16vh;
  }
`;
const InfoCard = styled.div`
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 10px 0;
  transition: 0.3s ease-in-out;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    height: 105%;
    position: relative;
    transform: translateY(-13%);
    box-shadow: 0 0 10px 0px #50196f;
  }
`;

export default BarberShopDescription;
