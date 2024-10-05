关闭屏幕.bat  *win7使用已测试*

    powershell (Add-Type '[DllImport(\"user32.dll\")]^public static extern int PostMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::PostMessage(-1,0x0112,0xF170,2)

打开屏幕.vbs *win7使用已测试*

    Set WShell=CreateObject("Wscript.Shell")
    WShell.SendKeys "{F5}"