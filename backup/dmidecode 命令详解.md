
`dmidecode` 是一个用于提取计算机硬件信息的命令行工具，它通过读取 DMI (Desktop Management Interface) 表来获取系统硬件信息。

## 基本用法

```bash
sudo dmidecode [选项]
```

需要 root 权限，因为需要访问底层硬件信息。

## 常用选项

- `-t` 或 `--type`：指定要显示的信息类型
- `-s` 或 `--string`：显示特定的 DMI 字符串
- `-H` 或 `--handle`：显示指定句柄的记录
- `-u` 或 `--dump`：显示未解码的原始条目
- `--dump-bin`：将 DMI 数据转储到二进制文件
- `--from-dump`：从二进制文件读取 DMI 数据

## 主要信息类型

使用 `-t` 参数可以指定以下类型：

| 类型编号 | 类型名称           | 描述                     |
|----------|--------------------|--------------------------|
| 0        | BIOS               | BIOS 信息                |
| 1        | System             | 系统信息                 |
| 2        | Baseboard          | 主板信息                 |
| 3        | Chassis            | 机箱信息                 |
| 4        | Processor          | CPU 信息                 |
| 5        | Memory Controller  | 内存控制器信息           |
| 6        | Memory Module      | 内存模块信息             |
| 7        | Cache              | 缓存信息                 |
| 8        | Port Connector     | 端口连接器信息           |
| 9        | System Slots       | 系统插槽信息             |
| 10       | On Board Devices   | 板载设备信息             |
| 11       | OEM Strings        | OEM 字符串               |
| 12       | System Configuration| 系统配置选项            |
| 13       | BIOS Language      | BIOS 语言信息            |
| 14       | Group Associations | 组关联信息               |
| 15       | System Event Log   | 系统事件日志信息         |
| 16       | Physical Memory    | 物理内存信息             |
| 17       | Memory Device      | 内存设备信息             |
| 18       | 32-bit Memory Error| 32位内存错误信息         |
| 19       | Memory Array Mapped| 内存阵列映射地址信息     |
| 20       | Memory Device Mapped| 内存设备映射地址信息    |
| 21       | Built-in Pointing Device | 内置指针设备信息 |
| 22       | Portable Battery   | 便携式电池信息           |
| 23       | System Reset       | 系统重置信息             |
| 24       | Hardware Security  | 硬件安全信息             |
| 25       | System Power Controls | 系统电源控制信息      |
| 26       | Voltage Probe      | 电压探头信息             |
| 27       | Cooling Device     | 冷却设备信息             |
| 28       | Temperature Probe  | 温度探头信息             |
| 29       | Electrical Current Probe | 电流探头信息      |
| 30       | Out-of-band Remote Access | 带外远程访问信息 |
| 31       | Boot Integrity Services | 启动完整性服务信息 |
| 32       | System Boot        | 系统启动信息             |
| 33       | 64-bit Memory Error| 64位内存错误信息         |
| 34       | Management Device  | 管理设备信息             |
| 35       | Management Device Component | 管理设备组件信息 |
| 36       | Management Device Threshold Data | 管理设备阈值数据信息 |
| 37       | Memory Channel     | 内存通道信息             |
| 38       | IPMI Device        | IPMI 设备信息            |
| 39       | Power Supply       | 电源信息                 |

## 实用示例

1. **显示所有 DMI 信息**
   ```bash
   sudo dmidecode
   ```

2. **查看 BIOS 信息**
   ```bash
   sudo dmidecode -t bios
   ```

3. **查看系统信息（制造商、型号等）**
   ```bash
   sudo dmidecode -t system
   ```

4. **查看主板信息**
   ```bash
   sudo dmidecode -t baseboard
   ```

5. **查看 CPU 信息**
   ```bash
   sudo dmidecode -t processor
   ```

6. **查看内存信息**
   ```bash
   sudo dmidecode -t memory
   ```

7. **查看内存插槽信息**
   ```bash
   sudo dmidecode -t 17
   ```

8. **查看序列号**
   ```bash
   sudo dmidecode -s system-serial-number
   ```

9. **查看产品名称**
   ```bash
   sudo dmidecode -s system-product-name
   ```

10. **查看 BIOS 版本**
    ```bash
    sudo dmidecode -s bios-version
    ```

## 输出解读

dmidecode 的输出通常包含以下部分：
- **Handle**：DMI 记录的标识符
- **Type**：记录类型编号和名称
- **Size**：记录大小
- **Decoded values**：解码后的信息，包含各种属性和值

## 注意事项

1. 并非所有信息都准确，有些信息可能由制造商提供但未更新
2. 虚拟机上运行的结果可能与物理机不同
3. 某些信息可能需要特定硬件支持
4. 某些敏感信息可能被制造商屏蔽

dmidecode 是系统管理员和硬件故障排除时非常有用的工具，可以快速获取详细的硬件配置信息。