# 使用说明

## 1 纯JavaScript前端使用

### 1.1 引入
```html
<script src="hmtime/dist/hmtime.min.js"></script>
```
一旦这个文件被引入，那么`Date`对象就拥有方法`ago()`
并且`Date`对象的`format`方法就支持自定义格式化了.

### 1.2 使用
#### 得到指定时间与当前时间的距离
```javascript
var d1 = new Date("2018-5-12 13:34:12");
var ago = d1.ago(); 
```
返回d1时间对象表示的时间与当前时间的距离是多久之前.
刚刚
几分钟之前
几小时之前
几天之前
几个月之前
几年之前

#### 以指定格式得到日期字符串
* y: 年
* M: 月
* d: 日
* H: 24小时制的小时
* h: 12小时制的小时
* m: 分钟
* s: 秒
* S: 毫秒
```javascript
var d2 = new Date();
d2.format("yyyy-MM-dd HH:mm:ss");
```
## 2. nodejs或者其他模块化开发中的使用
### 1. 安装
```
npm install hmtime --save
```

### 2. 使用
#### 2.1 返回指定时间相对于现在时间多久之前
```javascript
//首先加载包
require("hmtime");
//只要包被加载,那么Date对象就有1个ago函数.
var d1 = new Date("2017-5-12 13:34:12");
var ago = d1.ago(); //返回d1对象与当前时间的距离 是多久之前.
//输出:  d1时间相对于当前时间 是多久之前
```
#### 2.2 以指定格式得到日期字符串
* y: 年
* M: 月
* d: 日
* H: 24小时制的小时
* h: 12小时制的小时
* m: 分钟
* s: 秒
* S: 毫秒

```javascript
var d2 = new Date();
d2.format("yyyy-MM-dd HH:mm:ss");
```
