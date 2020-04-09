一、AJAX
    优点：实现页面无刷新更新数据，提高用户体验。 实际上就是浏览器代理
    应用场景： 上拉加载数据，列表无刷新分页，表单失去焦点验证，下拉列表
二、AJAX实现
    创建对象   var xhr = new XMLHttpRequest();
    请求方式   xhr.open('methods','distance');
    发送请求   xhr.send();
    获取响应数据 xhr.onload = function(){  //xhr.responseText  } 默认返回的是字符串
    JSON.parse() 将json字符串转化为json对象

    GET请求方式 使用params拼接字符串，在请求地址后加 '?+params'    不能提交json对象作为参数
    post请求方式  在send前必须设置请求头信息    xhr.setRequestHeader( 'Content-Type','application/    x-www-form-urlencoded')  如果传递的内容是字符串类型并且使用&链接的话。
    application/json  可以用json对象转换为json字符串作为参数  JSON.stringify({xxx:xxx,xxx:xxx})
    发送的表单内容 写在send(params);

三、ajax状态码 (过时)
    xhr.readyState //获取状态码    0(创建对象),1(进行配置open),2(请求发送),3(部分数据接收),4(全部接收完成)
    xhr.onreadystatechange = function() {}   当状态码变化时触发

四、ajax错误处理
    xhr.status //获取http状态码
    if(xhr.status === 400){.......} 一般前端传参错误
    404   一般为请求地址错误
    500   一般后端出错
    断网状况下  不执行onload方法  xhr.onerror = function() } {   }

五、低版本IE浏览器缓存问题
    在请求参数中添加一个不用的参数名     例如：t = Math.random();

六、ajax异步编程
七、ajax封装
    ajax({
        type:'***',
        url:'****',
        data:'*****',
        sucess:function(data){
            
        }
    })
    function ajax(options) {
        var xhr = new XMLHttpReuqest();
        xhr.open(options.type, options.url);
        xhr.send();
        xhr.onload = function(){
            options.sucess(xhr.responseText);
        }
    }
    
    

