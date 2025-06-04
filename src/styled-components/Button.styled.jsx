import styled from "styled-components";

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1em;
  background-color: var(--Lime);
  border-radius: 10rem;
  gap: 0.5rem;
  margin-top: 2em;
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--Lime)" : "var(--Slate-900)"};

    @media (prefers-reduced-motion: no-preference) {
  * {
    transition: background-color 0.3s ease;
  }
}

  button[type="submit"] {
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--Lime)" : "var(--Slate-900)"};
    color: ${({ theme }) =>
      theme === "light" ? "var(--Slate-900)" : "var(--Lime)"};
    font-size: 1.25rem;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.85;
    scale: 0.95;
  }

  @media (min-width: 48em) {
    flex-wrap: wrap;
    width: 80%;
    margin-top: 0;
  }
`;
