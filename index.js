function startTime(){
	var today=new Date();
    var yy=today.getFullYear();
    var mm=today.getMonth()+1;             //月份
    var dd=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
    h=checkTime(h);
    m=checkTime(m);
	s=checkTime(s);
	document.getElementById('txt').innerHTML=yy+"."+mm+"."+dd+" "+h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
