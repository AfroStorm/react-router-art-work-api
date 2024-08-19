import { Form } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 1rem;
  width: 100%;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: var(--max-width-sm);
    margin: 0 auto;
  }
  .input-field-custom {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: var(--text-1);
    font-weight: 900;
  }
  .btn-custom {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const SearchBar = ({ searchTerm }) => {
  return (
    <StyledDiv>
      <Form className="form">
        <input
          type="search"
          name="search"
          defaultValue={searchTerm}
          className="input-field-slim input-field-custom"
        />
        <button type="submit" className="btn btn-custom">
          submit
        </button>
      </Form>
    </StyledDiv>
  );
};
export default SearchBar;
