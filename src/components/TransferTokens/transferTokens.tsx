import React, { useEffect, useState } from 'react';
import { abi } from '../../abi/contract';
import { useContractWrite, useSignMessage } from 'wagmi';

import Input from '../Input/input';
import Button from '../Button/button';

export interface Props {
  styles?: any;
}

const TransferTokens = ({ styles }: Props) => {
  const [receiverAddress, setReceiverAddress] = useState<any>('');

  const { data, isLoading, isSuccess, isError, write } = useContractWrite({
    addressOrName: process.env.REACT_APP_GOERLI_CONTRACT_ADDRESS as string,
    contractInterface: abi,
    functionName: 'transfer',
  });

  const handleUserInput = (input: any) => {
    const inputArray = input.split(',');
    setReceiverAddress(inputArray);
  };

  const handleTarnsferToken = () => {
    receiverAddress?.forEach((address: string) => {
      write?.({
        args: [address, 1],
      });
    });
  };

  useEffect(() => {
    if (isSuccess) {
      alert('Token transferred successfully');
    } else if (isError) {
      alert('Something went wrong, please try again!');
    }
  }, [isSuccess, isError]);

  console.log(data);

  return (
    <>
      <div className={styles.userInputWrapper}>
        <h4>Send Tokens</h4>
        <Input
          type="textArea"
          placeholder="Enter Addresses"
          value={receiverAddress}
          onChange={(e) => handleUserInput(e.target.value)}
        />
        <Button
          label={isLoading ? 'Transferring...' : 'transfer'}
          onClick={handleTarnsferToken}
          disabled={!receiverAddress}
        />
      </div>
      {data?.hash && <h4>Transaction hash: {data?.hash}</h4>}
    </>
  );
};

export default TransferTokens;
