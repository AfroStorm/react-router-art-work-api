import { Form, useNavigation, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 1rem;
  width: 100%;

  .form {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    max-width: var(--max-width-sm);
    margin: 0 auto;
    gap: 0.5rem;
  }
  .input-field-custom {
    color: var(--text-1);
    font-weight: 900;
  }
  .btn-custom {
    color: var(--gray-100);
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "var(--secondary)" : "var(--primary)"};
    transition: var(--transition-quick);
  }

  @media screen and (min-width: 340px) {
    .form {
      grid-template-columns: 1fr auto;
      gap: 0;
    }
    .input-field-custom {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .btn-custom {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const SearchBar = () => {
  const { isDarkMode } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const storedSearchTerm = localStorage.getItem("searchTerm");
  return (
    <StyledDiv $isDarkMode={isDarkMode}>
      <Form className="form">
        <input
          type="search"
          name="search"
          defaultValue={storedSearchTerm}
          className="input-field-slim input-field-custom"
        />
        <button
          type="submit"
          className="btn btn-custom"
          disabled={isSubmitting}
        >
          {isSubmitting ? "searching" : "search"}
        </button>
      </Form>
    </StyledDiv>
  );
};
export default SearchBar;
