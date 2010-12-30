<!--
//控制程序

function go()
{
var year  = document.Info.year1.value * 1 + document.Info.year2.value * 1 + document.Info.year3.value * 1;
var month = document.Info.month.value;
var day   = document.Info.day.value;
var blood = document.Info.blood.value;
var sex   = document.Info.sex.value;

//根据生辰和血型求n
year  = year % 5;
month = month % 6;
day = day * 9;
for(;day>9;) day = day - 10;

var n = blood * 100 + year * 100 + month * 10 + day * 1;
for(;n>108;)  n = n - 108;
if(n==0)  n = 108; 

var n1 = n;


//性别判定
if(sex==1){ 
	while(SexType[n]==0)  {
		n = n + 1;
                for(;n>108;)  n = n - 108;
         }
 }

if(sex==0){ 
	while(SexType[n]==1)  {
		n = n + 1;
                for(;n>108;)  n = n - 108;
         }
 }

var n2 = n;


//输出
//var t3 = n1 + "\b\b\b\b性别" + sex + "\b\b:" + n2;
var t2 ="<br><br>你在水浒中是：<strong>" + Name[n] + "</strong>";
t2 = t2 + "<br><br>" + Prol[n];
document.all.show.innerHTML = t2;
}

var DefaultHtml = "";
document.all.show.innerHTML = DefaultHtml;

function ResetAll()
{
document.Info.reset();
document.all.show.innerHTML = DefaultHtml;
}
//-->
