import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  home: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  // testnet: {
  //   home: 'vitalpointai.testnet/widget/HelloNEARFixed',
  //   profileImage: 'eugenethedream/widget/ProfileImage',
  //   profileName: 'eugenethedream/widget/ProfileName'
  // },
  testnet: {
    home: 'vitalpointai.testnet/widget/HelloNEARFixed',
   
  },
  // mainnet: {
  //   home: 'gagdiez.near/widget/HelloNear',
  //   profileImage: "mob.near/widget/ProfileImage",
  //   profileName: "patrick.near/widget/ProfileName",
  // },
  mainnet: {
    home: '',
    
  },
};
