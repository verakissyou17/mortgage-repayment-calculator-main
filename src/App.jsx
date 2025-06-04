import { ThemeContext } from "./components/Theme.jsx";
import { ContainerStyled } from "./styled-components/Container.styled.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useContext, useEffect, useState } from "react";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [formValues, setFormValues] = useState({
    amount: "",
    term: "",
    rate: "",
    repaymentType: "repayment",
  });
  const [results, setResults] = useState({ monthly: 0, total: 0 });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState("");

useEffect(() => {
  document.body.classList.toggle("light-theme", theme === "light");
  document.body.classList.toggle("dark-theme", theme !== "light");
}, [theme]);

  function calculateResults(values) {
    const amount = Number(values.amount);
    const term = Number(values.term);
    const rate = Number(values.rate);
    const repaymentType = values.repaymentType;

    if (!amount || !term || !rate) {
      setResults({ monthly: 0, total: 0 });
      setError("Please fill in all fields with valid numbers.");
      return;
    }

    setError("");

    const numberOfPayments = term * 12;
    const monthlyInterestRate = rate / 100 / 12;
    let monthlyRepayment = 0;
    let totalRepayment = 0;
    if (repaymentType === "repayment") {
      monthlyRepayment =
        (amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      totalRepayment = monthlyRepayment * numberOfPayments;
    } else {
      monthlyRepayment = amount * monthlyInterestRate;
      totalRepayment = monthlyRepayment * numberOfPayments;
    }
    setResults({
      monthly: monthlyRepayment,
      total: totalRepayment,
    });
  }

  function handleInputChange(e) {
    const { name, value, type } = e.target;
    setFormValues((prev) => {
      const updated = { ...prev, [name]: value };
      if (type === "radio" && hasSubmitted) {
        calculateResults(updated);
      }
      return updated;
    });
  }

  function handleReset() {
    const emptyFormValues = {
      amount: "",
      term: "",
      rate: "",
      repaymentType: "repayment",
    };
    setFormValues(emptyFormValues);
    setResults({ monthly: 0, total: 0 });
    setError("");
    setHasSubmitted(false);
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ContainerStyled theme={theme}>
        <Main
          theme={theme}
          handleInputChange={handleInputChange}
          formValues={formValues}
          calculateResults={calculateResults}
          error={error}
          handleReset={handleReset}
          setHasSubmitted={setHasSubmitted}
        />
        <Footer theme={theme} results={results} hasSubmitted={hasSubmitted} />
      </ContainerStyled>
    </>
  );
}

export default App;
