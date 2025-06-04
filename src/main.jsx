import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/Theme.jsx";


createRoot(document.getElementById("root")).render(
  <ThemeProvider>
      <App />
  </ThemeProvider>
);
