# URI链接

## HTTP(s)

访问 HTTP 或 HTTPS 网络资源。

**URI 格式**

```
http://<url>
https://<url>

http://<username>:<password>@<url>
```

**参数**

| 参数         | 说明              |
| ------------ | ----------------- |
| `<url>`      | 完整 URL          |
| `<username>` | Basic Auth 用户名 |
| `<password>` | Basic Auth 密码   |

**示例**

```
http://example.com/resource
http://username:password@example.com/resource
```

## File

访问本地文件系统中的文件。

**URI 格式**

```
file:///absolute/path/to/file
```

**示例**

```
file:///storage/emulated/0/Documents/report.pdf
```

## Assets

访问应用 assets 目录中的文件。

**URI 格式**

```
assets:///relative/path
```

**示例**

```
assets:///config.json
assets:///data/test.txt
```

**等价访问**

```
file:///android_asset/config.json
```

## Base64

解码 Base64 数据并返回原始内容。

**URI 格式**

```
base64://<base64_string>
```

**示例**

```
base64://ZXhhbXBsZQ==
```

结果为 `example`。

## FTP

访问 FTP 文件服务器上的资源。

**URI 格式**

```
ftp://<username>:<password>@<host>:<port>/<path>
```

**参数**

| 参数         | 说明            |
| ------------ | --------------- |
| `<username>` | 用户名          |
| `<password>` | 密码            |
| `<server>`   | 服务器          |
| `<port>`     | 端口（默认 21） |
| `/path`      | 文件路径        |

**示例**

```
ftp://user:123456@ftp.example.com:21/docs/file.txt
ftp://admin:pass@192.168.1.1/data/logs.txt
```

## SMB

访问 SMB 文件共享。基于 **SMB2 / SMB3** 协议（通过 smbj 自动协商）。

**URI 格式**

```
smb://<username>:<password>@<host>:<port>/<share>/<path>
```

**参数**

| 参数         | 说明             |
| ------------ | ---------------- |
| `<username>` | 用户名           |
| `<password>` | 密码             |
| `<host>`     | 主机地址         |
| `<port>`     | 端口（默认 445） |
| `<share>`    | 共享名称         |
| `<path>`     | 文件路径         |

**示例**

```
smb://user:pass@192.168.1.10/media/movie/info.json
```

## Gitee Gist

访问 Gitee 代码片段。

**URI 格式**

```
gitee-gist://<gist_id>:<access_token>@<filename>$base64=1
```

**参数**

| 参数             | 说明                           |
| ---------------- | ------------------------------ |
| `<gist_id>`      | Gitee Gist ID                  |
| `<access_token>` | 访问令牌                       |
| `<filename>`     | 文件名                         |
| `$base64`        | 是否以 Base64 编码（1 表示是） |

**示例**

```
gitee-gist://123456:token456@example.txt$base64=1
```

> [!WARNING]
> Gitee Gist 不支持 Emoji 等特殊字符，建议使用 Base64 编码。

## GitHub Gist

访问 GitHub 代码片段。

**URI 格式**

```
github-gist://<gist_id>:<access_token>@<filename>$base64=1
```

**参数**

| 参数             | 说明                           |
| ---------------- | ------------------------------ |
| `<gist_id>`      | GitHub Gist ID                 |
| `<access_token>` | 访问令牌                       |
| `<filename>`     | 文件名                         |
| `$base64`        | 是否以 Base64 编码（1 表示是） |


**示例**

```
github-gist://abcdef:token123@example.txt$base64=1
```

> [!WARNING]
> GitHub Gist 会对文件内容进行敏感信息扫描。为了避免误触发安全检测，建议使用 Base64 编码。

## JavaScript

执行 JavaScript 代码并返回结果。

**URI 格式**

```
javascript://<js_code_uri>?<query_params>
```

**参数**

| 参数             | 说明                                                                         |
| ---------------- | ---------------------------------------------------------------------------- |
| `<js_code_uri>`  | 支持任意的 URI，如 `http://example.com/script.js` 或 `assets://script.js` 等 |
| `<query_params>` | 传递给 JS 的参数，可通过 `params` 对象在 JS 中访问。                         |

**示例**

```
javascript://assets://script.js?foo=123&bar=abc
```

在 JS 代码中，可以通过 `params` 对象访问查询参数：

```javascript
export function main() {
  return `foo: ${params.foo}; bar: ${params.bar}`;
}
```
