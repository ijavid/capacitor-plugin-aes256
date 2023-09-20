/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    AES256?: {
      /**
       * The secure key to be used for encryption.
       */
      secureKey?: string;
      /**
       * The initialization vector to be used for encryption.
       */
      secureIv?: string;
    };
  }
}

/**
 * The AES256 encryption plugin.
 */
export interface AES256Plugin {
  /**
   * Encrypts a value using secureKey and iv options.
   *
   * @param {Object} options - The options for encryption.
   * @param {string=} options.secureKey - The secure key to be used for encryption. Optional.
   * @param {string=} options.iv - The initialization vector to be used for encryption. Optional.
   * @param {string} options.value - The value to be encrypted.
   *
   * @returns {Promise} A promise that resolves to an object with the encrypted response.
   * The encrypted response is represented by the 'response' property in the returned object.
   */
  encrypt(options: { secureKey?: string, iv?: string, value: string }): Promise<{response: string}>;

  /**
   * Decrypts the given value using secureKey and iv.
   *
   * @param {Object} options - The decryption options.
   * @param {string} [options.secureKey] - The secure key used for decryption.
   * @param {string} [options.iv] - The initialization vector used for decryption.
   * @param {string} options.value - The value to be decrypted.
   *
   * @return {Promise} A promise that resolves with an object containing the decrypted response.
   *                   - response: The decrypted value.
   */
  decrypt(options: { secureKey?: string, iv?: string, value: string }): Promise<{response: string}>;

  /**
   * Generates a secure key based on the provided password.
   *
   * @param {Object} options - The options object.
   * @param {string} options.password - The password used to generate the secure key.
   * @returns {Promise<Object>} A promise that resolves with an object containing the generated secure key.
   * @throws {Error} If the provided options parameter is missing or invalid.
   */
  generateSecureKey(options: { password: string }): Promise<{response: string}>;

  /**
   * Generates a secure initialization vector (IV) using the provided password.
   *
   * @param {Object} options - The options to generate the secure IV.
   * @param {string} options.password - The password used to generate the secure IV.
   *
   * @return {Promise<Object>} A promise that resolves to an object containing the generated secure IV.
   * @return {string} response - The generated secure IV.
   */
  generateSecureIv(options: {password: string}): Promise<{response: string}>;
}
