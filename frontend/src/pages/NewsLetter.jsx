import axios from "axios";
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 1rem;
  border-radius: var(--radius-100);
  box-shadow: var(--shadow-300);
  padding: 2rem;
  max-width: var(--max-width-xxs);
  margin: 0 auto;
  min-height: 20rem;
  background: ${({ $isDarkMode }) => $isDarkMode && "var(--gray-700)"};
  transition: var(--transition-quick);

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  .input-label {
    align-self: start;
    text-transform: capitalize;
  }
  .input-field-custom {
    margin-bottom: 0.7rem;
  }
  .btn-custom {
    color: var(--gray-100);
    margin-top: 1rem;
    background: ${({ $isDarkMode }) =>
      $isDarkMode ? "var(--secondary)" : "var(--primary)"};
    transition: var(--transition-quick);
  }
`;
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response?.data?.msg);
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
  return redirect("/");
};

const NewsLetter = () => {
  const { isDarkMode } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <StyledSection $isDarkMode={isDarkMode}>
      <Form method="POST" className="form">
        {/* name */}
        <label htmlFor="name" className="input-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={"Peter"}
          className="input-field-slim input-field-custom"
        />
        {/* last name */}
        <label htmlFor="lastName" className="input-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={"Robertson"}
          className="input-field-slim input-field-custom"
        />
        {/* email */}
        <label htmlFor="email" className="input-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          disabled={isSubmitting}
          defaultValue={"test@test.com"}
          className="input-field-slim input-field-custom"
        />
        <button type="submit" className="btn btn-custom">
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </StyledSection>
  );
};
export default NewsLetter;
