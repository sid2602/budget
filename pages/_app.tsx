import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../assets/styles/theme";
import GlobalStyles from "../assets/styles/globalStyles";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
