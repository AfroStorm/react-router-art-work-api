import styled from "styled-components";
import museumImg from "../assets/museum.svg";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const StyledSection = styled.section`
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
import ArtWorkList from "../components/ArtWorkList";
const searchUrl = "https://api.artic.edu/api/v1/artworks/search";

const searchArtworkQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(searchUrl, {
        params: {
          q: searchTerm,
          fields:
            "id,title,image_id,date_display,artist_display,place_of_origin,medium_display,dimensions_detail,credit_line,is_public_domain",
          limits: "page=2&limit=20",
        },
      });
      return data.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "flowers";
    await queryClient.ensureQueryData(searchArtworkQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: artWorks } = useQuery(searchArtworkQuery(searchTerm));
  return (
    <StyledSection>
      <h2 className="title pacifico-regular">
        Discover the World's Art at Your Fingertips.
      </h2>
      <img src={museumImg} alt="image" className="img" />
      <SearchBar searchTerm={searchTerm} />
      <ArtWorkList artWorks={artWorks} />
    </StyledSection>
  );
};
export default Landing;
