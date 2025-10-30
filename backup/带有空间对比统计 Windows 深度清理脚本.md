
### 🧹【deep_clean.bat】最终版 —— 带空间统计的深度清理脚本

```bat
@echo off
title Windows 深度清理工具
color 0a
echo ================================================
echo         Windows 深度清理工具 (管理员模式)
echo ================================================
echo.

:: 检查管理员权限
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo 请右键以管理员身份运行此脚本！
    pause
    exit
)

:: ===============================
:: 获取清理前的可用空间
:: ===============================
for /f "tokens=3" %%a in ('wmic logicaldisk where "DeviceID='C:'" get FreeSpace /value ^| find "="') do set FreeBefore=%%a
set /a FreeBeforeGB=%FreeBefore:~0,-9%

echo 💾 清理前可用空间：%FreeBeforeGB% GB
echo.

echo [1/12] 正在关闭临时文件占用进程...
taskkill /f /im explorer.exe >nul 2>&1

echo [2/12] 清理 Windows 临时目录...
rd /s /q %windir%\Temp >nul 2>&1
md %windir%\Temp >nul 2>&1

echo [3/12] 清理当前用户临时目录...
rd /s /q "%temp%" >nul 2>&1
md "%temp%" >nul 2>&1

echo [4/12] 清理系统更新缓存 (SoftwareDistribution)...
net stop wuauserv >nul 2>&1
rd /s /q %windir%\SoftwareDistribution\Download >nul 2>&1
net start wuauserv >nul 2>&1

echo [5/12] 清理日志文件...
for /d %%i in ("%windir%\Logs\*") do rd /s /q "%%i" >nul 2>&1
del /f /s /q %windir%\*.log >nul 2>&1

echo [6/12] 清理 Windows 错误报告...
rd /s /q %ProgramData%\Microsoft\Windows\WER >nul 2>&1

echo [7/12] 清理 Prefetch 缓存...
rd /s /q %SystemRoot%\Prefetch >nul 2>&1
md %SystemRoot%\Prefetch >nul 2>&1

echo [8/12] 清理 Edge、IE 缓存...
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255

echo [9/12] 清理回收站...
rd /s /q %systemdrive%\$Recycle.bin >nul 2>&1

echo [10/12] 清理旧系统更新包 (WinSxS)...
Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase

echo [11/12] 清理 Windows Defender 缓存...
rd /s /q "%ProgramData%\Microsoft\Windows Defender\Scans\History" >nul 2>&1

echo [12/12] 清理下载目录中大文件 (>500MB)...
forfiles /p "%userprofile%\Downloads" /m *.* /c "cmd /c if @fsize gtr 524288000 del /f /q @path" >nul 2>&1

echo.
echo ✅ 清理完成！正在重新启动资源管理器...
start explorer.exe
echo.

:: ===============================
:: 获取清理后的可用空间
:: ===============================
for /f "tokens=3" %%a in ('wmic logicaldisk where "DeviceID='C:'" get FreeSpace /value ^| find "="') do set FreeAfter=%%a
set /a FreeAfterGB=%FreeAfter:~0,-9%

:: ===============================
:: 计算释放空间
:: ===============================
set /a Freed=%FreeAfterGB% - %FreeBeforeGB%

echo ================================================
echo 💾 清理前空间：%FreeBeforeGB% GB
echo 💾 清理后空间：%FreeAfterGB% GB
if %Freed% geq 0 (
    echo 🌟 本次共释放空间：%Freed% GB
) else (
    echo ⚠️ 空间变化过小或无法统计
)
echo ================================================
echo.
pause
```
