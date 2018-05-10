# egg-demo

a egg study demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

#### 部署过程

```
$ cd baseDir
$ npm install --production
$ tar -zcvf ../release.tgz .

```

- 开发人员local环境可如下操作
```
$ git clone https:///github...
$ cnpm install --production
$ npm run start
$ npm run stop  //windows环境不能杀死，需要找到pid后手动杀死
```
- windows手动杀死node进程
```
netstat -aon | findstr "8080" 
tasklist | findstr "4456" 
taskkill /pid 4456 /F 
tasklist | findstr "4456" 
```

### 抓包调试模式

框架还提供了 egg-development-proxyagent 插件来方便开发者调试。
先安装和开启插件：
```
$ npm i egg-development-proxyagent --save
// config/plugin.js
exports.proxyagent = {
  enable: true,
  package: 'egg-development-proxyagent',
}
```
开启抓包工具，可以用 charles 或 fiddler，此处我们用 anyproxy 来演示下。
```
$ npm install anyproxy -g
$ anyproxy --port 8888
```
使用环境变量启动应用：(windows cmd) // 如果是https需要配置CA
```
$ set http_proxy=http://127.0.0.1:8888 
$ npm run dev
```
然后就可以正常操作了，所有经过 HttpClient 的请求，都可以在 http://localhost:8002 这个控制台中查看到。
