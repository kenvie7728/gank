function start(){
	location.href='set.html';
}

function tell(){
	location.href='tell.html';
}

function game(){
	var s=document.getElementById('c1');
	var s1=document.getElementById('c2');
	var s2=document.getElementById('c3');
	
	var a=parseInt(s.value);
	var b=parseInt(s1.value);
	var c=parseInt(s2.value);
	
	var z=new Array(a);
	
	for(var i=0;i<b;i++){
	z[i]='<h style="clear:both; color:red; font-weight:bold;">杀手</h>';
	}
	
	for(var i=b;i<b+c;i++){
		z[i]='水民';
	}
	unsort(z);
	report(z);
	document.title='结果';
}

function back(){
	location.href='index.html';
}

function checkAll(){
	var s=document.getElementById('c1');
	if(s.value>18){
		alert('总人数最大为18!');
	}
	else if(s.value<3){
		alert('总人数最小为3!');
	}
}

function check1(){
	var se=document.getElementById('b10');
	var s1=document.getElementById('c1');
	var s2=document.getElementById('c2');
	while(true){
	if(parseInt(s2.value)>parseInt(s1.value)){
		se.style.backgroundColor='gray';
		alert('杀手人数不能大于总人数!');
	}
	else{
	se.style.backgroundColor='green';
	break;
	}
	break;
	}
}

function check2(){
	var se=document.getElementById('b10');
	var s1=document.getElementById('c1');
	var s2=document.getElementById('c2');
	var s3=document.getElementById('c3');
	var a=parseInt(s2.value)+parseInt(s3.value);
	var b=parseInt(s1.value)-parseInt(s2.value);
	while(true){
	if(a!==parseInt(s1.value)){
		se.style.backgroundColor='gray';
		alert("请输入正确的人数!");
	}
	else{
	se.style.backgroundColor='green';
	break;
	}
	break;
	}
}

function unsort(a){
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
}
}

function report(a){
	document.write('法官大人，结果如下：'+'<br/>');
	document.write('<br/>'+'总人数：'+a.length+'人<br/>');
	for(var i=1;i<a.length+1;i++){
		document.write('<br/>'+'玩家'+i+'的身份是：'+a[i-1].valueOf()+'<br/>');
	}
	document.write("<input type='button' style='background-color:green;color:white;margin-top:20px;height:30px;width:150px;' value='返回' onclick='start()'/>");
}
