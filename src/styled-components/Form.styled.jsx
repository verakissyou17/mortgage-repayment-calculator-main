import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  fieldset {
    border: none;
  }

  @media (min-width: 48em) {
    .term-rate {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const FormContainer = styled.div`
  margin-bottom: 0.5em;

  label {
    display: block;
    color: var(--Slate-700);
    margin-bottom: 0.5em;
  }

  @media (min-width: 48em) {
    margin-bottom: 0.75em;

    label {
      margin-bottom: 0.75em;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;

  input {
    padding: 0.75em;
    outline: none;
    width: 100%;
    font-weight: 700;
    font-size: 1.2rem;
  }

  button {
    background-color: ${({ theme }) =>
      theme === "light" ? "var(--Slate-100)" : "var(--Slate-900)"};
    color: ${({ theme }) =>
      theme === "light" ? "var(--Slate-700)" : "var(--Slate-100)"};
    border: none;
    font-weight: 700;
    cursor: pointer;
  }

  #amount {
    border-radius: 0 0.25rem 0.25rem 0;
    border: 1px solid var(--Slate-700);
    border-left: none;
  }

  .lira-btn {
    border-radius: 0.25rem 0 0 0.25rem;
    margin-right: 0;
    border: 1px solid var(--Slate-700);
    border-right: 0;
    flex-basis: 8%;
  }

  #term,
  #rate {
    border-radius: 0.25rem 0 0 0.25rem;
    border: 1px solid var(--Slate-700);
    border-right: none;
  }

  .term-btn,
  .rate-btn {
    border-radius: 0 0.25rem 0.25rem 0;
    margin-left: 0;
    border: 1px solid var(--Slate-700);
    border-left: 0;
    flex-basis: 15%;
    text-align: center;
  }

  .rate-btn {
    flex-basis: 8%;
  }

  @media (min-width: 48em) {
    .lira-btn {
      flex-basis: 15%;
    }

    .term-btn {
      flex-basis: 50%;
    }

    .rate-btn {
      flex-basis: 40%;
    }
  }
`;

export const RadioContainer = styled.div`
  margin-block: 1em;
  padding: 0.75em;
  border-radius: 0.25rem;
  border: 1px solid var(--Slate-700);
  display: flex;
  align-items: center;
  gap: 1rem;

  &:has(input:checked) {
    border: 1px solid var(--Lime);
    background-color: rgba(215, 218, 47, 0.2);
  }

  input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid var(--Slate-700);
    border-radius: 50%;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    &:checked {
      width: 10px;
      height: 10px;
      background-color: var(--Lime);
      border: none;

      &::after {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--Lime);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  label {
    color: var(--Slate-700);
  }

  @media (min-width: 48em) {
    padding: 1em;
  }
`;
