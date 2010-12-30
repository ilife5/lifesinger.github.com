<!--
//Êý±íÖØÅÅ

var Name = new Array();
var Prol = new Array();
var SexType  = new Array();
var MainRole = new Array();
var GoldRole = new Array();

var i=0,j=0;

for(i=0;i<6;i++)
   for(j=1;j<=76;j++)
   {
	   var a = i * 76 + j;
	   var b = 6 * (j - 1) + i + 1;

      Name[a] = character[b];
      Prol[a] = profile[b];
      SexType[a] = sexflag[b];
      MainRole[a] = mainflag[b];
      GoldRole[a] = goldflag[b];

     }

//-->
