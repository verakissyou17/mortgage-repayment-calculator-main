import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--White)" : "var(--Slate-100)"};
  padding: 2em;
  transition: background-color 0.3s ease;

  h1 {
    color: var(--Slate-900);
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 0.25em;
  }

  .clear {
    background-color: transparent;
    color: var(--Slate-700);
    font-size: clamp(0.75rem, 0.648rem + 0.502vw, 1rem);
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
    border-bottom: 1px solid var(--Slate-700);
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 2rem 0 0 2rem;

    h1,
    .clear {
      margin-bottom: 0;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
