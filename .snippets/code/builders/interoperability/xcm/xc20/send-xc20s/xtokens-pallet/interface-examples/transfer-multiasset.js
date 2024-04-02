import { ApiPromise, WsProvider } from '@polkadot/api';

const asset = {
  V3: {
    id: {
      Concrete: {
        parents: INSERT_PARENTS,
        interior: INSERT_INTERIOR,
      },
    },
    fun: {
      Fungible: { Fungible: INSERT_AMOUNT_TO_TRANFER },
    },
  },
};
const dest = {
  V3: {
    parents: INSERT_PARENTS,
    interior: INSERT_INTERIOR,
  },
};
const destWeightLimit = { Unlimited: null };

const main = async () => {
  const api = await ApiPromise.create({
    provider: new WsProvider('INSERT_WSS_ENDPOINT'),
  });
  const tx = api.tx.xTokens.transferMultiasset(asset, dest, destWeightLimit);
  const txHash = await tx.signAndSend('INSERT_ACCOUNT_OR_KEYRING');
};

main();