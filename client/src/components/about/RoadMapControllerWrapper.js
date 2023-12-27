import { useState } from "react";
import Controller from "./roadmap/Controller";
import RoadMap from "./RoadMap";
import styled from "styled-components";
const RoadMapControllerWrapper = () => {
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [mapIndex, setMapIndex] = useState(0);

  return (
    <Wrapper>
      <RoadMap
        roadmapRef={roadmapRef}
        setRoadmapRef={setRoadmapRef}
        mapIndex={mapIndex}
        setMapIndex={setMapIndex}
      />
      <Controller
        roadmapRef={roadmapRef}
        mapIndex={mapIndex}
        setMapIndex={setMapIndex}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export default RoadMapControllerWrapper;
