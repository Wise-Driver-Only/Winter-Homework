function obj2str(obj){
    var res = [];
    for(var key in obj){
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));
    }
    return res.join("&");
}
function ajax (type,url,obj,success,error){
    var str = obj2str(obj);
    var xmlhttp=new XMLHttpRequest();
    if(type === "GET"){
        xmlhttp.open(type,url+"?"+str,true);
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState === 4){
                if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status===304){
                    success(xmlhttp);
                }
                else{
                    error(xmlhttp);
                }
            }
        }
        xmlhttp.send();
    }
    else{
        xmlhttp.open(type,url,true);
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState === 4){
                if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status===304){
                    success(xmlhttp);
                }
                else{
                    error(xmlhttp);
                }
            }
        }
        xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlhttp.send(str);
    }
}

function appendTo (source,target){
    for(var i=0;i<target.length;i++){
        var targetEle = target[i];
        for(var j=0;j<source.length;j++){
            var sourceEle = source[j];
            // if(j === 0){
            //     targetEle.appendChild(sourceEle);
            //  }
            //  else{
            //     var temp = sourceEle.cloneNode(true);
            //     targetEle.appendChild(temp);
            //  }
            if(i === 0){
                targetEle.appendChild(sourceEle);
             }
             else{
                var temp = sourceEle.cloneNode(true);
                targetEle.appendChild(temp);
             }
        }
     }
}
   
function hasclass(name){
    var flag = false;
    if(arguments.length === 0){
        return flag;
    }else{
        this.each(function(key,ele){
            var className = " "+ele.className+" ";
            name = " "+name+" ";
            if(className.indexOf(name) != -1){
                flag = true;
                return false;
            }
        })
    }
    var div = document.querySelector("name");
    var className = div.className;
}
