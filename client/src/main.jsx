import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0yxag8gnfw0uz0vu.us.auth0.com"
     clientId="9UVKgIlLBvZaR1jlmxc3MGqgD3EYXyfe"
     authorizationParams={{
      redirect_uri: "https://hotelbookingapp-client.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
