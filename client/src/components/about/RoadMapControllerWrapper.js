import { useState, useEffect } from "react";
import Controller from "./roadmap/Controller";
import RoadMap from "./RoadMap";
import styled from "styled-components";
const RoadMapControllerWrapper = () => {
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [mapIndex, setMapIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1000;
      setIsMobile(newIsMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper>
      <RoadMap
        roadmapRef={roadmapRef}
        setRoadmapRef={setRoadmapRef}
        mapIndex={mapIndex}
        setMapIndex={setMapIndex}
        isMobile={isMobile}
      />
      {!isMobile && (
        <Controller
          roadmapRef={roadmapRef}
          mapIndex={mapIndex}
          setMapIndex={setMapIndex}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export default RoadMapControllerWrapper;
