# 订阅源链接

支持以下格式：`http(s)`、`file`、`assets`、`ftp(s)`、`smb`、`gitee-gist`、`github-gist`、`javascript`。

```
http://example.com/iptv.m3u
file:///storage/emulated/0/Download/iptv.m3u
assets:///iptv.m3u
ftp://admin:pass@192.168.1.1/data/iptv.m3u
smb://admin:pass@192.168.1.1/data/iptv.m3u
gitee-gist://abc123:token456@gist-file.txt
github-gist://abc123:token456@gist-file.txt
javascript://<<<http://example.com/generate-iptv.js>>>
```

## 链接参数

订阅源链接支持以下参数：`cache-time`、`ua`、`proxy`、`vp-ua`、`vp-proxy`等。

| 参数名     | 参数值           | 备注                                                    |
| ---------- | ---------------- | ------------------------------------------------------- |
| cache-time | 整数             | 订阅源缓存时间，单位为小时，0表示不缓存，-1表示永久缓存 |
| ua         |                  | 拉取订阅源时使用的User-Agent                            |
| proxy      | http、socks      | 拉取订阅源时使用的代理地址                              |
| vp-ua      |                  | 播放链接时使用的User-Agent                              |
| vp-proxy   | http、socks      | 播放链接时使用的代理地址                                |
| vp-player  | media3、ijk、mpv | 播放链接时指定播放器                                    |


## 链接生成器

<script setup>
import { ref, computed } from 'vue'

const rawUri = ref('')
const cacheTime = ref('6')
const ua = ref('')
const proxy = ref('')
const vpUa = ref('')
const vpProxy = ref('')

const generatedUri = computed(() => {
  let uri = rawUri.value

  if (cacheTime.value.trim()) {
    uri += `\$cache-time=${cacheTime.value.trim()}`
  }
  if (ua.value.trim()) {
    uri += `\$ua=${ua.value.trim()}`
  }
  if (proxy.value.trim()) {
    uri += `\$proxy=${proxy.value.trim()}`
  }
  if (vpUa.value.trim()) {
    uri += `\$vp-ua=${vpUa.value.trim()}`
  }
  if (vpProxy.value.trim()) {
    uri += `\$vp-proxy=${vpProxy.value.trim()}`
  }
  return uri
})
</script>

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <div>
    <label :class="$style.label">订阅源链接：</label>
    <input v-model="rawUri" placeholder="请输入订阅源链接" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">缓存时间（小时）：0表示不缓存。-1表示永久缓存。</label>
    <input v-model="cacheTime" placeholder="请输入缓存时间" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">拉取User-Agent：</label>
    <input v-model="ua" placeholder="请输入拉取User-Agent" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">拉取代理地址：</label>
    <input v-model="proxy" placeholder="请输入拉取代理地址" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">播放User-Agent：</label>
    <input v-model="vpUa" placeholder="请输入播放User-Agent" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">播放代理地址：</label>
    <input v-model="vpProxy" placeholder="请输入播放代理地址" :class="$style.input" />
  </div>

  <div>
    <label :class="$style.label">生成的订阅源链接：</label>
    <textarea
      :value="generatedUri"
      readonly
      :class="$style.input"
      style="height: auto; min-height: 5rem;"
    ></textarea>
  </div>
</div>

<style module>
.input {
  width: 100%;
  border: 1px solid #1f293733;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
}

.label {
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1f2937;
}
</style>
