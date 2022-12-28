import { Html, Head, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "../components/theme";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel={"stylesheet"}
          href={
            "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          }
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
