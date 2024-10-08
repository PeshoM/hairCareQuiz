import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Router />);
