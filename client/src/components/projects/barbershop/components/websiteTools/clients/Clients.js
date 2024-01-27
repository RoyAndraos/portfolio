import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import { ClientsContext } from "../../contexts/ClientsContext";
// import SearchType from "./SearchType";
const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { clients } = useContext(ClientsContext);
  const [searchResults, setSearchResults] = useState([]);
  //   const [searchType, setSearchType] = useState("name");
  const handleSearchClick = () => {
    const newClientsArray = clients.filter((client) => {
      if (
        client.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm) ||
        client.email.includes(searchTerm)
      ) {
        return client;
      }
      return null; // or any other default value
    });
    setSearchResults(newClientsArray);
  };

  return (
    <Wrapper>
      {/* <SearchType setSearchType={setSearchType} searchType={searchType} /> */}
      <SearchBar
        setSearchTerm={setSearchTerm}
        handleSearchClick={handleSearchClick}
      />
      <SearchResults
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 1vh;
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
export default Clients;
