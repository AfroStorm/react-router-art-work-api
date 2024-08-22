import styled from "styled-components";
import errorImg from "../assets/error404.svg";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .center-div {
    display: grid;
    place-items: center;
    p {
      margin: 0.5rem 0 1rem 0;
    }
  }
  .img-container {
    overflow: hidden;
    max-width: var(--max-width-xxs);
    .img {
      width: 100%;
      margin-bottom: 0.2rem;
    }
  }

  .link {
    font-size: 1.5rem;
    color: var(--secondary);
    text-transform: capitalize;
  }
`;

const Error404 = () => {
  return (
    <StyledSection>
      <div className="center-div">
        <div className="img-container">
          <img src={errorImg} alt="error image" className="img" />
        </div>
        <h4>oops...something went wrong!</h4>
        <p>We could'nt find this page</p>
        <Link to={"/"} className="link">
          back home
        </Link>
      </div>
    </StyledSection>
  );
};
export default Error404;
