一、Vuex
1、本质：组件之间共享数据
2、优点：1) 集中管理数据，易于维护   2) 高效的数据调用  3) 数据都是响应式的
3、 1) store：
       state：存储store对象数据  this.$store.state.**    mapState:计算属性 ...mapState(['**'])  展开运算符，映射
       mutations：不能直接操作state中的数据，必须通过mutation进行操作。 this.$store.commit('**'); 
       带形参： EX. add(state, **, ** ,.....)
       方法    ...mapMuatations(['**'])，可直接调用
       在mutation中不能执行异步操作
       actions：用于处理异步操作   this.$store.dispatch('**')    action->mutation->state
       通过context.commit('')  提交mutation修改state中的数据   setTimeout 延时函数
       带形参： 和mutations一致
       方法：  ...mapActions(['**']),可直接调用
       getters：加工store中的数据，但不会改变store中本身的数据，类似计算属性；同样具有响应式。
       this.$store.getters.***
       计算属性: ...mapGetters(['**'])



二、Vue 概念
1、属于渐进式框架   声明式渲染->组件系统->客户端路由->集中式状态管理->项目构建
   el：元素的挂载位置   data：模型数据    插值表达式    通过vue框架编译vue代码转化为原生代码让浏览器能够识别
   属于前端渲染
2、MVVM模式


三、Vue 指令
1、指令的本质就是自定义属性
2、v-cloak (解决闪动问题) 原理：先隐藏，只显示最终数据 
   用法：提供样式 [v-cloak]{ display:none }   <div v-cloak></div>
3、v-text 适用纯文本，比v-cloak更好用
4、v-html 显示html内容 ，但是很容易遭受xss攻击，慎重使用
5、v-pre  显示原始信息，不经过vue框架编译
6、v-once 只编译一次，不再响应式，可以提高性能
7、v-model 数据双向绑定    实际上就是 v-bind(绑定value) + v-on(input方法)
   表单域修饰符：number(转成number)  trim(去掉前后的空格)  lazy(input(有变化就触发)->change(失去焦点))    EX. v-model.number
8、v-on: 或者 @ 事件绑定 
   传参(事件对象) $event, 默认是第一个参数，如果有其它参数，必须放在最后面
   事件修饰符：  .stop 组织冒泡    .prevent 阻止默认行为   可以串联使用
   按键修饰符： keyup.enter 
   自定义按键修饰符： 每一个按键都有一个固定的keycode。   
   config.keyCodes.'自定义名字' = '一个固定的keycode'
9、v-bind: 或者 : 属性绑定
10、v-bind：class 样式绑定 
    两种 1、对象语法  使用{键值对，键值对，......}    2、数组语法 [] 使用多个class时用 
    可以结合使用   [{},{},{},.....]   默认class会保留  使用简化处理
    v-bind:style 用法和class一样    使用简化处理
11、分支结构
    v-if  v-else  v-else-if   是否渲染
    v-show   渲染出来没有显示 (display:none)   性能好
12、循环结构
    v-for    v-for = '(item, index) in fruits'
    可以添加key 帮助vue区分不同的元素，从而提高性能

    遍历对象    原生JS用 for in      vue  v-for = (v,k,i) in obj
    v-if和v-for可以一起使用
13、自定义指令
    

