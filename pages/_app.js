import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }) {
  const desiredChainId = ChainId.Rinkeby;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;