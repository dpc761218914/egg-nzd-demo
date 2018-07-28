# nzd-demo



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



### 使用指南

```
   1、配置nzdconfig/nzd_config.js
   2、根据java后端的接口文件生成nzd_services文件夹中的opt,注意interface是java文件的完整包名，方法和java文件的方法也需要一致，注意参数也是需要和java的参数一致。
   3、在controller(使用services)引入dubbo，将dubbo中调用方法，后端方法以map为主。
```
