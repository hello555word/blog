 
 
 
 function serializeToJson(form) {
            var result = {}
            // serializeArray()获取表单项所有内容
            // name:'email',value:'密码'
            var f = form.serializeArray();
            f.forEach(function(item){
                // email:"mima "
                result[item.name]=item.value;
                return result
            })
        }