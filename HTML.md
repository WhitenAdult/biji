一、Web标准     W3C 万维网联盟规定    由结构(主要为HTML)、表现(主要为CSS)、行为(主要为JS)构成
   浏览器内核包括渲染引擎(主要)和JS引擎(次要)

二、HTML
    超文本标记语言 标记语言 标记标签(不是编程语言)
    骨架
    <html>
      <head>
        <title></title>
      </head>
      <body></body>
    </html>
    常规元素(双标签) 如 <body></body> 空元素(单标签) 如 <br />
    ! 或者 html:5 快速生成骨架   字符集最好使用 UTF-8   先确定语义
    标题标签   <h1></h1> - <h6></h6>
    段落标签   <p></p>
    水平线标签 <hr />
    换行标签   <br />
    盒子标签   <div></div>(块级元素) <span></span>(行内元素)
    加粗标签   <b></b> <strong></strong>(推荐，语义更强烈)
    斜体标签   <i></i> <em></em>(推荐)
    加删除线标签   <s></s> <del></del>(推荐)
    下划线标签     <u></u> <ins></ins>(推荐)
    图像标签   <img />   标签属性： src alt(不能显示图片的时候显示的文字) title(鼠标移上去的时候显示的文字) width height border等等
    链接标签 <a></a>  标签属性  href:包括外部链接,内部链接,空链接(#) target:_blank或者_self(默认)等等
    注释标签 <!-- ***** -->   一般放在注释放在前面，单独占一行   ctrl + /

    相对路径： 同一级：直接输入文件名称    下一级：例如 images/timg.jpg  上一级：../
    绝对路径： 直接复制文件路径(不常用)，可以用于网络地址

    锚点：用id名标注需要导航的位置  点击href的值为("#"+id)的值
    base标签：<base />   在head中增加base标签   全体链接都在新窗口打开 <base target = "_blank"/>
    pre标签：<pre></pre>  预格式化文本     会保留代码中的格式 保留空格和换行等 (一般不用)
    特殊字符： 空格：&nbsp;   小于号：&lt;   大于号：&gt;   所有特殊字符必须分号结尾

三、HTML
    1、表格(主要用来显示数据)
      <table>
        <capiton></caption>(表格标题)
        <tr>
          <th></th> (表头单元格)
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td rowspan="2"></td>
        </tr>
      </table>
      表格属性 border  cellspacing(单元格和单元格边框之间的距离)默认为2px   cellpadding(单元格内容和边框之间的距离)默认为1px width height align(left,center,right)表格在页面中的位置
      合并单元格：跨行合并：rowspan   跨列合并：colspan  先上后下 先左后右  最后删除多余单元格
      thead tbody tfoot  可以用三个标签划分表格结构,更清晰。
    2、列表(页面布局整齐规范,是一个容器，自由度很高)
      1)有序列表(用的很少)
        <ol>
          <li></li>
          <li></li>
        </ol>
      2)无序列表
        ul里只能放标签li li中可以放任何元素
        <ul>  
          <li></li>
          <li></li>
        </ul>
      3)自定义列表
        dd解说dt
        <dl>
          <dt></dt>
          <dd></dd>
          <dd></dd>
          <dd></dd>
          <dd></dd>
        </dl>
    3、表单(收集用户信息)
      表单控件、提示信息、表单域三个部分构成
      表单标签：
      <input />
      标签属性：
      <img src="media/input.png" />
      type text password radio checkbox file butoon reset submit image
      value 指表单控件的内容
      name 表单的唯一标识 用于与后台交互 帮助radio单选 和checkbox多选
      checked 默认选中状态 用于radio和checkbox checked = "checked"
      size 表单宽度
      maxlength 最大字符数

      label标签 
      <label></label> 点击label标签焦点在表单中
      <h4>第一种用法，label直接包含 表单</h4>
	    <label> 用户名： <input type="text" /> </label>
      <h4>第二种方法，通过for 和 id 来控制 </h4>
      <label for="nc"> 昵称： </label>     <input type="text" id="nc" />

      文本域标签
      <textarea></textarea>   col，row标签属性一般不使用，一般用css来修改外观

      下拉列表(一般不用、样式不好改)
      <select>
        <option selected = "selected"></option>
        <option></option>
        <option></option>
      </select>

      表单域
      <form>
      </form>
      标签属性： action(地址)   method(post或者get)  name(区别表单域，表单域唯一标识)

      html元素属性用双引号 js属性用单引号  