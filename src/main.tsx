import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
