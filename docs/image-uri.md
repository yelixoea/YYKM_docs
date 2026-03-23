# 图片链接

支持协议如下：`http(s)`、`file`、`base64`。

## Base64

使用 Base64 编码的字符串表示图片数据。

**URI 格式**

```
data:<mediatype>;base64,<base64_encoded_data>
```

**参数**

| 参数                    | 说明                                   |
| ----------------------- | -------------------------------------- |
| `<mediatype>`           | 可选，图片的 MIME 类型，如 `image/png` |
| `<base64_encoded_data>` | 必需，Base64 编码的图片数据            |

**示例**

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAA...  // 嵌入 PNG 图片
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAA...     // 嵌入 JPG 图片
```
