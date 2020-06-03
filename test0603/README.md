# 组件通信的方法

## 一、props / $emit

cpnB 通过 props 向 cpnA "请求" 所需数据，并通过 $emit 向 cpnA "发送"数据。
## 二、provide/ inject

provide/ inject 是vue2.2.0新增的api

在父组件中通过provide来提供变量, 子组件中通过inject注入变量。

不论子组件嵌套有多深, 只要调用了inject 就可以注入provide中的数据。

cpnA 通过 provide 向 cpnB cpnC 提供数据， cpnB cpnC 通过 inject 将数据注入。