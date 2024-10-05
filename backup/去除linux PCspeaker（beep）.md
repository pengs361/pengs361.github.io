The PC speaker can be disabled by unloading the pcspkr and snd_pcsp kernel modules:
Note: This will not disable your entire sound system, only the PC speaker.
```
rmmod pcspkr
rmmod snd_pcsp
```
Blacklisting the pcspkr and snd_pcsp modules will prevent udev from loading them at boot. Create the file:

**/etc/modprobe.d/nobeep.conf**
```
blacklist pcspkr
blacklist snd_pcsp
```
引用
[https://wiki.archlinux.org/title/PC_speaker][1]


  [1]: https://wiki.archlinux.org/title/PC_speaker