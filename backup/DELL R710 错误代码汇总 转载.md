E1422 CPU 1 machine check error . power cycle AC

解决方案：

系统 BIOS 已报告机器检查错误。请断开系统的交流电源 10 秒，然后重新启动系统

附：DELL_LCD错误提示代码

代码 文本 原因
E1000 Failsafe voltage error. Contact support.（故障保护电压错误。请联络支持人员。） 查看系统事件记录以了解严重故障事件。
E1114 Ambient Temp exceeds allowed range.（环境温度超过了许可范围。） 环境温度到了超出许可范围的某个点。
E1116 Memory disabled, temp above range. Power cycle AC.（已禁用内存，温度超出范围。请关闭交流电源再打开。） 内存已超过许可温度，系统已将其禁用以防止组件损坏。
E1210 Motherboard battery failure. Check battery.（母板电池故障。请检查电池。） CMOS 电池丢失，或电压超出许可范围。
E1211 RAID Controller battery failure. Check battery.（RAID 控制器电池故障。请检查电池。） RAID 电池丢失、损坏或因温度问题而无法再充电。
E1216 3.3V Regulator failure. Reseat PCIe cards.（3.3V 稳压器故障。请重置 PCIe 卡。） 3.3V 稳压器出现故障。
E1229 CPU # VCORE Regulator failure. Reseat CPU.（CPU # VCORE 稳压器故障。请重置 CPU。） 特定处理器 VCORE 稳压器出现故障。
E122A CPU # VTT Regulator failure. Reseat CPU.（CPU # VTT 稳压器故障。请重置 CPU。） 特定处理器 VTT 稳压器出现故障。
E122C CPU Power Fault. Power cycle AC.（CPU 电源故障。请关闭交流电源再打开。） 接通处理器电源时检测到电源故障。
E122D Memory Regulator # Failed. Reseat DIMMs.（内存稳压器 # 故障。请重置 DIMM。） 某个内存稳压器出现故障。
E122E On-board regulator failed. Call support.（机载稳压器故障。请联络支持人员。） 某个内置稳压器出现故障。
E1310 Fan ## RPM exceeding range. Check fan.（风扇 ## 转速超出范围。请检查风扇。） 特定风扇的每分钟转数超出预期的操作范围。
E1311 Fan module ## RPM exceeding range. Check fan.（风扇模块 ## 转速超出范围。请检查风扇。） 特定模块中的特定风扇的每分钟转数超出预期的操作范围。
E1313 Fan redundancy lost. Check fans.（风扇冗余丢失。请检查风扇。） 系统中的风扇不再有冗余。如果再次发生风扇故障，系统将存在过热危险。
E1410 System Fatal Error detected.（检测到系统严重错误。） 检测到严重的系统错误。
E1414 CPU # temp exceeding range. Check CPU heatsink.（CPU # 温度超出范围。请检查 CPU 散热器。） 特定处理器已超出可接受的温度范围。
E1418 CPU # not detected. Check CPU is seated properly.（未检测到 CPU #。请检查 CPU 是否正确就位。） 指定的处理器丢失或损坏，系统的配置不受支持。
E141C Unsupported CPU configur-ation. Check CPU or BIOS revision.（CPU 配置不受支持。请检查 CPU 或 BIOS 版本。） 不支持处理器的配置
E141F CPU # protocol error. Power cycle AC.（CPU # 协议错误。请关闭交流电源再打开。） 系统 BIOS 已报告处理器协议错误。
E1420 CPU Bus parity error. Power cycle AC.（CPU 总线奇偶校验错误。请关闭交流电源再打开。） 系统 BIOS 已报告处理器总线奇偶校验错误。
E1422 CPU # machine check error. Power cycle AC.（CPU # 机器检查错误。请关闭交流电源再打开。） 系统 BIOS 已报告机器检查错误。
E1610 Power Supply # (### W) missing. Check power supply.（电源设备 # (### W) 丢失。请检查电源设备。） 特定电源设备已拆卸，或者系统缺失此设备。
E1614 Power Supply # (### W) error. Check power supply.（电源设备 # (### W) 错误。请检查电源设备。） 特定电源设备出现故障。
E1618 Predictive failure on Power Supply # (### W). Check PSU.（电源设备 # (### W) 出现预测故障。请检查 PSU。） 出现电源风扇故障、温度过高的情况，或电源通信错误，导致发出即将发生电源故障的预警。
E161C Power Supply # (### W) lost AC power. Check PSU cables.（电源设备 # (### W) 的交流电源中断。请检查 PSU 电缆。） 已为系统连接上特定电源设备，但没有交流电输入。
E1620 Power Supply # (### W) AC power error. Check PSU cables.（电源设备 # (### W) 交流电源错误。请检查 PSU 电缆。） 特定电源设备的交流电输入超出了许可范围。
E1624 Lost power supply redundancy.Check PSU cables.（丢失电源设备冗余。请检查 PSU 电缆。） 电源设备子系统不再提供冗余。如果其余电源设备错误，系统将关闭。
E1626 Power Supply Mismatch. PSU1 = ### W, PSU2 = ### W.（电源设备不匹配。PSU1 = ### W, PSU2 = ### W。） 系统中的电源设备功率不同。
E1629 Power required > PSU wattage. Check PSU and config.（所需电源功率大于 PSU 功率。请检查 PSU 及配置。） 系统配置要求使用比电源设备可提供的功率数更大的功率，即使存在节流也是如此。
E1710 I/O channel check error. Review & clear SEL.（I/O 通道检查错误。请检查并清除 SEL。） 系统 BIOS 已报告 I/O 通道检查。
E1711 PCI parity error on Bus ## Device ## Function ##（总线 ## 设备 ## 功能 ## PCI 奇偶校验错误） 系统 BIOS 已报告组件发生 PCI 奇偶校验错误，该组件位于总线 ## 设备 ## 功能 ## 的 PCI 配置空间。
PCI parity error on Slot #. Review & clear SEL.（插槽 # 上 PCI 奇偶校验错误。请检查并清除 SEL。） 系统 BIOS 已报告位于指定插槽中的组件发生 PCI 奇偶校验错误。
E1712 PCI system error on Bus ## Device ## Function ##（总线 ## 设备 ## 功能 ## PCI 系统错误） 系统 BIOS 已报告组件发生 PCI 系统错误，该组件位于总线 ## 设备 ## 功能 ## 的 PCI 配置空间。
PCI system error on Slot #. Review & clear SEL.（插槽 # PCI 系统错误。请检查并清除 SEL。） 系统 BIOS 已报告组件发生 PCI 系统错误，该组件位于指定的插槽。
E1714 Unknown error. Review & clear SEL.（未知错误。请检查并清除 SEL。） 系统 BIOS 已确定系统中存在错误，但无法确定错误来源。
E1715 Fatal I/O Error（严重 I/O 错误） Review & clear SEL.（请检查并清除 SEL。） 系统 BIOS 判定系统中存在严重错误。
E1716 Chipset IERR Bus ## Dev ## Function ##. Review & clear SEL.（芯片集 IERR 总线 ## 设备 ## 功能 ##。请检查并清除 SEL。） 系统 BIOS 报告了驻留在总线 ##，设备 ##，功能 ## 中的芯片集内部错误。
E1717 CPU # internal error. Review & clear SEL.（CPU # 内部错误。请检查并清除 SEL。） 系统 BIOS 判定指定处理器发生了内部错误。

E171F PCIe fatal error on Bus ## Device ## Function ##（总线 ## 设备 ## 功能 ## PCIe 致命错误） 系统 BIOS 已报告组件发生 PCIe 致命错误，该组件位于总线 ## 设备 ## 功能 ## 的 PCI 配置空间。
PCIe fatal error on Slot #. Review & clear SEL.（插槽 # PCIe 致命错误。请检查并清除 SEL。） 系统 BIOS 已报告组件发生 PCIe 致命错误，该组件位于指定的插槽。
E1810 Hard drive ## fault. Review & clear SEL.（硬盘驱动器 ## 故障。请检查并清除 SEL。） 指定的硬盘驱动器出现故障。
E1812 Hard drive ## removed. Check drive.（硬盘驱动器 ## 已卸下。请检查驱动器。） 指定的硬盘驱动器已从系统中卸下。
E1A11 PCI Riser hardware & configuration mismatch. Reconfigure.（PCI 提升板硬件与配置不匹配。请重新配置。） PCIe 提升板配置不正确。某些无效的配置会阻止系统通电。

E1A12 PCI Riser not detected. Check Riser.（未检测到 PCI 提升板。请检查提升板。） 丢失一个或两个 PCIe 提升板。这会阻止系统启动。
E1A14 SAS cable A failure. Check connection.（SAS 电缆 A 故障。请检查连接。） SAS 电缆 A 丢失或损坏。
E1A15 SAS cable B failure. Check connection.（SAS 电缆 B 故障。请检查连接。） SAS 电缆 B 丢失或损坏。
E1A1D Control panel USB cable not detected. Check cable.（未检测到控制面板 USB 电缆。请检查电缆。） 连接到控制面板的 USB 电缆丢失或损坏。
E2010 Memory not detected. Inspect DIMMs.（未检测到内存。请检查 DIMM。） 系统中未检测到内存。
E2011 Memory configuration failure. Check DIMMs.（内存配置故障。请检查 DIMM。） 检测到内存，但是内存不可配置。配置内存期间检测到错误。
E2012 Memory configured but unusable. Check DIMMs.（内存已配置，但无法使用。请检查 DIMM。） 内存已配置，但不可用。
E2013 BIOS unable to shadow memory. Check DIMMs.（BIOS 无法存取影子内存。请检查 DIMM。） 系统 BIOS 无法将其快擦写映像复制到内存中。
E2014 CMOS RAM failure. Power cycle AC.（CMOS RAM 故障。请关闭交流电源再打开。） CMOS 出现故障。CMOS RAM 未正常工作。
E2015 DMA Controller failure. Power cycle AC.（DMA 控制器故障。请关闭交流电源再打开。） DMA 控制器出现故障。
E2016 Interrupt Controller failure. Power cycle AC.（中断控制器故障。请关闭交流电源再打开。） 中断控制器出现故障。
E2017 Timer refresh failure. Power cycle AC.（计时器刷新故障。请关闭交流电源再打开。） 计时器刷新故障。

E2018 Programmable Timer error. Power cycle AC.（可编程计时器错误。请关闭交流电源再打开。） 可编程间隔计时器错误。
E2019 Parity error. Power cycle AC.（奇偶校验错误。请关闭交流电源再打开。） 奇偶校验错误。
E201A SuperIO failure. Power cycle AC.（SuperIO 故障。请关闭交流电源再打开。） SIO 出现故障。
E201B Keyboard Controller error. Power cycle AC.（键盘控制器错误。请关闭交流电源再打开。） Keyboard controller failure.（键盘控制器故障。）
E201C SMI initialization failure. Power cycle AC.（SMI 初始化失败。请关闭交流电源再打开。） 系统管理中断 (SMI) 初始化失败。
E201D Shutdown test failure. Power cycle AC.（关闭检测程序失败。请关闭交流电源再打开。） BIOS 关闭检测程序失败。
E201E POST memory test failure. Check DIMMs.（POST 内存检测失败。请检查 DIMM。） BIOS POST 内存检测失败。
E2020 CPU configuration failure. Check screen message.（CPU 配置失败。请检查屏幕信息。） 处理器配置失败。
E2021 Incorrect memory configur-ation. Review User Guide.（内存配置不正确。请参阅用户指南。） 内存配置不正确。
E2022 General failure during POST. Check screen message.（POST 期间一般故障。请检查屏幕信息。） 视频后出现一般故障。
E2023 BIOS unable to mirror memory. Check DIMMs.（BIOS 无法镜像内存。请检查 DIMM。） 由于内存模块发生故障或内存配置无效，系统 BIOS 无法启用内存镜像功能。
E2110 Multibit Error on DIMM ##. Reseat DIMM.（DIMM ## 上多位错误。请重置 DIMM。） 插槽 “##” 中的内存模块已发生多位错误 (MBE)。
E2111 SBE log disabled on DIMM ##. Reseat DIMM.（已禁用 DIMM ## 上的 SBE 日志。请重置 DIMM。） 系统 BIOS 已禁用内存单位错误 (SBE) 记录，在重新引导系统之前，不会再记录更多的 SBE。”##”代表 BIOS 指示的内存模块。
E2113 Mem mirror OFF on DIMM ## & ##. Power cycle AC.（DIMM ## 和 ## 上的内存镜像关闭。请关闭交流电源再打开。） 由于系统 BIOS 确定半数镜像中存在太多错误，因此已禁用内存镜像功能。”## 和 ##”代表 BIOS 指示的内存模块对。
I1910 Intrusion detected. Check chassis cover.（已检测到侵入。请检查机箱护盖。） 系统护盖已卸下。
I1912 SEL full. Review & clear log.（SEL 已满。请检查并清除日志。） SEL 记录的事件已满，无法记录其它内容。
W1228 RAID Controller battery capacity < 24hr.（RAID 控制器的电池容量小于 24 小时。） 预先警告 RAID 电池只剩下不足 24 小时的电量。
W1627 Power required > PSU wattage. Check PSU and config.（所需电源功率大于 PSU 功率。请检查 PSU 及配置。） 系统配置需要使用比电源设备可提供的功率更大的功率。
W1628 Performance degraded. Check PSU and system configur-ation.（性能降级。请检查 PSU 和系统配置。） 系统配置需要使用比电源设备可提供的功率更大的功率，但是如果使用节流功能可以引导。