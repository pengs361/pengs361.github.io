# 🎬 ffmpeg 常用命令大全

## 1️⃣ 基本操作
| 功能 | 命令 | 说明 |
|------|------|------|
| 查看媒体信息 | `ffmpeg -i input.mp4` | 显示视频/音频编码、码率、分辨率、时长等 |
| 显示详细信息 | `ffprobe -i input.mp4 -show_format -show_streams` | 更详细，推荐用 `ffprobe` |

---

## 2️⃣ 转码 / 格式转换
| 功能 | 命令 | 说明 |
|------|------|------|
| AVI → MP4 | `ffmpeg -i input.avi output.mp4` | 自动转 H.264/AAC |
| 强制指定编码 | `ffmpeg -i input.mp4 -c:v libx264 -c:a aac output.mp4` | 指定视频编码 H.264，音频 AAC |
| 保持原始编码 | `ffmpeg -i input.mkv -c copy output.mp4` | 仅封装格式，不重新编码 |

---

## 3️⃣ 视频剪辑
| 功能 | 命令 | 说明 |
|------|------|------|
| 从 30 秒开始，截取 10 秒 | `ffmpeg -ss 00:00:30 -t 10 -i input.mp4 -c copy clip.mp4` | `-c copy` 无需重编码 |
| 从 1 分钟截取到结尾 | `ffmpeg -ss 00:01:00 -i input.mp4 -c copy clip.mp4` | 只设置起始点即可 |
| 精准截取（需重编码） | `ffmpeg -ss 30 -t 10 -i input.mp4 output.mp4` | 如果起点不是关键帧，需解码 |

---

## 4️⃣ 音频处理
| 功能 | 命令 | 说明 |
|------|------|------|
| 提取音频 | `ffmpeg -i input.mp4 -vn -acodec copy output.aac` | 去掉视频 |
| 视频替换音频 | `ffmpeg -i input.mp4 -i new_audio.mp3 -map 0:v -map 1:a -c:v copy -c:a aac output.mp4` | 保持原视频，换音频 |
| 调整音量（2 倍） | `ffmpeg -i input.mp3 -filter:a "volume=2.0" output.mp3` | 音量加倍 |
| 转码为 MP3 | `ffmpeg -i input.wav -codec:a libmp3lame -b:a 192k output.mp3` | 常见压缩 |

---

## 5️⃣ 视频分辨率与帧率
| 功能 | 命令 | 说明 |
|------|------|------|
| 调整分辨率 | `ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4` | 缩放到 720p |
| 保持比例缩放 | `ffmpeg -i input.mp4 -vf scale=-1:720 output.mp4` | 高度 720，宽度自动算 |
| 修改帧率 | `ffmpeg -i input.mp4 -r 30 output.mp4` | 改为 30fps |

---

## 6️⃣ 视频截图
| 功能 | 命令 | 说明 |
|------|------|------|
| 指定时间截图 | `ffmpeg -ss 00:00:05 -i input.mp4 -vframes 1 shot.jpg` | 第 5 秒一帧 |
| 批量截图（每秒 1 张） | `ffmpeg -i input.mp4 -vf fps=1 img_%03d.jpg` | 命名：img_001.jpg |
| 生成缩略图（3x3） | `ffmpeg -i input.mp4 -vf "select=not(mod(n\,100)),scale=320:240,tile=3x3" thumb.jpg` | 视频预览九宫格 |

---

## 7️⃣ 视频合并
### (1) **同编码视频（无重编码）**
```bash
# 创建文件列表
echo "file 'part1.mp4'" > files.txt
echo "file 'part2.mp4'" >> files.txt

# 合并
ffmpeg -f concat -safe 0 -i files.txt -c copy output.mp4

---

## 8️⃣ 添加字幕
| 功能 | 命令 | 说明 |
|------|------|------|
| 内嵌字幕（烧录） | `ffmpeg -i input.mp4 -vf subtitles=sub.srt output.mp4` | 字幕写入视频画面 |
| 外挂字幕（不重编码） | `ffmpeg -i input.mp4 -i sub.srt -c copy -c:s mov_text output.mp4` | 保留独立字幕流 |

---

## 9️⃣ 压缩与优化
| 功能 | 命令 | 说明 |
|------|------|------|
| 固定码率压缩 | `ffmpeg -i input.mp4 -b:v 1000k -b:a 128k output.mp4` | 控制视频+音频码率 |
| CRF 模式（推荐） | `ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset veryslow -c:a aac -b:a 128k output.mp4` | `crf=18-28`，数值越小质量越高 |
| 去掉音频 | `ffmpeg -i input.mp4 -an output.mp4` | 只保留视频 |

---

## 🔟 高级技巧
| 功能 | 命令 | 说明 |
|------|------|------|
| 给视频加水印 | `ffmpeg -i input.mp4 -i logo.png -filter_complex "overlay=10:10" output.mp4` | 左上角水印 |
| 拼接画中画 | `ffmpeg -i main.mp4 -i small.mp4 -filter_complex "overlay=10:10" output.mp4` | 小窗口嵌入 |
| 双视频对比（左右拼接） | `ffmpeg -i left.mp4 -i right.mp4 -filter_complex hstack output.mp4` | 横向拼接 |
| 倍速播放（2 倍） | `ffmpeg -i input.mp4 -vf "setpts=0.5*PTS" output.mp4` | 视频加速 |
| 慢速播放（0.5 倍） | `ffmpeg -i input.mp4 -vf "setpts=2.0*PTS" output.mp4` | 视频减速 |
