### 一、NFS服务
在 Alpine Linux 上设置 NFS 服务器相对简单。以下是基本步骤：

1. **安装 NFS 软件包**：
   首先，你需要安装 NFS 服务器相关的包。运行以下命令：

   ```sh
   apk add nfs-utils
   ```

2. **创建共享目录**：
   选择一个目录作为 NFS 共享目录，例如 `/mnt/nfs_share`，并创建它：

   ```sh
   mkdir -p /mnt/nfs_share
   ```

   设置适当的权限（例如，允许所有人读取和写入）：

   ```sh
   chmod 777 /mnt/nfs_share
   ```

3. **配置 NFS 导出**：
   编辑 `/etc/exports` 文件，添加你的共享目录和访问控制。例如，允许所有主机访问：

   ```sh
   /mnt/nfs_share *(rw,sync,no_subtree_check)
   ```

4. **启动 NFS 服务**：
   启动 NFS 服务并设置开机自启动：

   ```sh
   rc-service nfs start
   rc-update add nfs
   ```

5. **验证 NFS 服务**：
   使用以下命令检查 NFS 服务状态：

   ```sh
   rpcinfo -p
   ```

6. **客户端挂载（可选）**：
   如果你需要在其他机器上挂载 NFS 共享，使用以下命令：

   ```sh
   mount -t nfs <server_ip>:/mnt/nfs_share /mnt/nfs_client
   ```

   替换 `<server_ip>` 为 NFS 服务器的 IP 地址。

### 二、samba服务
在 Alpine Linux 上设置 Samba 服务的步骤如下：

1. **安装 Samba 软件包**：
   首先，安装 Samba 相关的包：

   ```sh
   apk add samba
   ```

2. **创建共享目录**：
   创建一个要共享的目录，例如 `/mnt/samba_share`：

   ```sh
   mkdir -p /mnt/samba_share
   ```

   设置适当的权限：

   ```sh
   chmod 777 /mnt/samba_share
   ```

3. **配置 Samba**：
   编辑 Samba 配置文件 `/etc/samba/smb.conf`，添加共享设置。下面是一个基本示例：

   ```ini
   [global]
       workgroup = WORKGROUP
       server string = Samba Server
       netbios name = alpine
       security = user

   [samba_share]
       path = /mnt/samba_share
       browsable = yes
       writable = yes
       guest ok = yes
       read only = no
   ```

4. **创建 Samba 用户**（如果需要）：
   如果你想使用用户名和密码访问共享，可以创建一个 Samba 用户：

   ```sh
   smbpasswd -a username
   ```

   替换 `username` 为你希望使用的用户名。

5. **启动 Samba 服务**：
   启动 Samba 服务并设置开机自启动：

   ```sh
   rc-service samba start
   rc-update add samba
   ```

6. **验证 Samba 服务**：
   使用以下命令检查 Samba 服务状态：

   ```sh
   smbstatus
   ```

7. **客户端访问**：
   在 Windows 或其他系统上，你可以通过网络浏览器访问 Samba 共享，或在文件管理器中输入 `\\<server_ip>\samba_share` 进行访问。