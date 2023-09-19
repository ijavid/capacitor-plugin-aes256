import { registerPlugin } from '@capacitor/core';

import type { AES256Plugin } from './definitions';

const AES256 = registerPlugin<AES256Plugin>('AES256', {
  web: () => import('./web').then(m => new m.AES256Web()),
});

export * from './definitions';
export { AES256 };
