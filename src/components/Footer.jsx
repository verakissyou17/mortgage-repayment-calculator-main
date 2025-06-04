import {
  FooterStyled,
  ResultStyled,
} from "../styled-components/Footer.styled.jsx";
import proptypes from "prop-types";

function Footer(props) {
  const { monthly, total } = props.results;

  return (
    <FooterStyled>
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot; repayments&quot;
        again.
      </p>
      <ResultStyled>
        <p>Your monthly repayments</p>
        <h3>£ {monthly ? monthly.toFixed(2) : "0.00"}</h3>
        <hr />
        <p>Total you&apos;ll repay over the term</p>
        <h4>£ {total ? total.toFixed(2) : "0.00"}</h4>
      </ResultStyled>
    </FooterStyled>
  );
}

Footer.propTypes = {
  results: proptypes.shape({
    monthly: proptypes.number.isRequired,
    total: proptypes.number.isRequired,
  }).isRequired,
};

export default Footer;
