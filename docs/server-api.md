# API接口

API接口默认端口为 `10481`，若当前端口被占用，应用会自动切换到随机端口。

## 获取全部配置

**GET** `/api/configs/all`

**响应示例**

```json
{
  "appAgreementAgreed": true,
  "appLanguage": "ZH_CN",
  "appStartScreen": "Dashboard",
  "appBootLaunch": true,
  "appPipEnable": false,
  ...
}
```

## 修改全部配置

**POST** `/api/configs/all`

**请求示例**

```json
{
  "appAgreementAgreed": true,
  "appLanguage": "ZH_CN",
  "appStartScreen": "Dashboard",
  "appBootLaunch": true,
  "appPipEnable": false,
  ...
}
```

**响应示例**

```
200 OK
```

## 获取单个配置

**GET** `/api/configs/{configKey}`

**参数**

| 参数        | 说明         |
| ----------- | ------------ |
| `configKey` | 配置项的键值 |

**响应示例**

```
configValue
```

## 修改单个配置

**GET** `/api/configs/{configKey}?value={configValue}`

**参数**

| 参数          | 说明         |
| ------------- | ------------ |
| `configKey`   | 配置项的键值 |
| `configValue` | 配置项的值   |

**响应示例**

```
configValue
```

## 推送参数

**POST** `/api/push`

**请求示例**

```json
http://example.com/live.m3u8
```

**响应示例**

```
200 OK
```

## 获取同步数据

**GET** `/api/sync/data?all={true|false}`

**参数**

| 参数  | 说明                                 |
| ----- | ------------------------------------ |
| `all` | 是否获取全部同步数据，默认为 `false` |

**响应示例**

```json
{
  "version": "3.7.6",
  "syncAt": 1773370473169,
  "syncFrom": "MuMu D001 (D001)",
  ...
}
```

## 推送同步数据

**POST** `/api/sync/data`

**PUT** `/api/sync/data`

**请求示例**

```json
{
  "version": "3.7.6",
  "syncAt": 1773370473169,
  "syncFrom": "MuMu D001 (D001)",
  ...
}
```

**响应示例**

```
200 OK
```

## 下载日志文件

**GET** `/api/logs`

**响应示例**

```
日志文件流
```

## 上传文件

**POST** `/api/upload/file`

以 `multipart/form-data` 格式上传文件。文件字段名为 `file`。

**请求示例**

```
文件二进制流
```

**响应示例**

```
/data/user/0/.../files/upload/1700000000000
```

## 上传APK

**POST** `/api/upload/apk`

以 `multipart/form-data` 格式上传APK文件。文件字段名为 `file`。上传完成后会自动安装APK。

**请求示例**

```
APK文件二进制流
```

**响应示例**

```
200 OK
```

## 获取服务列表

**GET** `/api/services`

**响应示例**

```json
[
  {
    "name": "DeviceA",
    "port": 8080,
    "description": "Demo service"
  }
]
```

## 注册服务

**POST** `/api/services/register`

**请求示例**

```json
{
  "name": "DeviceA",
  "port": 8080,
  "description": "Demo service"
}
```

**响应示例**

```
200 OK
```
