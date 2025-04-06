`qemu-img` 是一个用于管理虚拟机磁盘镜像的命令行工具，广泛用于虚拟化环境中，支持多种磁盘镜像格式（如 `qcow2`、`raw`、`vmdk` 等）的创建、转换、修改、信息查看等功能。

### 常用命令与选项

#### 1. **`qemu-img create`** - 创建磁盘镜像
用于创建一个新的虚拟磁盘镜像文件。你可以指定镜像的格式、大小等。

```bash
qemu-img create -f <format> <filename> <size>
```

- `-f <format>`：指定磁盘镜像格式（如 `qcow2`, `raw` 等）。
- `<filename>`：要创建的磁盘镜像文件的路径。
- `<size>`：镜像的大小，例如 `10G` 表示 10GB。

**示例**：
```bash
qemu-img create -f qcow2 /path/to/new_disk.qcow2 20G
```
这会创建一个 20GB 大小的 `qcow2` 格式的虚拟磁盘镜像。

#### 2. **`qemu-img convert`** - 转换磁盘镜像格式
用于将一个磁盘镜像从一种格式转换为另一种格式。

```bash
qemu-img convert -f <input_format> -O <output_format> <source_file> <destination_file>
```

- `-f <input_format>`：输入文件的格式（如 `qcow2`, `raw`, `vmdk` 等）。
- `-O <output_format>`：输出文件的格式。
- `<source_file>`：源文件路径。
- `<destination_file>`：目标文件路径。

**示例**：
```bash
qemu-img convert -f qcow2 -O raw /path/to/source.qcow2 /path/to/destination.raw
```
这个命令将 `qcow2` 格式的文件转换为 `raw` 格式的文件。

#### 3. **`qemu-img info`** - 查看磁盘镜像信息
用于查看磁盘镜像的元数据和状态，如格式、大小、虚拟大小等。

```bash
qemu-img info <filename>
```

**示例**：
```bash
qemu-img info /path/to/disk.qcow2
```
这会输出磁盘镜像的详细信息，包括格式、虚拟大小、磁盘实际占用的空间等。

#### 4. **`qemu-img snapshot`** - 管理快照
用于创建、删除和管理虚拟磁盘的快照。快照是虚拟磁盘的一种保存当前状态的方式。

- **创建快照**：
  ```bash
  qemu-img snapshot -c <snapshot_name> <filename>
  ```

- **删除快照**：
  ```bash
  qemu-img snapshot -d <snapshot_name> <filename>
  ```

**示例**：
```bash
qemu-img snapshot -c snapshot1 /path/to/disk.qcow2
```
这个命令会为磁盘镜像 `disk.qcow2` 创建一个名为 `snapshot1` 的快照。

#### 5. **`qemu-img resize`** - 调整磁盘大小
用于改变现有磁盘镜像的大小，通常用于扩展虚拟磁盘的容量。

```bash
qemu-img resize <filename> <new_size>
```

- `<filename>`：要调整大小的磁盘镜像文件。
- `<new_size>`：新磁盘大小。

**示例**：
```bash
qemu-img resize /path/to/disk.qcow2 +10G
```
这会将 `disk.qcow2` 文件的大小增加 10GB。如果你希望设置固定大小，可以使用类似 `20G` 这样的值。

#### 6. **`qemu-img amend`** - 修复和修改镜像
用于修复损坏的镜像，或者在磁盘镜像上应用修改。常用于处理镜像文件损坏或元数据问题。

```bash
qemu-img amend <filename>
```

#### 7. **`qemu-img check`** - 检查镜像
检查磁盘镜像是否有任何问题，验证文件是否损坏。

```bash
qemu-img check <filename>
```

**示例**：
```bash
qemu-img check /path/to/disk.qcow2
```
这个命令会检查磁盘镜像文件 `disk.qcow2` 是否有错误或损坏。

#### 8. **`qemu-img benchmark`** - 基准测试磁盘镜像
用于测试磁盘镜像的性能，特别是在使用压缩和加密的镜像时。

```bash
qemu-img benchmark <filename>
```

**示例**：
```bash
qemu-img benchmark /path/to/disk.qcow2
```
这个命令会进行基准测试，并输出磁盘镜像操作的性能数据。

---

### 常见的磁盘镜像格式

1. **`raw`**：原始磁盘镜像格式，没有额外的元数据或压缩，通常文件较大，但性能最优。
2. **`qcow2`**：QEMU 的 Copy-On-Write（写时复制）格式，支持快照、压缩等特性。适合需要动态磁盘大小和快照功能的虚拟机。
3. **`vmdk`**：VMware 虚拟机磁盘格式。
4. **`vdi`**：VirtualBox 虚拟机磁盘格式。
5. **`vhd`**：Microsoft 虚拟硬盘格式。
6. **`vhdx`**：VHD 格式的扩展版本，支持更大的磁盘和更多的功能。

---

### 总结

- **`qemu-img create`** 用于创建虚拟磁盘镜像。
- **`qemu-img convert`** 用于转换磁盘镜像的格式。
- **`qemu-img info`** 用于查看磁盘镜像的详细信息。
- **`qemu-img snapshot`** 用于管理磁盘镜像的快照。
- **`qemu-img resize`** 用于调整磁盘镜像的大小。
- **`qemu-img check`** 用于检查磁盘镜像的完整性。
- **`qemu-img benchmark`** 用于测试磁盘镜像的性能。

`qemu-img` 是管理虚拟机磁盘镜像的强大工具，支持多种格式和操作，适用于各种虚拟化环境中的磁盘镜像管理任务。