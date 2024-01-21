import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  "./index.css";
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createClient, chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import Footer from './Footer';
import Navbar from './navbar';

const client = createClient(
  getDefaultClient({
    appName: 'PalBorrow',
    //infuraId: process.env.REACT_APP_INFURA_ID,
    alchemyId:  process.env.REACT_APP_ALCHEMY_ID,
    chains: [chain.sepolia],
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto" mode="light">
        <Navbar />
        <App />
        <Footer />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
