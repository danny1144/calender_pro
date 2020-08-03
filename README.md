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

- 整体展示
  - 当日
    -  card
       - weekday(周几) lunar农历  date(具体日期)
    - list
       - year-month当前年月 animalsYear今年属相 lunarYear农历年名 suit适宜事件 avoid避免事件 
  - 近期
    -  card
       -  name节日 festival放假日 desc假期描述 rest拼假建议 
  - 当年
    -  card
       -  name 节日 startday开始时间  

**矢量库**
https://www.iconfont.cn/search/index?searchType=icon&q=calendar