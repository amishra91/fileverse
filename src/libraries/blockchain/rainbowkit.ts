import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, createClient, configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [chain.goerli],
  [
    //alchemy primary
    alchemyProvider({
      alchemyId: process.env.REACT_APP_ALCHEMY_GOERLI_API_KEY || '',
    }),

    //fallback if alchemy fail
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Fileverse',
  chains,
});

export const wagmiClient: any = createClient({
  autoConnect: true,
  connectors,
  provider,
});
