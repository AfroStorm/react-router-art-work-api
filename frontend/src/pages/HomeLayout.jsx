import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { useState } from "react";

const StyledDiv = styled.div`
  width: var(--fluid-width-80);
  max-width: var(--max-width-lg);
  padding: 5rem 0;

  margin: 0 auto;
`;

const HomeLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <StyledDiv>
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ isDarkMode, setIsDarkMode }} />
        )}
      </StyledDiv>
    </>
  );
};
export default HomeLayout;
