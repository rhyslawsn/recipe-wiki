import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { TRPC } from "./components/TRPC";
import { theme } from "./config/theme";
import { Router } from "./Router";

const App = () => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
};

createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider resetCSS theme={theme}>
    <BrowserRouter>
      <TRPC>
        <App />
      </TRPC>
    </BrowserRouter>
  </ChakraProvider>
);
