import * as React from "react";
import { Helmet } from "react-helmet";
import { orange } from "tailwindcss/colors";
import OGImage from "../images/og-image.webp";

const title = "UNLOAD - Service de déménagement au Maroc";
const description = "Déménagement rapide et facile comme jamais";
const url = "https://www.unload.ma";

export const Layout = ({ children }) => (
  <>
    <Helmet htmlAttributes={{ lang: "fr" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={orange[400]} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OGImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="unload.ma" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OGImage} />
    </Helmet>
    {children}
  </>
);
