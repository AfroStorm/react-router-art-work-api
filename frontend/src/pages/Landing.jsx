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
          limit: 40,
        },
      });
      return data.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    let searchTerm;
    const url = new URL(request.url);
    searchTerm = url.searchParams.get("search") || "";
    // storing search term into local storage
    searchTerm && localStorage.setItem("searchTerm", searchTerm);
    searchTerm = localStorage.getItem("searchTerm") || searchTerm;

    await queryClient.ensureQueryData(searchArtworkQuery(searchTerm));
    return { searchTerm };
  };

// filtering the art works by image dimensions(portrait)
const filteredQueryResults = (artWorks) => {
  const filteredArtWorks = artWorks.filter((item) => {
    return (
      item.dimensions_detail[0]?.height &&
      item.dimensions_detail[0]?.width &&
      item.dimensions_detail[0].height > item.dimensions_detail[0].width &&
      item.image_id &&
      item
    );
  });
  return filteredArtWorks;
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: artWorks } = useQuery(searchArtworkQuery(searchTerm));
  const filteredArtWorks = filteredQueryResults(artWorks);

  return (
    <StyledSection>
      <h2 className="title pacifico-regular">
        Discover the World's Art at Your Fingertips.
      </h2>
      <img src={museumImg} alt="image" className="img" />
      <SearchBar />
      <ArtWorkList artWorks={filteredArtWorks} />
    </StyledSection>
  );
};
export default Landing;
