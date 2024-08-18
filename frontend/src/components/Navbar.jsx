import { NavLink } from "react-router-dom";
import styled from "styled-components";

import brandFont from "../assets/fonts/PaybAck.ttf";

const StyledNav = styled.nav`
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
    gap: 2rem;
    margin: 0 auto;
  }

  .brand-name {
    font-family: "brand-font";
    color: var(--secondary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 4px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .link {
    color: var(--gray-1000);
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

const Navbar = () => {
  return (
    <StyledNav>
      <div className="center-div">
        <h3 className="brand-name">Art-Vault</h3>

        <div className="links-container">
          <div className="links">
            <NavLink to={"/"} className="link">
              home
            </NavLink>
            <NavLink to={"about"} className="link">
              about
            </NavLink>
            <NavLink to={"newsletter"} className="link">
              newsletter
            </NavLink>
          </div>
        </div>
      </div>
    </StyledNav>
  );
};
export default Navbar;
