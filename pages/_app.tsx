import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "assets/styles/theme";
import GlobalStyles from "assets/styles/globalStyles";
import { ModalProvider } from "contexts/ModalContext";
import "transitions/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <ModalProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}
export default MyApp;
