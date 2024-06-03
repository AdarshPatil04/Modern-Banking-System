<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {  
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
=======
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { StyledString } from 'next/dist/build/swc';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    await exchangePublicToken({
      publicToken: public_token,
      user,
    })

    router.push('/');
  }, [user])
  
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);
  
  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
<<<<<<< HEAD
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
=======
      ): variant === 'ghost' ? (
        <Button>
          Connect bank
        </Button>
      ): (
        <Button>
          Connect bank
        </Button>
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac
      )}
    </>
  )
}

<<<<<<< HEAD
export default PlaidLink;
=======
export default PlaidLink
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac
