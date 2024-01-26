import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProvaider } from "./context/filter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvaider>
    <App />
  </FiltersProvaider>
);
