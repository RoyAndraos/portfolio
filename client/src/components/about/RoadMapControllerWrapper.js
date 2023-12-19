import { useState } from "react";
import Controller from "./roadmap/Controller";
import RoadMap from "./RoadMap";
const RoadMapControllerWrapper = () => {
  const [roadmapRef, setRoadmapRef] = useState(null);
  const [mapIndex, setMapIndex] = useState(0);

  return (
    <>
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
    </>
  );
};

export default RoadMapControllerWrapper;
