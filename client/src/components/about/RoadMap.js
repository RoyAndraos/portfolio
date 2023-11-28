import styled from "styled-components";
import { useEffect, useRef } from "react";
import Introduction from "./roadmap/Introduction";
import JSFundamentalsPartOne from "./roadmap/JSFundamentalsPartOne";
import JSFundamentalsPartTwo from "./roadmap/JSFundamentalsPartTwo";
import CSSFundamentalsPartOne from "./roadmap/CSSFundamentalsPartOne";
import CSSFundamentalsPartTwo from "./roadmap/CSSFundamentalsPartTwo";
import TheDomPartOne from "./roadmap/TheDomPartOne";
import TheDomPartTwo from "./roadmap/TheDomPartTwo";
import EventListeners from "./roadmap/EventListeners";
import EventListenersPartTwo from "./roadmap/EventListenersPartTwo";
import OOP from "./roadmap/OOP";
import ReactIntro from "./roadmap/ReactIntro";
import HTMLFundamentals from "./roadmap/HTMLFundamentals";
import NyanCat from "./roadmap/NyanCat";
import ReactStateOne from "./roadmap/ReactStateOne";
import ReactStateTwo from "./roadmap/ReactStateTwo";
import ReactEffects from "./roadmap/ReactEffects";
const RoadMap = ({ setRoadmapRef, setMapIndex }) => {
  let roadmRef = useRef(null);
  let introRef = useRef(null);
  let jsOneRef = useRef(null);
  let jsTwoRef = useRef(null);
  let cssOneRef = useRef(null);
  let cssTwoRef = useRef(null);
  let domOneRef = useRef(null);
  let domTwoRef = useRef(null);
  let eventOneRef = useRef(null);
  let eventTwoRef = useRef(null);
  let oopRef = useRef(null);
  let reactIntroRef = useRef(null);
  let htmlRef = useRef(null);
  let nyanCatRef = useRef(null);
  let reactStateOneRef = useRef(null);
  let reactStateTwoRef = useRef(null);
  let reactEffectsRef = useRef(null);
  useEffect(() => {
    setRoadmapRef(roadmRef);
  });

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The target section is currently on the screen
          setMapIndex(parseInt(entry.target.id.split("-")[1]));
        }
      });
    };

    const options = {
      root: roadmRef.current,
      threshold: 0.5, // You can adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section
    observer.observe(introRef.current);
    observer.observe(htmlRef.current);
    observer.observe(jsOneRef.current);
    observer.observe(jsTwoRef.current);
    observer.observe(cssOneRef.current);
    observer.observe(cssTwoRef.current);
    observer.observe(domOneRef.current);
    observer.observe(domTwoRef.current);
    observer.observe(eventOneRef.current);
    observer.observe(eventTwoRef.current);
    observer.observe(oopRef.current);
    observer.observe(nyanCatRef.current);
    observer.observe(reactIntroRef.current);
    observer.observe(reactStateOneRef.current);
    observer.observe(reactStateTwoRef.current);
    observer.observe(reactEffectsRef.current);

    return () => {
      // Cleanup the observer when the component is unmounted
      observer.disconnect();
    };
  }, [
    introRef,
    jsOneRef,
    jsTwoRef,
    cssOneRef,
    cssTwoRef,
    domOneRef,
    domTwoRef,
    eventOneRef,
    eventTwoRef,
    oopRef,
    reactIntroRef,
    setMapIndex,
    htmlRef,
    nyanCatRef,
    reactStateOneRef,
  ]);
  return (
    <Wrapper ref={roadmRef}>
      <Introduction introRef={introRef} />
      <HTMLFundamentals htmlRef={htmlRef} />
      <JSFundamentalsPartOne jsOneRef={jsOneRef} />
      <JSFundamentalsPartTwo jsTwoRef={jsTwoRef} />
      <CSSFundamentalsPartOne cssOneRef={cssOneRef} />
      <CSSFundamentalsPartTwo cssTwoRef={cssTwoRef} />
      <TheDomPartOne domOneRef={domOneRef} />
      <TheDomPartTwo domTwoRef={domTwoRef} />
      <EventListeners eventOneRef={eventOneRef} />
      <EventListenersPartTwo eventTwoRef={eventTwoRef} />
      <OOP oopRef={oopRef} />
      <NyanCat nyanCatRef={nyanCatRef} />
      <ReactIntro reactIntroRef={reactIntroRef} />
      <ReactStateOne reactStateOneRef={reactStateOneRef} />
      <ReactStateTwo reactStateTwoRef={reactStateTwoRef} />
      <ReactEffects reactEffectsRef={reactEffectsRef} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    width: 0px; /* Set the width of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Set the color of the thumb */
  }
`;

export default RoadMap;
