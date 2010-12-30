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

var n = blood * 108 + year * 100 + month * 10 + day * 1;
for(;n>87;)  n = n - 87;
if(n==0)  n = 87; 

var n1 = n;


//性别判定
if(sex==1){ 
	while(SexType[n]==0)  {
		n = n + 1;
                for(;n>87;)  n = n - 88;
         }
 }

if(sex==0){ 
	while(SexType[n]==1)  {
		n = n + 1;
                for(;n>87;)  n = n - 87;
         }
 }

var n2 = n;


//输出
//var t3 = "n1 = " + n1 + "\n性别 = " + sex + "\n n2 = " + n2 + '\n n = ' + n;
//alert(t3);
var t2 = "<br><br>你在金庸小说中是：<strong>" + Name[n] + "</strong>";
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
