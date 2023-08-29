import React, { useEffect, useState } from 'react';
import { abi } from '../../abi/contract';
import { useContractWrite } from 'wagmi';

import Input from '../Input/input';
import Button from '../Button/button';

export interface Props {
  styles?: any;
  address: string;
}

const MintToken = ({ styles, address }: Props) => {
  const [inputAmount, setInputAmount] = useState('');

  const { data, isLoading, isSuccess, isError, write } = useContractWrite({
    addressOrName: process.env.REACT_APP_GOERLI_CONTRACT_ADDRESS as string,
    contractInterface: abi,
    functionName: 'mint',
  });

  useEffect(() => {
    if (isSuccess) {
      alert('Token minted successfully!');
    } else if (isError) {
      alert('Something went wrong, please try again!');
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className={styles.userInputWrapper}>
        <h4>Mint Tokens</h4>
        <Input
          type="text"
          placeholder="Enter Amount"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
        <Button
          label={isLoading ? 'Minting...' : 'mint tokens'}
          onClick={() =>
            write?.({
              args: [address, inputAmount],
            })
          }
          disabled={!inputAmount}
        />
      </div>
      {data?.hash && <h4>Transaction hash: {data?.hash}</h4>}
    </>
  );
};

export default MintToken;
