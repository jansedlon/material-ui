import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import createEmotionCache from './createEmotionCache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

// For emotion to correctly pickup styles, the CacheProvider need to be in entry.client.tsx
hydrate(
  <CacheProvider value={clientSideEmotionCache}>
    <RemixBrowser />
  </CacheProvider>
, document);
