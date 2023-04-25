import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("page-loader");
      const root = document.querySelector(":root");
      if (loader) {
        loader.style.opacity = 1;
        setTimeout(() => {
          loader.style.display = "none";
          root.style.setProperty("--cursor", "none");
        }, 800);
      }
    }
  }, []);

  return <Component {...pageProps} />;
}
