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
        type    email url date time month week number tel search color  主要用于移动端 
        required="required"  必填属性
        placeholder="请输入" 提示信息
        autofocus="autofocus" 自动获得焦点
        autocomplete = "on" or "off"  默认打开  同时必须加上name属性
        multiple = "multiple" 可以多选文件提交