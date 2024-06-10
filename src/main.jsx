import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId="cfedd95feabc42cdb98759ef0811dacc"
      domain="https://monj.kinde.com"
      redirectUri="https://monjaworowska.github.io/react-kinde-authentication/"
      logoutUri="https://monjaworowska.github.io/react-kinde-authentication/"
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);
