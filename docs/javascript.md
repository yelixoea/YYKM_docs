# JavaScript

## 基础框架

```javascript
(() => {
  // 这里是你的代码
})();
```

```javascript
(async () => {
  // 这里是你的代码
})();
```

```javascript
export function main() {
  // 这里是你的代码
}
```

```javascript
export async function main() {
  // 这里是你的代码
}
```

```javascript
import 'lib/crypto-js.js' // 导入内置包
import 'http://example.com/your-lib.js' // 导入外部包

export function main() {
  // 这里是你的代码
}
```

## 常用API

### Fetcher

- 获取URI链接内容，支持所有 [URI链接](./uri.md)：

```javascript
/**
 * fetch(url: string): Promise<string>
 * 
 * @param {string} url - 订阅源链接，支持所有URI链接
 * @returns {Promise<string>} - 订阅源内容
 */
(async () => {
  yykm.fetch('http://example.com/iptv.m3u8')
    .then(content => {
      console.log(content)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

- 修改URI链接内容，支持所有 [URI链接](./uri.md)：

```javascript
/**
 * modify(url: string, content: string): Promise<string>
 * 
 * @param {string} url - 订阅源链接，支持所有URI链接
 * @param {string} content - 订阅源内容
 * @returns {Promise<string>} - 修改后的订阅源内容
 */
(async () => {
  yykm.modify('http://example.com/iptv.m3u8', content)
    .then(content => {
      console.log(content)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

### Http

- GET

```javascript
/**
 * get(url: string, params: Map<string, any> | null, headers: Map<string, string> | null, specParams: Map<string, string> | null): Promise<string>
 * 
 * @param {string} url - 请求链接
 * @param {Map<string, any> | null} params - 请求参数
 * @param {Map<string, string> | null} headers - 请求头
 * @param {Map<string, string> | null} specParams - 特殊参数
 * @returns {Promise<string>} - 响应内容
 */
(async () => {
  yykm.get('http://example.com/api/data', null, null, null)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

- POST

```javascript
/**
 * post(url: string, params: Map<string, any> | null, headers: Map<string, string> | null, body: string | null, specParams: Map<string, string> | null): Promise<string>
 * 
 * @param {string} url - 请求链接
 * @param {Map<string, any> | null} params - 请求参数
 * @param {Map<string, string> | null} headers - 请求头
 * @param {string | null} body - 请求体
 * @param {Map<string, string> | null} specParams - 特殊参数
 * @returns {Promise<string>} - 响应内容
 */
(async () => {
  yykm.post('http://example.com/api/data', null, null, '{"key":"value"}', null)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

- PUT

```javascript
/**
 * put(url: string, params: Map<string, any> | null, headers: Map<string, string> | null, body: string | null, specParams: Map<string, string> | null): Promise<string>
 * 
 * @param {string} url - 请求链接
 * @param {Map<string, any> | null} params - 请求参数
 * @param {Map<string, string> | null} headers - 请求头
 * @param {string | null} body - 请求体
 * @param {Map<string, string> | null} specParams - 特殊参数
 * @returns {Promise<string>} - 响应内容
 */
(async () => {
  yykm.put('http://example.com/api/data', null, null, '{"key":"value"}', null)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

- PATCH

```javascript
/**
 * patch(url: string, params: Map<string, any> | null, headers: Map<string, string> | null, body: string | null, specParams: Map<string, string> | null): Promise<string>
 * 
 * @param {string} url - 请求链接
 * @param {Map<string, any> | null} params - 请求参数
 * @param {Map<string, string> | null} headers - 请求头
 * @param {string | null} body - 请求体
 * @param {Map<string, string> | null} specParams - 特殊参数
 * @returns {Promise<string>} - 响应内容
 */
(async () => {
  yykm.patch('http://example.com/api/data', null, null, '{"key":"value"}', null)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

- Request

```javascript
/**
 * request(method: string, url: string, params: Map<string, any> | null, headers: Map<string, string> | null, body: string | null, specParams: Map<string, string> | null): Promise<Response>
 * 
 * @param {string} method - 请求方法，如GET、POST、PUT、PATCH等
 * @param {string} url - 请求链接
 * @param {Map<string, any> | null} params - 请求参数
 * @param {Map<string, string> | null} headers - 请求头
 * @param {string | null} body - 请求体
 * @param {Map<string, string> | null} specParams - 特殊参数
 * @returns {Promise<Response>} - 响应内容
 * 
 * Response对象包含以下属性：
 * - code: number - 响应状态码
 * - headers: Map<string, string> - 响应头
 * - body: string - 响应体
 */
(async () => {
  yykm.request('PATCH', 'http://example.com/api/data', null, null, '{"key":"value"}', null)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
})();
```

## 内置包

- crypto-js
```javascript
import 'lib/crypto-js.js'

export function main() {
    // ===== Hash =====
  CryptoJS.MD5(text)
  CryptoJS.SHA1(text)
  CryptoJS.SHA224(text)
  CryptoJS.SHA256(text)
  CryptoJS.SHA384(text)
  CryptoJS.SHA512(text)
  CryptoJS.RIPEMD160(text)

  // ===== HMAC =====
  CryptoJS.HmacMD5(text, key)
  CryptoJS.HmacSHA1(text, key)
  CryptoJS.HmacSHA256(text, key)
  CryptoJS.HmacSHA512(text, key)

  // ===== AES =====
  const aesEnc = CryptoJS.AES.encrypt(text, key).toString()
  const aesDec = CryptoJS.AES.decrypt(aesEnc, key).toString(CryptoJS.enc.Utf8)

  // ===== DES =====
  const desEnc = CryptoJS.DES.encrypt(text, key).toString()
  const desDec = CryptoJS.DES.decrypt(desEnc, key).toString(CryptoJS.enc.Utf8)

  // ===== TripleDES =====
  const tdesEnc = CryptoJS.TripleDES.encrypt(text, key).toString()
  const tdesDec = CryptoJS.TripleDES.decrypt(tdesEnc, key).toString(CryptoJS.enc.Utf8)

  // ===== Rabbit =====
  const rabbitEnc = CryptoJS.Rabbit.encrypt(text, key).toString()
  const rabbitDec = CryptoJS.Rabbit.decrypt(rabbitEnc, key).toString(CryptoJS.enc.Utf8)

  // ===== RC4 =====
  const rc4Enc = CryptoJS.RC4.encrypt(text, key).toString()
  const rc4Dec = CryptoJS.RC4.decrypt(rc4Enc, key).toString(CryptoJS.enc.Utf8)

  // ===== Base64 =====
  const wordArray = CryptoJS.enc.Utf8.parse(text)
  const base64 = CryptoJS.enc.Base64.stringify(wordArray)
  const parsed = CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8)
}
```
