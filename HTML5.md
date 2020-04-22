标签语义化
    1、<header>头部标签</header> <nav>导航标签</nav> <article>内容标签</article> <section>块级标签</section> <aside>侧边栏标签</aside> <footer>尾部标签</footer>  ie9中需要转换为块级元素
    2、多媒体标签   
        视频标签   chrome禁用自动播放的功能
        <video src="" controls="controls"(向用户显示控件) autoplay="autoplay" (自动播放);muted="muted"(解决chrome不自动播放的问题) loop="loop"(循环播放) width height preload(auto none  是否预先加载，如果有autoplay则这个属性无效) poster="图片地址"(加载等待的画面图片)>
            <source src="" type="video/mp4">  <!--提供多个视频格式,也可以把src放在video标签中-->  
            <source src="" type="video/ogg">   <!--提供多个视频格式-->
        </video>  
        音频标签  chrome禁用自动播放的功能
        <audio src="" autoplay="autoplay"(自动播放) controls="controls"(向用户显示控件) loop="loop"(循环播放)>
            <source src="" type="audio/mpeg">  <!--提供多个音频格式,也可以把src放在audio标签中-->  
            <source src="" type="audio/ogg">   <!--提供多个音频格式-->
        </audio>
    3、表单标签
        type    email url date time month week number tel search color  主要新增移动端的支持 
        required="required"  必填属性
        placeholder="请输入" 提示信息
        autofocus="autofocus" 自动获得焦点
        autocomplete = "on" or "off"  默认打开  同时必须加上name属性,且提交成功的情况下  一般都设置成off
        multiple = "multiple" 可以多选文件提交

CSS3相关  主要新增对于移动端的支持
    1、属性选择器   类选择器、属性选择器、伪类选择器的权重为10
        E[att]  选择具有att属性的E元素
        E[att="val"] 选择具有att属性且属性值等于val的E元素
        E[att^="val"] 匹配具有att属性、且值以val开头的E元素
        E[att$="val"] 匹配具有att属性、且值以val结尾的E元素
        E[att*="val"] 匹配具有att属性、且值中还有val的E元素
    2、结构伪类选择器
        E:first-child 匹配父元素中的第一个子元素E
        E:last-child 匹配父元素中的最后一个E元素
        E:nth-child(n) 匹配父元素中的第n个子元素E  不管子元素是否为同一种类类型
        E:first-of-type 指定类型E的第一个
        E:last-of-type 指定类型E的最后一个
        E:nth-of-type(n) 指定类型E的第n个

        n可以是
        关键字(odd(奇数)even(偶数))
        数字
        公式(n是从0开始,第0个或者超出的个数都被忽略)  例如 2n 2n+1 5n n+5 -n+5


其他 
    按钮禁用  disabled = "disabled"

