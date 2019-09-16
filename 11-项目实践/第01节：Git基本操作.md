# 第01节：Git的基本操作

### 同步远程仓库
1. 创建一个空的远程仓库：登录github =》 new repository
2. 初始化本地仓库
3. 编辑文件
4. 编辑区添加到暂存区：git add .
5. 暂存区提交到分支：git commit -m "备注"
6. 创建远程主机名：git remote
7. 同步远程仓库：git push -u origin master
8. 克隆项目：git clone url
9. 拉取项目代码: git pull

### 团队协作

1. 项目拥有者进入项目的settings选项 =》 Collaborators =》 添加项目成员
2. 给成员发送邀请链接，程序需要确认。此后项目成员可以使用自己的用户名和密码同步此项目。
3. 在开发web项目的过程中，每个成员需要创建一个自己的分支，在自己分支上开发，没有问题在合并到master分支。

### 分支管理

1. 查看分支:git branch，默认只有master分支
2. 创建分支 git branch teacher，创建teacher分支
3. 切换分支：git checkout teacher 
4. 在自己分支上修改文件并提交。
5. 合并分支：切换至master分支，git merge dev
6. 本地分支推送至远程分支:git push origin feature-branch:feature-branch
7. 远程分支拉倒本地：git checkout -b feature-branch origin/feature-branch

### 切换版本

1. 查看历史记录：git log
2. 恢复版本：git reset --hard <版本号>，版本号写前几位就可以
3. 查看命令记录：git reflog

### markdown常用格式

``` js
// 标题：井号的个数表示不同级别的标题
// 段落：直接写文字
// 列表：*：无需列表，数字：有序列表
// 链接：[title](url)
// 图片:![text](url)
// 表格:|---|---|上表头，下表体
// 兼容html
```