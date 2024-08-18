import styled from "styled-components";
import museumImg from "../assets/museum.svg";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const StyledSection = styled.section`
  padding: 5rem 0;
  display: grid;
  justify-items: center;

  .title {
    font-weight: 900;
    text-align: center;
  }

  .img {
    object-fit: cover;
    width: 100%;
    max-width: var(--max-width-xxs);
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
  }
`;

import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
const searchUrl = "https://api.artic.edu/api/v1/artworks/search";

const searchArtworkQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(searchUrl, {
        params: {
          q: searchTerm,
          // fields: "id,title,artist_display,date_display,main_reference_number",
          // limits: "page=2&limit=20",
        },
      });
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    let searchTerm;
    searchTerm = url.searchParams.get("search" || "");
    searchTerm = !searchTerm ? "flowers" : searchTerm;
    await queryClient.ensureQueryData(searchArtworkQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: artWorks } = searchArtworkQuery(searchTerm);
  return (
    <StyledSection>
      <h2 className="title pacifico-regular">
        Discover the World's Art at Your Fingertips.
      </h2>
      <img src={museumImg} alt="image" className="img" />
      <SearchBar />
    </StyledSection>
  );
};
export default Landing;
