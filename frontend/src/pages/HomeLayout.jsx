import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { useState } from "react";

const StyledDiv = styled.div`
  width: var(--fluid-width-90);
  max-width: var(--max-width-lg);
  padding: 5rem 0;

  margin: 0 auto;
`;

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");
  if (!storedDarkMode) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

const HomeLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

  const darkThemeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkTheme", newDarkMode);
  };
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar isDarkMode={isDarkMode} darkThemeToggle={darkThemeToggle} />
      <StyledDiv>
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ isDarkMode, darkThemeToggle }} />
        )}
      </StyledDiv>
    </>
  );
};
export default HomeLayout;
