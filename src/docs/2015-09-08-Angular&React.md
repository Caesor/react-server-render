---
layout: blog
title: React学习笔记
categories: font-end
tags: react
---
##说在前面

###MVC
模型 Model：保存数据

视图 View：用户界面

控制器 Controller：业务逻辑

通信方式：

1、View 传送指令到 Controller

2、Controller 要求 Model 改变状态 

3、Model 将新数据发到 View，用户得到反馈 

实例： backbone.js

###MVVM
MVVM将 Controller 变成了 ViewModel

1、各部分都是双向通信

2、View 和 Model不发生联系，都通过 ViewModel 传递

实例：Angular、Ember

##