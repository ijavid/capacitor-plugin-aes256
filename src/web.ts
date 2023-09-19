import { WebPlugin } from '@capacitor/core';

import type { AES256Plugin } from './definitions';

export class AES256Web extends WebPlugin implements AES256Plugin {
  decrypt(options: { secureKey?: string; iv?: string; value: string }): Promise<{ response: string }> {
    console.log('decrypt', options);
    return Promise.resolve({response: ""});
  }

  encrypt(options: { secureKey?: string; iv?: string; value: string }): Promise<{ response: string }> {
    console.log('encrypt', options);
    return Promise.resolve({response: ""});
  }

  generateSecureIv(options: { password: string }): Promise<{ response: string }> {
    console.log('generateSecureIv', options);
    return Promise.resolve({response: ""});
  }

  generateSecureKey(options: { password: string }): Promise<{ response: string }> {
    console.log('generateSecureKey', options);
    return Promise.resolve({response: ""});
  }
}
