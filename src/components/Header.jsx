import proptypes from "prop-types";
import { HeaderStyled } from "../styled-components/Header.styled";

function Header({ theme, toggleTheme }) {
  return (
    <HeaderStyled theme={theme}>
      <button type="button" onClick={toggleTheme}>{theme === "light" ? "🌛" : "☀️"}</button>
    </HeaderStyled>
  );
}

Header.propTypes = {
  theme: proptypes.string.isRequired,
  toggleTheme: proptypes.func.isRequired,
};

export default Header;
