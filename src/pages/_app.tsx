import { AppProps } from "next/app";
import "@/styles/globals.css";

const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default _app;
