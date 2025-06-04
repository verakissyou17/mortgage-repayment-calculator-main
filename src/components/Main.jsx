import { MainStyled } from "../styled-components/Main.styled";
import Form from "./Form";

import proptypes from "prop-types";

function Main(props) {
  const { theme } = props;

  return (
    <MainStyled theme={theme}>
      <section className="header">
        <h1>Mortgage Calculator</h1>
        <button className="clear" onClick={props.handleReset}>
          Clear All
        </button>
      </section>
      <Form
        theme={theme}
        handleInputChange={props.handleInputChange}
        formValues={props.formValues}
        calculateResults={props.calculateResults}
        error={props.error}
        setHasSubmitted={props.setHasSubmitted}
      />
    </MainStyled>
  );
}

Main.propTypes = {
  theme: proptypes.string.isRequired,
  handleInputChange: proptypes.func.isRequired,
  formValues: proptypes.shape({
    amount: proptypes.string.isRequired,
    term: proptypes.string.isRequired,
    rate: proptypes.string.isRequired,
    repaymentType: proptypes.string.isRequired,
  }).isRequired,
  calculateResults: proptypes.func.isRequired,
  error: proptypes.string.isRequired,
  handleReset: proptypes.func.isRequired,
  setHasSubmitted: proptypes.func.isRequired,
};

export default Main;
