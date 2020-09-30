$(function(){
        var $txt = $('#txt1');
        var $btn = $('#btn1');
        var $lu = $('#list');
        var $lu2 = $('#list2');

        var arr = new Array();
        //本来就有信息内容的获取
        $lu.find('.spantext').each(function(){
            arr.push($(this).text());
        })

        $btn.click(function(){
            // 获得输入的值，这个时候已经保存了一份
            var sval  = $txt.val();
            // 清空输入框获得的值，再次点击增加，输入框已经为空了
            $txt.val('');
            // 为空判断
            if(sval==''){
                alert('请输入待办内容');
                return;
            }
            //遍历已有待办事项内容，如内容重复做相应提示
            for(var item in arr){
                if(arr[item]==sval){
                     alert('输入内容重复，请重新输入');
                     return;
                }
            }

            // 定义模板
            var $li = $('<li><input type="checkbox" class="checkbox1"><span class="spantext">'+ sval +'</span><a href="javascript:;" class="del">删除</a></li>');
            //追加一行
             $lu.append($li);
            //将新增事项的内容追加到数组中
             arr.push(sval);

            // 找到li中的del
            var $del = $li.find('.del');
            $del.click(function(){
                // 新增的删除走这里的代码
                $(this).parent().remove();
                //将删除事项的内容从数组中移除
                var index = arr.indexOf("$(this).parent().find('.spantext').text()");
                arr.splice(index,1);
            });

            $('.checkbox1').on("click",function(){
                   if($(this).is(":checked")){
                      $lu2.append($(this).parent());
                   }
                    //$(this).prop('checked', false);
                    $(this).remove();
             });

        });

         //将待办事项勾掉加入到已完成事项中.注意对于jQuery 1.6+：.attr（）不推荐使用属性；使用新的.prop（）函数代替
         $('.checkbox1').on("click",function(){
               if($(this).is(":checked")){
                  $lu2.append($(this).parent());
               }
                //$(this).prop('checked', false);
                $(this).remove();
         });

        // 本来就有的信息删除走这里的代码
        var $del = $('.del');
        $del.click(function(){
            $(this).parent().remove();
        });

})