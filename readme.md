# 脚手架工具

## 问题

* 每次创建新项目的时候需要重新看着Vue和React的脚手架一个一个敲或者拷贝之前的项目。
* 新工程越来越多，没有一个基础的开发模板，每次都需要一个一个去基于vue cli去做
* 如果从之前项目拷贝就无法获取最新的项目模板，这就导致有些问题明明在最新的模板中已经修复，却在新项目中依然存在
* 配置繁琐、每次开发人员不同，导致每次的配置也都不同。
* 从之前拷贝的项目，每个项目包版本、框架等都不同。
* 代码结构不统一

## 期望

* 能够让开发人员创建新工程时能更加方便和快捷
* 能够统一、同步项目的配置，方便维护与开发。
* 能够完成一些公共模块、公共库建设在基础模板上
* 统一平台的代码结构

## 维护

1. 维护流程

* vue模板维护地址：```
* react模板维护地址：``

1. 基础命令

* 发布前更新包-npm version minor
* 发布包-npm publish
* 删除包-npm unpublish 包名@版本号
* 删除整个包-npm unpublish 包名 --force

## 运行

1. `npm install self-cli -g`
2. 命令 `self-cli init [projectName]`
3. `[projectName]` = 创建的项目名称

---
