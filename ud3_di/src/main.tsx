import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputUseState from "./components/InputUseState/InputUseState";



createRoot(document.getElementById("root")!).render(
    <StrictMode>

    <InputUseState />

    </StrictMode>
);
