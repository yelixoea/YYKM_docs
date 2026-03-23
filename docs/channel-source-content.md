# 订阅源格式

## 简易格式

```
http://example.com/stream1

// 使用 $ 分隔符指定线路名称
http://example.com/stream2$线路2

// 指定UA
http://example.com/stream3$ua=okhttp

// 指定播放器
http://example.com/stream4$player=ijk
```

## M3U 格式

```
#EXTM3U

// 设置多个节目单，支持x-tvg-url或url-tvg
#EXTM3U x-tvg-url="https://example.com/tvguide.xml"
#EXTM3U url-tvg="https://example.com/tvguide2.xml"

// 支持多个节目单，逗号分隔
#EXTM3U url-tvg="https://example.com/tvguide3.xml, https://example.com/tvguide4.xml"

// 设置全局回放参数
#EXTM3U catchup="append" catchup-source="?stime=${(b)yyyyMMddHHmmss}&etime=${(e)yyyyMMddHHmmss}"

// 设置全局UA
#EXTM3U http-user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"

#EXTINF:-1 tvg-id="channel1" tvg-name="Channel 1" tvg-logo="https://example.com/logo1.png" group-title="分组1",Channel 1
https://example.com/stream1

// 同一频道支持多个分组
#EXTINF:-1 group-title="分组1; 分组A",Channel 2
https://example.com/stream2

// 同一频道支持多条线路
#EXTINF:-1 group-title="分组1",Channel 3
https://example.com/stream3$线路1
https://example.com/stream3$线路2

// 分组密码
#EXTINF:-1 group-title="分组2_123",Channel 4
https://example.com/stream4

// 方式1 设定参数
#EXTINF:-1 group-title="分组1" http-user-agent="okhttp",Channel 5
https://example.com/stream5

// 方式2 设定参数
#EXTINF:-1 group-title="分组1",Channel 6
#KODIPROP:http-user-agent=okhttp
#YYKMPROP:http-user-agent=okhttp
https://example.com/stream6

// 方式3 设定参数
#EXTINF:-1 group-title="分组1",Channel 6
https://example.com/stream6$http-user-agent=okhttp

// DRM参数
#EXTINF:-1 group-title="分组1",Channel 7
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=0958b9c657622c465a6205eb2252b8ed:2d2fa7b1661b1e28de38268872b48480
https://example.com/stream7

// http参数
#EXTINF:-1 group-title="分组1",Channel 8
#YYKMPROP:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3
#YYKMPROP:http-cookies=example_cookie=value; another_cookie=another_value
#YYKMPROP:http-header-Referer=https://example.com
#YYKMPROP:http-header-Authorization=Bearer some
#YYKMPROP:http-Referer=https://example.com
#YYKMPROP:http-Authorization=Bearer some
https://example.com/stream8

// 回放参数
#EXTINF:-1 group-title="分组1",Channel 9
#YYKMPROP:catchup=default
#YYKMPROP:catchup-source=https://example.com/catchup/${(b)yyyyMMddHHmmss}/${(e)yyyyMMddHHmmss}
https://example.com/stream9
```

## TXT 格式

```
分组1,#genre#
Channel 1,http://example.com/stream1

// 线路名称使用 $ 分隔符指定
Channel 2,http://example.com/stream2$线路2

// 同一频道支持多条线路，使用 # 分隔符指定
Channel 3,http://example.com/stream3$线路1#http://example.com/stream3$线路2

// 支持分组密码
分组2_123,#genre#
Channel 4,http://example.com/stream4
Channel 5,http://example.com/stream5

// 支持分组参数
分组3,#genre#,ua=okhttp#player=ijk
Channel 6,http://example.com/stream6
```
