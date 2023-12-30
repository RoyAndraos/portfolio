import { ProjectCard, Title } from "./Projects";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import eCommerceBg from "../../assets/ECommerce.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
const ECommerceDescription = ({
  eCommerceRef,
  animateShowDescription,
  guitarRef,
  hollywoodRef,
  unanimateShowDescription,
  demoRef,
}) => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  return (
    <div>
      <div ref={demoRef}>
        {showDemo && (
          <>
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
            <ShowDemoButton
              onClick={() => {
                navigate("/projects/eCommerce");
              }}
            >
              Show Demo
            </ShowDemoButton>
          </>
        )}
      </div>
      <ProjectCard
        key={"eCommerceProject"}
        ref={eCommerceRef}
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
const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 1;
`;

const BackButton = styled(IoMdArrowRoundBack)`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 5rem;
  color: #50196f;
  z-index: 2;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const ShowDemoButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: none;
  background-color: #50196f;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #5e2b8d;
  }
`;
export default ECommerceDescription;
