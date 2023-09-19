# capacitor-plugin-aes256

Native AES256 crypto for Capacitor

## Install

```bash
npm install capacitor-plugin-aes256
npx cap sync
```

## API

<docgen-index>

* [`encrypt(...)`](#encrypt)
* [`decrypt(...)`](#decrypt)
* [`generateSecureKey(...)`](#generatesecurekey)
* [`generateSecureIv(...)`](#generatesecureiv)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

The AES256 encryption plugin.

### encrypt(...)

```typescript
encrypt(options: { secureKey?: string; iv?: string; value: string; }) => Promise<{ response: string; }>
```

Encrypts a value using secureKey and iv options.

| Param         | Type                                                             | Description                   |
| ------------- | ---------------------------------------------------------------- | ----------------------------- |
| **`options`** | <code>{ secureKey?: string; iv?: string; value: string; }</code> | - The options for encryption. |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------


### decrypt(...)

```typescript
decrypt(options: { secureKey?: string; iv?: string; value: string; }) => Promise<{ response: string; }>
```

Decrypts the given value using secureKey and iv.

| Param         | Type                                                             | Description               |
| ------------- | ---------------------------------------------------------------- | ------------------------- |
| **`options`** | <code>{ secureKey?: string; iv?: string; value: string; }</code> | - The decryption options. |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------


### generateSecureKey(...)

```typescript
generateSecureKey(options: { password: string; }) => Promise<{ response: string; }>
```

Generates a secure key based on the provided password.

| Param         | Type                               | Description           |
| ------------- | ---------------------------------- | --------------------- |
| **`options`** | <code>{ password: string; }</code> | - The options object. |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------


### generateSecureIv(...)

```typescript
generateSecureIv(options: { password: string; }) => Promise<{ response: string; }>
```

Generates a secure initialization vector (IV) using the provided password.

| Param         | Type                               | Description                              |
| ------------- | ---------------------------------- | ---------------------------------------- |
| **`options`** | <code>{ password: string; }</code> | - The options to generate the secure IV. |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------

</docgen-api>
