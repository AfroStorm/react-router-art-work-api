import styled from "styled-components";
import ArtWorkCard from "./ArtWorkCard";

const StyledUl = styled.ul`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

const ArtWorkList = ({ artWorks }) => {
  return (
    <StyledUl>
      {artWorks.map((item) => {
        return <ArtWorkCard key={item.id} item={item} />;
      })}
    </StyledUl>
  );
};
export default ArtWorkList;
