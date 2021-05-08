# <font size=3>云与海的`live2d`插件</font>

- 欢迎访问我的博客：<a href="https://qidaink.github.io/" target="_blank">云与海</a> 查看效果。

# <font size=3>1.安装插件</font>

```shell
cd hexo-site
npm install hexo-qidaink-live2d
```

# <font size=3>2.配置插件</font>

&emsp;&emsp;在站点根目录中的站点配置文件中添加以下内容。

```yaml
myliverd:
  enable: true    # 是否开启live2d
  local: false    # true为本地引用，false为cdn链接引用,此时下边的cdnPath才生效
  cdnPath: "https://xxx/live2d-widget/autoload.js"  # CDN链接，可改为自己的CDN链接
```

&emsp;&emsp;注意：若使用本地引用，则此插件中的函数依赖`@next-theme/utils`文件，所以在安装上述插件后`hexo g`生成静态文件的时候可能报如下错误。

```shell
err: Error: Cannot find module '@next-theme/utils'
```

&emsp;&emsp;这表示缺少`@next-theme/utils`模块，使用以下命令安装即可。

```shell
cd hexo-site
npm install @next-theme/utils
```

# <font size=3>3.参考项目</font>

参考以下大佬项目

<table>
    <tr>
        <td align="center">项目作者</td>
        <td align="center">项目链接</td>
    </tr>
    <tr>
        <td align="center">stevenjoezhang</td>
        <td align="left"><a href="https://github.com/stevenjoezhang/live2d-widget" target="_blank">https://github.com/stevenjoezhang/live2d-widget</td>
    </tr>
    <tr>
        <td align="center">akilar店长</td>
        <td align="left"><a href="https://github.com/Akilarlxh/live2d_api" target="_blank">https://github.com/Akilarlxh/live2d_api</td>
    </tr>
    <tr>
        <td align="center">fghrsh(原作者)</td>
        <td align="left"><a href="https://github.com/fghrsh/live2d_api" target="_blank">https://github.com/fghrsh/live2d_api</td>
    </tr>
<table>
