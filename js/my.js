var t=0;var i=2;

function start(){
	location.href='set.html';
}

function tell(){
	location.href='tell.html';
}

function game2(){
	location.href="msg.html";
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

function report(){
	var a=new Array(8);
	a=game4(a);
	document.write('法官大人，结果如下：'+'<br/>');
	document.write('<br/>'+'总人数：'+a.length+'人<br/>');
	for(var i=1;i<a.length+1;i++){
		document.write('<br/>'+'玩家'+i+'的身份是：'+a[i-1].valueOf()+'<br/>');
	}
	document.write("<input type='button' style='background-color:green;color:white;margin-top:20px;height:30px;width:150px;' value='返回' onclick='start()'/>");
}


//卡牌部分的js文件：

function turn(){
		turnN();
}

function turnN(){
		if(i==9){
			var s=document.getElementById('k2');
			var s1=document.getElementById('k1');
			s1.style.backgroundImage="url(./img/chigua.PNG)";
			s.value='法官视察';
			i++;
		}
		else if(i==10){
			report();
		}
		else{
	var s=document.getElementById('k1');
	s.style.backgroundImage="url(/img/cardB.jpg)";
	var s1=document.getElementById('k2');
	if(t==0){
		s.style.backgroundImage="url(./img/chigua.PNG)";
		s1.value='隐藏身份并进入下一玩家';
		t=1;
	}
	else if(t==1){
		setB();
		s1.value='查看'+i+'号玩家身份';
		t=0;
		i++;
	}
	}
	}


function judge(){
	location.href='judge.html';
}

function game3(){
	game4();
	document.write(a);
}

function game4(z){
	z[0]='<h style="clear:both; color:red; font-weight:bold;">杀手</h>';
	for(var i=1;i<9;i++){
		z[i]='水民';
	}
	return z;
}

function setB(){
	var s=document.getElementById('k1');
	s.style.backgroundImage="url(./img/cardB.jpg)";
}
