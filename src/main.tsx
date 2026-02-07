import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./api/apollo/client";
import App from "./App";
import "./index.css";
import { FavoritesProvider } from "./contexts/FavoritesContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <FavoritesProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </FavoritesProvider>
);
