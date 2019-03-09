Date.prototype.ago = function(){
    var diff = (new Date().getTime() - this.getTime()) / 1000;
    var day_diff = Math.floor(diff / 86400);
    return day_diff == 0 && (diff < 60 && "刚刚" || diff < 120 && "1分钟以前" || 
    diff < 3600 && Math.floor(diff / 60) + "分钟之前" ||
    diff < 7200 && "1小时之前" ||
    diff < 86400 && Math.floor(diff/3600)+"小时之前") ||
    day_diff == 1 && "昨天" ||
    day_diff < 7 && Math.floor(day_diff) + "天前" ||
    day_diff < 30 && Math.floor(day_diff/7) + "周前"||
    day_diff < 365 && Math.floor(day_diff/30) + "个月前"||
    Math.floor(day_diff/365) + "年之前"
};

Date.prototype.getSmallHours = function(){
    var hours = this.getHours();
    if(hours <= 12){
        return hours;
    }else{
        return hours - 12;
    }

}

Date.prototype.format = function(fmt){
    var o = {
        "M+": this.getMonth()+1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "h+": this.getSmallHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "S+": this.getMilliseconds()
   };
   if(/(y+)/.test(fmt)){
       fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
   }
   for(var k in o){
       if (new RegExp("(" + k +")").test(fmt)){
           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(String(o[k]).length)));
       }
   }	
   return fmt;
}