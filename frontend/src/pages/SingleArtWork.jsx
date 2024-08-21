import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  justify-items: center;

  .btn-custom {
    color: var(--gray-100);
    background: var(--primary);
    margin-bottom: 5rem;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
    border-radius: var(--radius-100);
    box-shadow: var(--shadow-300);
    padding: 0.5rem;
  }

  .img-container {
    max-width: 20rem;
    overflow: hidden;
    margin: auto 0;
    .img {
      width: 100%;
      object-fit: cover;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    max-width: var(--max-width-xs);
    padding: 0.4rem;
    gap: 1rem;
  }
  .info-container span {
    color: var(--text-1);
    text-transform: lowercase;
    font-weight: normal;
  }

  .info {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    gap: 0.3rem;
    color: var(--primary);
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    .card {
      grid-template-columns: auto 1fr;
      column-gap: 1rem;
    }

    .info-container {
      justify-content: space-between;
    }

    .info {
      margin: auto 0;
    }
  }
`;

const baseUrl = "https://api.artic.edu/api/v1/artworks/";

const useSingleArtWorkQuery = (id) => {
  return {
    queryKey: ["art-work", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}${id}`, {
        params: {
          fields:
            "id,title,image_id,date_display,artist_display,place_of_origin,medium_display,dimensions_detail,credit_line,is_public_domain",
        },
      });
      const data = response.data.data;
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(useSingleArtWorkQuery(id));
    return { id };
  };

const SingleArtWork = () => {
  const { id } = useLoaderData();
  const { data: item } = useQuery(useSingleArtWorkQuery(id));
  // data properties
  const title = item.title;
  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
    : "";
  const date = item.date_display;
  const artistOrigin = item.artist_display || item.place_of_origin;
  const medium = item.medium_display; // Simplified medium
  const dimensions = `a: ${item.dimensions_detail[0]?.height} x ${item.dimensions_detail[0]?.width} cm
               b: ${item.dimensions_detail[1]?.height} x ${item.dimensions_detail[1]?.width} cm`;
  const creditLine = item.credit_line;
  const publicDomain = item.is_public_domain ? "Yes" : "No";
  const description = `This textile artwork, originating from ${item.place_of_origin}, around ${item.date_display}
               showcases the intricate technique of silk plain weaving, characterized by ${item.medium_display}.`;

  return (
    <StyledSection>
      <Link to={"/"} className="btn btn-custom">
        <span>back home </span>
      </Link>

      <article className="card">
        <div className="img-container">
          <img src={imageUrl} alt={title} className="img" />
        </div>

        <div className="info-container">
          <h2 className="title">{title}</h2>
          <div className="info">
            <p className="date">
              date: <span>{date}.</span>
            </p>
            <p className="artist-origin">
              origin: <span>{artistOrigin}.</span>
            </p>
            <p className="medium">
              medium: <span>{medium}.</span>
            </p>
            <p className="dimensions">
              dimensions: <span>{dimensions}.</span>
            </p>
            <p className="credit-line">
              credit line: <span>{creditLine}.</span>
            </p>
            <p className="public-domain">
              public domain: <span>{publicDomain}.</span>
            </p>
            <p className="description">
              description: <span>{description}.</span>
            </p>
          </div>
        </div>
      </article>
    </StyledSection>
  );
};
export default SingleArtWork;
