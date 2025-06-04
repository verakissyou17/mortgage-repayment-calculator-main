import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 750px;
  background-color: ${({ theme }) =>
    theme === "light" ? "var(--White)" : "var(--Slate-100)"};

  @media (prefers-reduced-motion: no-preference) {
  * {
    transition: background-color 0.3s ease;
  }
}

  @media (min-width: 48em) {
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    border-radius: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 2em auto;
  }
`;
