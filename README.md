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

### 注意的坑

```
   1、配置nzdconfig/nzd_config.js文件中的application名称不是java工程名，是dubbo的工程名，ip为服务器端ip，端口为zookeeper的端口。
       //配置项目名称
       application:'edu_exam_provider',
       //配置项目ip
       register:'192.168.17.214:2181',
       //配置dubbo版本号
       dubboVer:'2.5.10',
       
   2、根据java后端的接口文件生成nzd_services文件夹中的opt,注意interface是java文件的完整包名，方法和java文件的方法也需要一致，注意参数也是需要和java的参数一致。
   3、在controller(使用services)引入dubbo，将dubbo中调用方法，后端方法以map为主。
```

