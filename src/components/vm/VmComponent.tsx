import { useBosLoaderStore } from '@/stores/bos-loader';
import { useVmStore } from '@/stores/vm';

import { Spinner } from '../lib/Spinner';

import CircularProgress from '@mui/material/CircularProgress'

type Props = {
  src: string;
  props?: Record<string, unknown>;
};

export function VmComponent(props: Props) {
  let thisthing = useVmStore()
  console.log('thisthing', thisthing)
  const { EthersProvider, ethersContext, Widget } = useVmStore();
  const redirectMapStore = useBosLoaderStore();
  console.log('ethersprovider', EthersProvider)
  console.log('redirectMapstore', redirectMapStore)
  console.log('props here', props)
  console.log('Widget', Widget)
  if (!EthersProvider || !redirectMapStore.hasResolved) {
    return <CircularProgress />;
  }

  return (
    <EthersProvider value={ethersContext}>
      <Widget
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
        {...props}
      />
    </EthersProvider>
  );
}
