import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../contexts/ColorTheme";
import guitarBg from "../../assets/GuitarSheetWriterBg.png";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import {
  Collapse,
  CollapseWrapper,
  TitleImgWrap,
} from "./BarberShopDescription";
import { LinkToWebsite } from "./Vblack";
import gsap from "gsap";
import { AnimationWrap } from "./PixSnap";
const GuitarDescription = ({ collapsed, setCollapsed, isMobile }) => {
  const { theme } = useContext(ThemeContext);

  const collapseRef = useRef(null);
  const expandRef = useRef(null);
  useEffect(() => {
    if (collapsed.guitar) {
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
  }, [collapsed.guitar]);

  //when collapse is pressed, animate the collapse
  const animateCollapse = () => {
    gsap.to(collapseRef.current, {
      duration: 0.5,
      maxHeight: "0",
      minHeight: "8vh",
      opacity: 0,
    });
    //wait 0.5 seconds before setting the collapse state to true
    setTimeout(() => {
      setCollapsed({ ...collapsed, guitar: true });
    }, 500);
  };
  const animateExpand = () => {
    gsap.to(expandRef.current, {
      duration: 0.5,
      maxHeight: "70vh",
      minHeight: "40vh",
      opacity: 0,
      onComplete: () => {
        setCollapsed({ ...collapsed, guitar: false });
      },
    });
  };

  return (
    <Container
      $theme={theme}
      style={{
        borderBottom:
          theme === "dark" ? "3px solid #a742bc" : "3px solid #50196f",
      }}
    >
      {collapsed.guitar ? (
        <CollapseWrapper ref={expandRef}>
          <Title $theme={theme}>
            Guitar Sheet Writer{" "}
            <Collapse $theme={theme} onClick={() => animateExpand()}>
              <FaAngleDown />{" "}
            </Collapse>
          </Title>
          <CardTitle $theme={theme}>
            {!isMobile ? "March 2023 - May 2023" : "Mar - May 2023"}
          </CardTitle>
          <LinkToWebsite $theme={theme} href="https://youtu.be/kmPUFGyACNc">
            Demo (video)
          </LinkToWebsite>
        </CollapseWrapper>
      ) : (
        <AnimationWrap ref={collapseRef}>
          <TitleImgWrap>
            <div>
              <Title $theme={theme}>
                Guitar Sheet Writer
                <Collapse $theme={theme} onClick={() => animateCollapse()}>
                  <FaAngleUp />{" "}
                </Collapse>
              </Title>
              {isMobile && (
                <a
                  href="https://youtu.be/kmPUFGyACNc"
                  style={{ width: "100%" }}
                >
                  <StyledImage
                    src={guitarBg}
                    alt="guitar sheet writer Landing page"
                  />
                </a>
              )}
              <div>
                <CardTitle $theme={theme}>Project Overview</CardTitle>
                <p>
                  Guitar Sheet Writer is a full-stack web application that
                  bridges technology and music, designed for guitar enthusiasts
                  to effortlessly create, edit, and share their music sheets.
                  With the help of MongoDB, a custom-built REST API, and the Web
                  Audio API, this application provides a seamless experience for
                  musicians, whether they are casual hobbyists or serious
                  composers.
                </p>
              </div>
            </div>
            {!isMobile && (
              <a href="https://youtu.be/kmPUFGyACNc" style={{ width: "100%" }}>
                <StyledImage
                  style={{ width: "100%" }}
                  src={guitarBg}
                  alt="guitar sheet writer Landing page"
                />
              </a>
            )}
          </TitleImgWrap>

          <div>
            <div>
              <CardTitle $theme={theme}>Key Features</CardTitle>
              <ul>
                <li>Real-Time Guitar-to-Sheet Conversion</li>
                Leveraging a custom pitch detection algorithm, the application
                listens to the guitar in real time and translates frequencies
                into notes displayed directly on a digital music sheet.
                <li>No Sign-Up? No Problem!</li>
                Users can immediately start creating music sheets without
                signing up. For those who want additional benefits—like saving,
                editing, and sharing their sheets—signing up unlocks these
                powerful features.
                <li>User-Centric Design</li>
                The intuitive user interface ensures that even non-technical
                users can dive in and start creating with ease.
              </ul>
            </div>
            <div>
              <CardTitle $theme={theme}>Why This Project?</CardTitle>
              <p>
                Guitar Sheet Writer combines my passion for music and web
                development into a practical solution that empowers guitarists
                to express their creativity. It demonstrates my ability to
                integrate cutting-edge technologies, such as audio processing
                and real-time data handling, into a user-focused application.
              </p>
            </div>
            <div>
              Checkout my presentation of the project and see how it works{" "}
              <a
                style={{ textDecoration: "none", color: "#a742bc" }}
                href="https://youtu.be/kmPUFGyACNc"
              >
                Guitar Sheet Writer Demo
              </a>
            </div>
          </div>
        </AnimationWrap>
      )}
    </Container>
  );
};

export const Container = styled.div`
  position: relative;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  width: 90%;
  display: flex;
  gap: 5vw;
  justify-content: center;
  align-items: flex-start;
  border-top: ${(props) =>
    props.$theme === "dark" ? "3px solid #a742bc" : "3px solid #50196f"};
  padding: 3% 0;
  p,
  li,
  div {
    color: ${(props) => (props.$theme === "dark" ? "whitesmoke" : "black")};
  }
`;
export const StyledImage = styled.img`
  width: 35%;
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
export const Title = styled.h1`
  color: ${(props) => (props.$theme === "dark" ? "#a742bc" : "#50196f")};
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const CardTitle = styled.h2`
  color: ${(props) => (props.$theme === "dark" ? "#cc9849" : "#744600")};
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export default GuitarDescription;
