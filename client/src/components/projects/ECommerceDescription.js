import { ProjectCard, Title } from "./Projects";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState, useContext } from "react";
import ThemeContext from "../contexts/ColorTheme";
import eCommerceBg from "../../assets/ECommerce.png";
import gsap, { TimelineLite } from "gsap";
const ECommerceDescription = ({
  eCommerceRef,
  guitarRef,
  hollywoodRef,
  demoRef,
  descriptionRef,
  hoverEffect,
  unHoverEffect,
}) => {
  const [animationStatus, setAnimationStatus] = useState("notInProgress");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [showDemo, setShowDemo] = useState(false);
  const animateDescription = (descriptionRef) => {
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    descriptionRef.current &&
      tl.fromTo(
        descriptionRef.current,
        { opacity: "0" },
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: "1",
          duration: 1,
          delay: 1,
        }
      );
  };
  useEffect(() => {
    animateDescription(descriptionRef);
  }, [showDemo, descriptionRef]);

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
      { x: "0", opacity: "1" },
      {
        x: "200%",
        opacity: "0",
        zIndex: "-1",
        scale: "3",
        duration: 0.4,
      }
    );
  };
  const unanimateShowDescription = (refClicked, otherRef, orhterOtherRef) => {
    setAnimationStatus("inProgress");
    setTimeout(() => {
      setAnimationStatus("notInProgress");
    }, 2000);
    gsap.registerPlugin(TimelineLite);
    const tl = new TimelineLite();
    tl.fromTo(
      refClicked.current,
      { x: "100%", opacity: "0" },
      {
        x: "0",
        opacity: "1",
        zIndex: "1",
        scale: "1",
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
          <Title
            style={{
              width: "100%",
              height: "10%",
              fontSize: "2rem",
              color: "#a742bc",
            }}
          >
            E-Commerce (Group Project)
          </Title>
          <Wrapper theme={theme}>
            <Description>
              <InfoCard>
                <CardTitle>About The Data</CardTitle>
                <p
                  style={{
                    color: "yellow",
                    marginLeft: "20px",
                    marginRight: "20px",
                    fontWeight: "600",
                    opacity: "0.8",
                  }}
                >
                  Company Object
                </p>
                <p
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  &#123;
                  <br /> name: "Barska",
                  <br />
                  url: "http://www.barska.com/",
                  <br />
                  country: "United States",
                  <br />
                  id: 19962,
                  <br />
                  &#125;
                </p>

                <p
                  style={{
                    color: "yellow",
                    marginLeft: "20px",
                    marginRight: "20px",
                    fontWeight: "600",
                    opacity: "0.8",
                  }}
                >
                  Item Object
                </p>
                <p style={{ marginLeft: "20px", marginRight: "20px" }}>
                  &#123; <br /> "name": "Barska GB12166 Fitness Watch with Heart
                  Rate Monitor",
                  <br />
                  "price": "$49.99",
                  <br />
                  "body_location": "Wrist",
                  <br />
                  "category": "Fitness",
                  <br />
                  "id": 6543,
                  <br />
                  "imageSrc": "data:*actual imageSrc*",
                  <br />
                  "numInStock": 9,
                  <br />
                  "companyId": 19962
                  <br />
                  &#125;
                </p>
              </InfoCard>

              <InfoCard>
                <CardTitle>Backend Requirements</CardTitle>
                <List>
                  <li>
                    Be RESTful (use the right method for the right job and hold
                    nothing in memory).
                  </li>
                  <li>
                    Provide the FE with the required data in a clear and
                    organized way.
                  </li>
                  <li>Update the database as users make purchases.</li>
                </List>
              </InfoCard>
              <InfoCard>
                <CardTitle>Frontend Requirements</CardTitle>
                <p
                  style={{
                    marginLeft: "20px",
                    fontWeight: "600",
                    opacity: "0.7",
                  }}
                >
                  Users should be able to:
                </p>
                <List>
                  <li>View all items in the database.</li>
                  <li>Purchase items that are in stock.</li>
                  <li>
                    View their cart containing the items they intend to
                    purchase.
                  </li>
                  <li>Edit the cart before completing the purchase.</li>
                </List>
              </InfoCard>
              <InfoCard>
                <CardTitle>Project Requirements</CardTitle>
                <List>
                  <li>
                    Attendance to the daily stand-ups conducted by your PM.
                  </li>
                  <li>
                    A Trello board to divide up the tasks (other similar sites
                    are fine too).
                  </li>
                  <li>
                    A group chat or new private discord server for your team and
                    your PM.
                  </li>
                </List>
              </InfoCard>
            </Description>
          </Wrapper>
          <BackButton
            onClick={() => {
              unanimateShowDescription(
                eCommerceRef,
                guitarRef,
                hollywoodRef,
                demoRef
              );
              setShowDemo(false);
            }}
          ></BackButton>
          <DemoButton
            onClick={() => {
              navigate("/projects/eCommerce");
            }}
          >
            Demo
          </DemoButton>
        </Container>
      )}
      <ProjectCard
        key={"eCommerceProject"}
        ref={eCommerceRef}
        onMouseEnter={() => {
          animationStatus === "notInProgress" && hoverEffect(eCommerceRef);
        }}
        onMouseLeave={() => {
          animationStatus === "notInProgress" && unHoverEffect(eCommerceRef);
        }}
        onClick={() => {
          animateShowDescription(
            eCommerceRef,
            guitarRef,
            hollywoodRef,
            demoRef
          );
          setShowDemo(true);
        }}
      >
        <Title>E-Commerce (Group Project)</Title>
        <BgImage src={eCommerceBg} alt="screenshot of the project" />
      </ProjectCard>
    </div>
  );
};
export const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 1;
`;

export const BackButton = styled(IoMdArrowRoundBack)`
  position: absolute;
  top: 1%;
  left: 5%;
  font-size: 4rem;
  color: white;
  z-index: 200;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  position: absolute;
  top: 13vh;
  overflow-y: hidden;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme === "light"
      ? "rgba(255,255,255,0.7)"
      : "rgba(255,255,255, 0.9)"};
  z-index: 1;
`;

const Description = styled.div`
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 5%;
  position: relative;
  left: 5%;
  top: 15%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InfoCard = styled.div`
  width: 95%;
  height: 70%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 10px 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    height: 80%;
    position: relative;
    transform: translateY(-5%);
    box-shadow: 0 0 10px 0px #50196f;
  }

  &:nth-child(1) {
    grid-row: 2 span;
    height: 80%;
    &:hover {
      height: 85%;
      transform: translateY(-2.5%);
    }
  }
  &:nth-child(2) {
    grid-row: 1 span;
    height: 70%;
    transform: translateY(-5%);
    &:hover {
      height: 80%;
      transform: translateY(-10%);
    }
  }
  &:nth-child(3) {
    grid-row: 2 span;
    height: 80%;
    &:hover {
      height: 85%;
      transform: translateY(-2.5%);
    }
  }
  &:nth-child(4) {
    grid-row: 1 span;
    height: 70%;
    transform: translateY(-5%);
    &:hover {
      height: 80%;
      transform: translateY(-10%);
    }
  }
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
  text-align: center;
  color: #a742bc;
  width: 100%;
`;
export const List = styled.ul`
  list-style: circle;
  line-height: 1.5rem;
  width: 80%;
  position: relative;
  left: 1%;
  font-size: 1.2rem;
`;
export const DemoButton = styled.button`
  position: absolute;
  right: 5%;
  top: 2%;
  z-index: 200;
  width: 10%;
  height: 5%;
  background-color: #f56a79;
  border: 2px solid white;
  border-radius: 30px;
  box-shadow: rgba(255, 255, 255, 0.6) 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
  }
  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export default ECommerceDescription;
