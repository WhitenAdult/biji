emment语法(提高开发效率)：
div+tab   div*4   ul>li*4   dl>dt+dd   .demo   #demo   用$符号  .demo$*3
CSS作用：
设置HTML页面中的文本内容版面的布局和外观显示样式
使用CSS的方式：
  1、内联样式  通过style属性来设置元素的样式  多组用分号隔开,用:不用=
  2、内嵌样式表  写在head中,并且用style标签定义
     <style type = "text/css">
        选择器 {
          属性1：属性值1;
          ......
        }
     </style>
  3、外链式  放在一个或多个CSS文件中    通过link引入，放在head中   可实现样式共享
      <link rel="stylesheet" type="text/css" href="style.css" />
  4、代码风格： 一般展开格式，全部用小写

CSS外观属性：
  1、color：预定义颜色(red,blue....)  十六进制(#000000为黑色 #FFFFFF为白色  可以简写,如#FFF)  RGB代码(rgb(255,0,0)或者rgb(100%,0%,0%))   可以用FScapture吸取颜色
  2、line-height：文本水平对齐方式   left、right、center  (盒子里面的内容对齐,而不是盒子对齐)
    基线到基线的距离为行高 单行文本垂直居中：行高等于盒子的高度   行高>盒子高度 偏下   反之
  3、text-align：行间距   一般行间距比字号大7-8个px
  4、text-indent：首行缩进   一般用em(字符宽度的倍数)作为单位   1em就是一个汉字的宽度
  5、text-decoration：文本的装饰
    none(什么都没有,一般用来取消下划线),underline(下划线),overline(上划线),line-through(删除线)

选择器：
  作用：找到特定的HTML页面元素
  1、基础选择器
    1)标签选择器:不能进行差异化选择，只能选择大类
    2)类选择器(.)：
      不要用纯数字和中文命名
      多类名用空格隔开
    3)id选择器(#):
      类选择器和id选择器的区别： id是唯一的(常用于与JS搭配使用)，class可以重复调用
    4)通配符选择器(*):  选择所有标签(降低页面响应速度,不建议随便使用)
  2、复合选择器
    1、后代选择器(重点)  父级 子级{属性:属性值;属性:属性值;.....}
    2、子元素选择器      用 > 表示  只选择最近的一级
    3、交集选择器        用 . 表示  p.one(.one的段落标签)    一般不用
    4、并集选择器(重点)  用 , 表示   表示和
    5、链接伪类选择器
      a:link(未访问的链接),a:visited(已访问的链接),a:hover(鼠标移动到链接上).a:active(点击不松开)   尽量lvha的顺序写 属于交集选择器

字体样式：
  1、font-size：字体大小  基本使用px作为单位  一般给body定义字体大小16px
  2、font-family：字体
    多个值时，用逗号隔开。从左往右一个个往下找直到找到字体，如果没有则用电脑自带的。
    可以用unicode设置，要加引号
  3、font-weight：字体粗细
    normal、bold、100-900(400=normal,700=bold)
  4、font-style: 是否倾斜
    normal、italic
  5、合体写法：
    选择器 {font: font-style font-weight font-size/line-height font-family }  必须保留font-size和font-family

标签类型
  1、块级元素(block)    div,h1-h6,p,ul,ol,li   显示模式：dispaly:block
    特点：独占一行;height、width、margin、padding都可以控制;width默认是(父级宽度的)100%;是一个容器,内部可以放行内或者块级元素
    例外：p,h,dt等里面不能放块级元素,只有文字才能组成它们
  2、行内元素(inline)   a,strong,b,em,i,del,s,ins,u,span     显示模式：dispaly:inline
    特点：一行可放多个行内元素;宽高设置无效;默认宽度为其本身宽度;行内元素里只能放文本和其他行内元素
    注意：a中不能在放a;特殊情况a里可以放块级元素(需要转换成块级元素)
  3、行内块元素(inline-block)   img,input,td    显示模式：dispaly:inline-block
    特点：可以对它们设置宽高和对齐属性以及内外边距;默认宽度为其本身宽度;和相邻的行内元素之间有空白缝隙

CSS背景：
  1、background-color   transparent(默认,透明)或者直接写颜色
  2、background-image   none(默认)或者url(图片链接,不用加引号)
  3、background-repeat  repeat(默认,平铺),no-repeat,repeat-x(横向平铺),repeat-y(纵向平铺)
  4、background-position(重点)  可混用
    1、精确值    x坐标(左到右变大),y坐标(上到下变大)  顺序不能变，如果只写一个值，则表示x坐标，y居中
    2、方位名词  top,center,bottom,left,center,right  要写两个值，与顺序无关，如果只写一个值，另一个值默认居中对齐
  5、background-attachment(背景附着)   fixed(背景固定)  scroll(滚动,默认的)

  合体写法 background {}

