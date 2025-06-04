import {
  FormStyled,
  FormContainer,
  InputContainer,
  RadioContainer,
} from "../styled-components/Form.styled";
import proptypes from "prop-types";
import Button from "./Button";

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.setHasSubmitted(true);
    props.calculateResults(props.formValues);
  }

  return (
    <FormStyled onSubmit={handleSubmit} aria-labelledby="mortgage-form-title">
      <fieldset>
        <legend></legend>
        <FormContainer>
          <label htmlFor="amount">Mortgage Amount</label>
          <InputContainer theme={props.theme}>
            <button
              className="lira-btn"
              type="button"
              tabIndex={-1}
              aria-disabled="true"
              aria-label="Currency: Pound Sterling"
            >
              £
            </button>
            <input
              type="text"
              id="amount"
              name="amount"
              value={props.formValues.amount}
              onChange={props.handleInputChange}
              aria-required="true"
              autoComplete="off"
            />
          </InputContainer>
        </FormContainer>
        <div className="term-rate">
          <FormContainer>
            <label htmlFor="term">Mortgage Term</label>
            <InputContainer theme={props.theme}>
              <input
                type="text"
                id="term"
                name="term"
                value={props.formValues.term}
                onChange={props.handleInputChange}
                aria-required="true"
                autoComplete="off"
              />
              <button
                className="term-btn"
                type="button"
                tabIndex={-1}
                aria-disabled="true"
                aria-label="Term in years"
              >
                years
              </button>
            </InputContainer>
          </FormContainer>
          <FormContainer>
            <label htmlFor="rate">Interest Rate</label>
            <InputContainer theme={props.theme}>
              <input
                type="text"
                id="rate"
                name="rate"
                value={props.formValues.rate}
                onChange={props.handleInputChange}
                aria-required="true"
                autoComplete="off"
              />
              <button
                className="rate-btn"
                type="button"
                tabIndex={-1}
                aria-disabled="true"
                aria-label="Interest Rate Percentage"
              >
                %
              </button>
            </InputContainer>
          </FormContainer>
        </div>
      </fieldset>
      <fieldset>
        <legend></legend>
        <RadioContainer>
          <input
            type="radio"
            name="repaymentType"
            id="repayment"
            value="repayment"
            checked={props.formValues.repaymentType === "repayment"}
            onChange={props.handleInputChange}
            aria-label="Repayment"
          />
          <label htmlFor="repayment">Repayment</label>
        </RadioContainer>
        <RadioContainer>
          <input
            type="radio"
            name="repaymentType"
            id="interest-only"
            value="interest-only"
            checked={props.formValues.repaymentType === "interest-only"}
            onChange={props.handleInputChange}
            aria-label="Interest only"
          />
          <label htmlFor="interest-only">Interest only</label>
        </RadioContainer>
      </fieldset>
      <Button theme={props.theme} />
      {props.error && (
        <small style={{ color: "red", alignSelf: "center" }}>
          {props.error}
        </small>
      )}
    </FormStyled>
  );
}

Form.propTypes = {
  theme: proptypes.string.isRequired,
  handleInputChange: proptypes.func.isRequired,
  formValues: proptypes.shape({
    amount: proptypes.string.isRequired,
    term: proptypes.string.isRequired,
    rate: proptypes.string.isRequired,
    repaymentType: proptypes.string.isRequired,
  }).isRequired,
  calculateResults: proptypes.func.isRequired,
  error: proptypes.string,
  setHasSubmitted: proptypes.func.isRequired,
};

export default Form;
