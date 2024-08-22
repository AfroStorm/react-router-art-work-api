import { NavLink } from "react-router-dom";
import styled from "styled-components";
import brandFont from "../assets/fonts/PaybAck.ttf";
import { CgDarkMode } from "react-icons/cg";

import { useEffect } from "react";

const StyledNav = styled.nav`
  position: relative;

  @font-face {
    font-family: "brand-font";
    src: url(${brandFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  width: var(--view-width);
  padding: 1rem;

  .center-div {
    display: flex;
    flex-direction: column;
    width: var(--fluid-width-90);
    max-width: var(--max-width-md);
    margin: 0 auto;
    gap: 1rem;
  }

  .brand-container {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand-name {
    font-family: "brand-font";
    color: var(--secondary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 4px;
  }

  .dark-mode-toggle {
    top: 0.7rem;
    right: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    align-content: center;
    gap: 0.3rem;
    font-size: 2rem;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "var(--gray-100)" : "")};
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: var(--transition-slow);
    span {
      font-size: 1rem;
      margin: auto 0;
      font-weight: 700;
      width: 5.5rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .link {
    text-transform: capitalize;
    display: inline-block;
    font-weight: 700;
    transition: var(--transition-quick);
    letter-spacing: 2px;
  }

  .link:hover {
    color: var(--secondary);
    padding-left: 0.5rem;
  }

  .active {
    color: var(--secondary);
  }

  @media screen and (min-width: 768px) {
    .center-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .links {
      flex-direction: row;
    }

    .link {
      margin-left: 2rem;
    }
    .link:hover {
      padding-left: 0;
    }
  }
`;

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.querySelector("body").classList.toggle("dark-mode");
  }, [isDarkMode]);

  return (
    <StyledNav $isDarkMode={isDarkMode}>
      <div className="center-div">
        <div className="brand-container">
          <h3 className="brand-name">Art-Vault</h3>
          <button
            type="button"
            className={"dark-mode-toggle"}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <CgDarkMode />
            <span>{isDarkMode ? "Day Mode" : "Night Mode"}</span>
          </button>
        </div>

        <div className="links-container">
          <div className="links">
            <NavLink to={"/"} className={"link"}>
              home
            </NavLink>
            <NavLink to={"about"} className={"link"}>
              about
            </NavLink>
            <NavLink to={"newsletter"} className={"link"}>
              newsletter
            </NavLink>
          </div>
        </div>
      </div>
    </StyledNav>
  );
};
export default Navbar;
