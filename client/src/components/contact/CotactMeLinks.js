import { useContext, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ThemeContext from "../contexts/ColorTheme";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import gsap from "gsap";
const CotactMeLinks = () => {
  const mailRef = useRef(null);
  const phoneRef = useRef(null);
  const pinRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState([false, false, false]);
  const CopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const hoverEffect = (currentRef, secondElem, thirdElem) => {
    gsap.to(currentRef.current, {
      duration: 0.3,
      scale: 1.2,
    });
    gsap.to(secondElem.current, {
      duration: 0.3,
      scale: 0.9,
      opacity: 0.5,
    });
    gsap.to(thirdElem.current, {
      duration: 0.3,
      scale: 0.9,
      opacity: 0.5,
    });
  };
  const unhoverEffect = (currentRef, secondElem, thirdElem) => {
    gsap.to(currentRef.current, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });
    gsap.to(secondElem.current, {
      duration: 0.3,
      scale: 1,
      opacity: 1,
    });
    gsap.to(thirdElem.current, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });
  };
  return (
    <Wrapper theme={theme}>
      <TextWrapper theme={theme}>
        <IconInfoWrapper
          ref={mailRef}
          onMouseEnter={() => {
            setIsHovered([true, false, false]);
            hoverEffect(mailRef, phoneRef, pinRef);
          }}
          onMouseLeave={() => {
            setIsHovered([false, false, false]);
            unhoverEffect(mailRef, phoneRef, pinRef);
          }}
          onClick={() => {
            CopyToClipboard("roy_andraos@live.fr");
          }}
        >
          <Mailbox />
          <p>roy_andraos@live.fr</p>
          <Copy $show={isHovered[0].toString()} />
        </IconInfoWrapper>
        <IconInfoWrapper
          ref={phoneRef}
          onMouseEnter={() => {
            setIsHovered([false, true, false]);
            hoverEffect(phoneRef, mailRef, pinRef);
          }}
          onMouseLeave={() => {
            setIsHovered([false, false, false]);
            unhoverEffect(phoneRef, mailRef, pinRef);
          }}
          onClick={() => {
            CopyToClipboard("+1 (514) 430-4287");
          }}
        >
          <Phone />
          <p>+1 (514) 430-4287</p>
          <Copy $show={isHovered[1].toString()} />
        </IconInfoWrapper>
        <IconInfoWrapper
          ref={pinRef}
          onMouseEnter={() => {
            hoverEffect(pinRef, mailRef, phoneRef);
          }}
          onMouseLeave={() => {
            unhoverEffect(pinRef, mailRef, phoneRef);
          }}
        >
          <Pin />
          <p>Montreal, QC, Canada</p>
          <Copy $show={isHovered[2].toString()} />
        </IconInfoWrapper>
      </TextWrapper>
      <LinksWrapper theme={theme}>
        <div>
          <Link href="https://www.linkedin.com/in/roy-andraos-b92ab01a8/">
            <LinkedIn />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/RoyAndraos">
            <Git />
          </Link>
        </div>
        <div>
          <Link href="https://www.facebook.com/roy.andraos">
            <Facebook />
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/roy_andraos/?next=%2F">
            <Instagram />
          </Link>
        </div>
      </LinksWrapper>
    </Wrapper>
  );
};
const TextWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  left: 30px;
  font-size: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: 0.3rem;
  background-color: transparent;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;
const Wrapper = styled.div`
  width: 60%;
  height: 30%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  border-bottom: ${({ theme }) =>
    theme === "dark" ? "3px solid #a742bc" : "3px solid #50196f"};
  position: relative;
  color: ${({ theme }) => (theme === "dark" ? "whitesmoke" : "black")};
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const LinksWrapper = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #50196f;
  position: absolute;
  right: 30px;
  bottom: -30%;
  font-size: 3rem;
  ${({ theme }) => theme === "dark" && `color: #a742bc;`};
  @media (max-width: 800px) {
    width: 100%;
    right: 0;
    justify-content: space-evenly;
  }
`;
const Git = styled(FaGithub)`
  transition: 0.3s ease-in-out;
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;

const LinkedIn = styled(FaLinkedin)`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 3rem;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;

const Facebook = styled(FaFacebook)`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 3rem;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
const Instagram = styled(FaInstagram)`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 3rem;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
const Phone = styled(BsPhone)`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;
const IconInfoWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Mailbox = styled(MdOutlineMailOutline)`
  transition: 0.3s ease-in-out;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;
const Pin = styled(FaLocationDot)`
  transition: 0.3s ease-in-out;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;
const float = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
 100% {
    transform: translateY(5px);
  }
`;
const Copy = styled(IoCopyOutline)`
  display: ${({ $show }) => ($show === "true" ? "block" : "none")};
  position: relative;
  animation: ${float} 0.5s infinite;
  margin-left: 30px;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
export default CotactMeLinks;
