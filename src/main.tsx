import { createRoot } from "react-dom/client";
import { AppRouter } from "./app/routes/router";
import { AppProviders } from "./app/AppProviders";
import "./app/globals.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>,
);
