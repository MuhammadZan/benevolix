import { AppProps } from "next/app";
import "@/styles/globals.css";
import Wrapper from "@/components/globals/wrapper";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const excludedRoutes = ["", ""];

  const isExcluded = excludedRoutes.includes(router.pathname);

  return isExcluded ? (
    <Component {...pageProps} />
  ) : (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default MyApp;
