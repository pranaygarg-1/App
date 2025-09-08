import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BlueDuckV } from "./screens/BlueDuckV/BlueDuckV";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BlueDuckV />
  </StrictMode>,
);
