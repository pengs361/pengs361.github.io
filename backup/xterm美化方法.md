1、在用户目录下面新建文件.Xresource
2、文件内容
```
! TrueType font
UXTerm*faceName: DejaVu Sans Mono
XTerm*faceName: DejaVu Sans Mono
! Chinese
UXTerm*faceNameDoublesize: Noto Sans CJK SC
XTerm*faceNameDoublesize: Noto Sans CJK SC
! font size
UXTerm*faceSize: 10
XTerm*faceSize: 10
! color
UXTerm*background: black
UXTerm*foreground: lightgreen
XTerm*background: black
XTerm*foreground: lightgreen

UXTerm*geometry: 120x35+500+250
UXTerm*metaSendsEscape: true
UXTerm*eightBitInput: false
UXTerm*selectToClipboard: true
UXTerm*locale: zh_CN.UTF-8
Uxterm*utf8: true
Uxterm*utf8Title: true

XTerm*geometry: 120x35+500+250
XTerm*metaSendsEscape: true
XTerm*eightBitInput: false
XTerm*selectToClipboard: true
XTerm*locale: zh_CN.UTF-8
xterm*utf8: true
xterm*utf8Title: true
```
3、最后执行命令

    xrdb -merge ./.Xresources