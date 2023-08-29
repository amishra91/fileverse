import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from './libraries/blockchain/rainbowkit';

import Header from './components/Header/header';
import UserAction from './components/UserAction/userAction';

import '@rainbow-me/rainbowkit/styles.css';

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          showRecentTransactions={true}
          appInfo={{
            appName: 'Fileverse',
          }}
        >
          <Header />
          <UserAction />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
