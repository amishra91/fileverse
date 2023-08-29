import { useState } from 'react';
import { useAccount, useContractRead, useToken } from 'wagmi';
import { abi } from '../../abi/contract';
import { ethers } from 'ethers';
import MintToken from '../MintToken/mintToken';
import TransferTokens from '../TransferTokens/transferTokens';

import styles from './userAction.module.css';

const UserAction = () => {
  const address = useAccount()?.address;

  const { data } = useContractRead({
    addressOrName: process.env.REACT_APP_GOERLI_CONTRACT_ADDRESS as string,
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const { data: token } = useToken({
    address: process.env.REACT_APP_GOERLI_CONTRACT_ADDRESS as string,
  });

  return (
    <>
      <div className={styles.userActionContainer}>
        {address ? (
          <>
            <h4 style={{ marginBottom: '10px' }}>
              Contract Address: {process.env.REACT_APP_GOERLI_CONTRACT_ADDRESS}
            </h4>

            {data && (
              <h4>
                Current Balance: {ethers.BigNumber.from(data?._hex).toString()}{' '}
                {token?.symbol}
              </h4>
            )}

            <MintToken address={address} styles={styles} />
            <TransferTokens styles={styles} />
          </>
        ) : (
          <h2 style={{ textAlign: 'center' }}>Please connect wallet</h2>
        )}
      </div>
    </>
  );
};

export default UserAction;
