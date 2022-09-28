import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";
import { ThemeProvider } from "../context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
