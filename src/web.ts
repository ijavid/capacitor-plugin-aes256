import { WebPlugin } from '@capacitor/core';

import type { AES256Plugin } from './definitions';

export class AES256Web extends WebPlugin implements AES256Plugin {
  decrypt(options: { secureKey?: string; iv?: string; value: string }): Promise<{ response: string }> {
    console.log('AES256Web decrypt', options);
    return Promise.resolve({response: "MOCK"});
  }

  encrypt(options: { secureKey?: string; iv?: string; value: string }): Promise<{ response: string }> {
    console.log('AES256Web encrypt', options);
    return Promise.resolve({response: "MOCK"});
  }

  generateSecureIv(options: { password: string }): Promise<{ response: string }> {
    console.log('AES256Web generateSecureIv', options);
    return Promise.resolve({response: "MOCK"});
  }

  generateSecureKey(options: { password: string }): Promise<{ response: string }> {
    console.log('AES256Web generateSecureKey', options);
    return Promise.resolve({response: "MOCK"});
  }
}
