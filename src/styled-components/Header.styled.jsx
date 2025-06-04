import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;

  button {
    font-size: 1rem;
    text-align: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0 6px 6px 10px;
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--Slate-800)" : "var(--Slate-300)"};
    transition: background-color 0.3s ease;
    display: block;
    margin-top: 0.5em;
    margin-left: auto;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
