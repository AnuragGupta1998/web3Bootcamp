import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

async function getBalance() {
  const balance = await client.getBalance({
    address: "0x80FC3170429721EC6E59407286Bf7a26b5066BE5",
  });
  return balance;
}

function TanstackViewLibrary() {
  const query = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
    refetchInterval: 5 * 1000,
  });
  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.error) {
    return <div>Error: {query.error.message}</div>;
  }
  return <div>Balance: {query.data}</div>;
}

export default TanstackViewLibrary;
