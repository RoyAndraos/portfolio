import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
