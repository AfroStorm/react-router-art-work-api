import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const StyledDiv = styled.div`
  width: var(--fluid-width-80);
  max-width: var(--max-width-lg);
  margin: 0 auto;
`;

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <StyledDiv>
        <Outlet />
      </StyledDiv>
    </>
  );
};
export default HomeLayout;
