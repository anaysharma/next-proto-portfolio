import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          id="page-loader"
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            background: "black",
            zIndex: 999,
            display: "grid",
            placeItems: "center",
          }}
        >
          <div className="newtons-cradle">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
