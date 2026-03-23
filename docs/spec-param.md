# 特殊参数

## 格式1

用于在 URI 的片段部分（#后）中携带特殊配置参数，不影响 URI 主体及查询串的正常使用。

```
<scheme>://<path>?query#sp;<param1>=<value1>;<param2>=<value2>...
```

**示例**

```
http://example.com/resource?query#sp;param1=value1;param2=value2
```

## 格式2

在 URI 的查询参数中使用特定前缀（如 `_sp_`）来标识特殊参数，格式如下：

```
<scheme>://<path>?_sp_<param1>=<value1>&_sp_<param2>=<value2>...
```

**示例**

```
http://example.com/resource?_sp_param1=value1&_sp_param2=value2
```

## 格式3

URI链接中可以使用 `$` 分隔符来指定特殊参数，格式如下：

```
<scheme>://<path>$<param1>=<value1>$<param2>=<value2>...
```

**示例**

```
http://example.com/resource$param1=value1$param2=value2
```

## 常见特殊参数

| 参数名称              | 参数值                                               | 说明                                                        |
| --------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| `hash`                | 任意URI                                              | 用于判断链接内容是否发生变化                                |
| `cache-time`          | 任意值                                               | 用于指定缓存时间，单位为小时                                |
| `base64`              | 1、0                                                 | 是否将内容进行 Base64 编解码                                |
| `ua`                  | User-Agent 字符串                                    | 用于指定请求的 User-Agent 字符串                            |
| `cookies`             | Cookie 字符串                                        | 用于指定请求的 Cookie 字符串                                |
| `http-`               | 任意值                                               | 用于指定 HTTP 头部字段，格式：`http-HeaderName=HeaderValue` |
| `player`              | media3、ijk、mpv、system、webview                    | 指定播放器                                                  |
| `display-mode`        | ORIGINAL、FILL、CROP、FOUR_THREE、SIXTEEN_NINE、WIDE | 指定显示模式                                                |
| `dsoft-decode-prefer` | 1、0                                                 | 指定是否优先软解                                            |
| `proxy`               | http、socks                                          | 指定代理服务器                                              |
| `cl-` `vp-`           |                                                      | 指定链接、播放器参数                                        |
