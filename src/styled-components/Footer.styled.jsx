import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--Slate-900);
  padding: 1.8em 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.hasSubmitted ? "space-between" : "center")};
  align-items: ${(props) => (props.hasSubmitted ? "flex-start" : "center")};
  gap: 1rem;
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  h2, h5 {
    color: var(--Slate-100);
    font-size: clamp(1rem, 0.648rem + 1.502vw, 2rem);
  }

  p {
    color: var(--Slate-300);
    line-height: 1.5;
  }

  .completion-request {
    text-align: center;
  }

  @media (min-width: 48em) {
    padding: 3em;
    gap: 1.5rem;
    border-radius: 0 2rem 2rem 4rem;
  }
`;

export const ResultStyled = styled.section`
  border-top: 5px solid var(--Lime);
  border-radius: 10px;
  padding: 1.5em 1em;
  margin-top: 1em;
  background-color: var(--Slate-800);

  p {
    color: var(--Slate-100);
    line-height: 1.5;
    margin-bottom: 0.5em;
  }

  h3 {
    color: var(--Lime);
    font-size: clamp(2.5rem, 2.148rem + 1.502vw, 3.5rem);
    margin-bottom: 0.5em;
  }

  hr {
    border: 0;
    border-top: 2px solid var(--Slate-100);
    margin: 1.5em 0;
  }

  h4 {
    color: var(--White);
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }

  @media (min-width: 48em) {
    padding: 2em;
  }
`;
