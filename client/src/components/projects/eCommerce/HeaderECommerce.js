import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import HamburgerMenu from "./HamburgerMenu";
import { Link, useNavigate } from "react-router-dom";
import SearchResult from "./utils/SearchResult";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CartContext } from "./CartContext";
import { UserContext } from "./UserContext";
import BackToProjects from "../BackToProjects";
const HeaderECommerce = ({ setIsCart, setShowProfile }) => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchResultActive, setIsSearchResultActive] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [categories, setCategories] = useState();

  const {
    state: { selectedProducts },
  } = useContext(CartContext);

  const {
    state: { user },
  } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // useEffect(() => {}, [selectedProducts, addToCart]);

  useEffect(() => {
    if (searchInput.length >= 4) {
      setIsSearchResultActive(true);
    } else {
      setIsSearchResultActive(false);
    }
  }, [searchInput]);

  //fetch list of categories for dropdown menu
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch(() => navigate("/projects/eCommerce/404"));
  }, [navigate]);

  // open and close dropdown menu onClick
  const handleDropOpen = () => {
    setDropOpen(!dropOpen);
  };

  //set dropOpen to close after user clicks a category
  const handleDropClose = () => {
    setDropOpen(false);
  };

  return (
    <ContainerHeader>
      <BackToProjects />
      <ContainerChildren>
        <Link
          to={`/projects/eCommerce`}
          style={{ all: "unset", cursor: "pointer" }}
        >
          <ImageLogo src="/images/logo.png" alt="logo" />
        </Link>
        <ContainerSearchbar>
          {user && (
            <SearchBar
              placeholder="Search"
              value={searchInput}
              onChange={handleSearchInput}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearchInput("");
                  setIsSearchResultActive(false);
                }
              }}
            />
          )}
          {isSearchResultActive && (
            <SearchResult
              searchInput={searchInput}
              isSearchResultActive={isSearchResultActive}
              setIsSearchResultActive={setIsSearchResultActive}
              setSearchInput={setSearchInput}
            />
          )}
        </ContainerSearchbar>
        {user && (
          <ContainerLink>
            <DropdownCat>
              <CategoriesButton onClick={handleDropOpen}>
                Categories{" "}
                {dropOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </CategoriesButton>
              {dropOpen ? (
                <DropMenu>
                  {categories &&
                    categories.map((category) => {
                      return (
                        <ListItem key={category}>
                          <DropdownLink
                            to={`/projects/eCommerce/categories/${category}`}
                            onClick={handleDropClose}
                          >
                            {category}
                          </DropdownLink>
                        </ListItem>
                      );
                    })}
                </DropMenu>
              ) : null}
            </DropdownCat>

            <LinkCategory to="/projects/eCommerce/brands">Brands</LinkCategory>

            <button
              style={{ all: "unset", position: "relative" }}
              onClick={() => setIsCart(true)}
            >
              <ShoppingCartIcon
                sx={{
                  transition: "all 0.2s",
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.6,
                  },
                }}
              />
              {selectedProducts.length !== 0 && (
                <ItemNotif>
                  <p>{selectedProducts.length}</p>
                </ItemNotif>
              )}
            </button>
            <button
              onClick={() => setShowProfile(true)}
              style={{ all: "unset" }}
            >
              <PersonIcon
                sx={{
                  transition: "all 0.2s",
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.6,
                  },
                }}
              />
            </button>
          </ContainerLink>
        )}
        <HamburgerMenu
          isHamburger={isHamburger}
          setIsHamburger={setIsHamburger}
          categories={categories}
        />
      </ContainerChildren>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  box-shadow: 0 4px 5px -5px rgb(0 0 0 / 23%);
  margin-bottom: 1rem;
  background-color: #f7f7f7;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  font-family: "Roboto", sans-serif;
`;

const ContainerChildren = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-left: 3rem;
  height: 100%;
`;

const ContainerSearchbar = styled.div`
  position: relative;
  width: 40%;
  padding-left: 3rem;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

const ImageLogo = styled.img`
  width: 100px;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    width: 70px;
  }
`;

const SearchBar = styled.input`
  height: 2.5rem;
  width: 100%;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 3rem;
  font-size: 18px;

  &:focus {
    outline: 1px solid #b1b2ff;
  }
`;

const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;

  @media (max-width: 800px) {
    display: none;
  }
`;

const LinkCategory = styled(Link)`
  all: unset;
  font-weight: 700;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-in-out;
  -webkit-transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  :visited {
    text-decoration: none;
    color: inherit;
  }
`;

const CategoriesButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const DropdownCat = styled.div`
  position: relative;
`;

const DropMenu = styled.div`
  position: absolute;
  list-style-type: none;
  margin: 1rem 0;
  background-color: white;
  width: 150px;
  cursor: pointer;
`;

const ListItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  width: 100%;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #eef1ff;
  }
`;

const DropdownLink = styled(Link)`
  all: unset;
  font-weight: 700;
  text-decoration: none;
  color: black;
`;

const ItemNotif = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ff5f5f;
  top: -5px;
  right: -5px;
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 50%;
  font-weight: 900;
  font-size: 10px;
`;

export default HeaderECommerce;
