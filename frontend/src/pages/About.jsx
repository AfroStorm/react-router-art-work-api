import { useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  place-items: center;

  .center-div {
    max-width: var(--max-width-xs);

    p {
      line-height: 1.5;
      margin-top: 3rem;
      text-align: center;
    }
  }

  .btn-custom {
    margin-bottom: 3rem;
    color: var(--gray-100);
    background: var(--primary);
  }
`;

const About = () => {
  const [isGerman, setIsGerman] = useState(false);
  return (
    <StyledSection>
      {isGerman ? (
        <>
          <button className="btn btn-custom" onClick={() => setIsGerman(false)}>
            <span>in english</span>
          </button>
          <h3 className="title pacifico-regular">über uns</h3>
        </>
      ) : (
        <>
          <button className="btn btn-custom" onClick={() => setIsGerman(true)}>
            <span>auf deutsch</span>
          </button>
          <h3 className="title pacifico-regular">about us </h3>
        </>
      )}
      <div className="center-div">
        {isGerman ? (
          <p className="title pacifico-regular">
            Willkommen bei Art-Vault! Entdecken Sie eine umfangreiche Sammlung
            von Kunstwerken und detaillierten Informationen zu verschiedenen
            Künstlern und Epochen. Suchen Sie mühelos nach Kunstwerken, erkunden
            Sie ihre Geschichte und erfahren Sie mehr über die Künstler
            dahinter. Abonnieren Sie unseren Newsletter, um die neuesten Updates
            und exklusive Inhalte zu erhalten!
          </p>
        ) : (
          <p className="title pacifico-regular">
            Welcome to Art-Vault! Discover a vast collection of artwork images
            and detailed information from various artists and periods. Easily
            search for art pieces, explore their history, and learn more about
            the artists behind them. Don’t forget to subscribe to our newsletter
            for the latest updates and exclusive content!
          </p>
        )}
      </div>
    </StyledSection>
  );
};
export default About;
