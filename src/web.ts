import { WebPlugin } from '@capacitor/core';

import type { AES256Plugin } from './definitions';

export class AES256Web extends WebPlugin implements AES256Plugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
