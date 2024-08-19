import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const StyledDiv = styled.div`
  width: var(--fluid-width-80);
  max-width: var(--max-width-lg);
  margin: 0 auto;
`;

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <StyledDiv>
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </StyledDiv>
    </>
  );
};
export default HomeLayout;
