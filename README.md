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
$ npm run stop
```