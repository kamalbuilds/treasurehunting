import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { LightlinkPegasusTestnet } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = LightlinkPegasusTestnet;

  return (
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.NEXT_PUBLIC_APP_THIRDWEBCLIENT}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
