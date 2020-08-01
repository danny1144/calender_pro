## 支持vue3

```
安装vue-router使用命令行
vue add vue-router@next
安装vuex使用命令行
vue add vuex@next
安装sass使用命令行
vue add  sass --dev
vue add vue-next
vue-router，vuex 更新到最新
```
***存在300ms点击延迟问题，在某些机型或者浏览器上，当使用click事件时候，click会延迟300ms,然后才执行，解决办法：引入一个fastclick库***
```
vue add fastclick 
import fastClick from 'fastclick'
fastClick.attach(document.body)

```

##  watch


