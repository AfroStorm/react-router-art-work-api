import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  .card {
    height: 100%;
    border-radius: var(--radius-100);
    box-shadow: var(--shadow-200);
    transition: var(--transition-quick);
    display: grid;
    gap: 1rem;
  }
  .card:hover {
    box-shadow: var(--shadow-300);
  }

  .img-container {
    height: 15rem;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    padding: 0.4rem;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    color: var(--primary);
    font-weight: 700;
  }
  .info span {
    color: var(--text-1);
    text-transform: lowercase;
    font-weight: normal;
  }

  .btn-custom {
    width: 5rem;
    padding: 0.5rem;
    align-self: flex-end;
    border-radius: 0 0.2rem 0 0;
    color: var(--gray-100);
    background: var(--secondary);
    border-color: var(--secondary);
    transition: var(--transition-quick);
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

const ArtWorkCard = ({ item }) => {
  const id = item.id;
  const title = item.title;
  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
    : "";
  const date = item.date_display;
  const artistOrigin = item.artist_display || item.place_of_origin;
  const medium = item.medium_display.split(",")[0]; // Simplified medium
  // checking for dimensions
  const height =
    item.dimensions_detail[0]?.height && item.dimensions_detail[0].height;
  const width =
    item.dimensions_detail[0]?.width && item.dimensions_detail[0].width;
  const dimensions = height && width ? `${height} x ${width} cm` : "no data";

  return (
    <StyledLi>
      <article className="card">
        <div className="img-container">
          <img src={imageUrl} alt={title} />
        </div>
        <h3 className="title">{title}</h3>

        <div className="info">
          <p className="date">
            date: <span>{date}</span>
          </p>
          <p className="artist-origin">
            origin: <span>{artistOrigin}</span>
          </p>
          <p className="medium">
            medium: <span>{medium}...</span>
          </p>
          <p className="dimensions">
            dimensions: <span>{dimensions}</span>
          </p>
        </div>
        <Link to={`art-work/${id}`} className="btn btn-custom">
          detail
        </Link>
      </article>
    </StyledLi>
  );
};
export default ArtWorkCard;
