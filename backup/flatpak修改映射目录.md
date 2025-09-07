在 Flatpak 中映射目录可以通过多次使用 `--filesystem` 选项来实现，无论是临时运行还是永久配置都适用。以下是具体方法：


### **1. 临时映射多个目录（单次运行）**
运行应用时，对每个需要映射的目录单独使用 `--filesystem` 参数：
```bash
# 示例：同时映射 Documents、Pictures 目录（只读）和 Downloads 目录（可读写）
flatpak run \
  --filesystem=~/Documents \
  --filesystem=~/Pictures \
  --filesystem=~/Downloads:rw \
  应用ID
```

如果需要映射系统级目录（如 `/mnt/external`），同样可以按同样方式添加：
```bash
flatpak run \
  --filesystem=/mnt/external \
  --filesystem=~/Projects:rw \
  应用ID
```


### **2. 永久映射多个目录（全局生效）**
使用 `flatpak override` 命令，对每个目录重复 `--filesystem` 选项：
```bash
# 永久添加多个目录映射
flatpak override \
  --filesystem=~/Music \
  --filesystem=~/Videos:rw \
  --filesystem=/data/shared \
  应用ID
```

如需**取消某个目录的永久映射**，可单独移除：
```bash
flatpak override --unset-filesystem=~/Music 应用ID
```