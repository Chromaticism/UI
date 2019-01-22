const string1 = " There is a cat there";

const regex = /cat/;

const isExisting = regex.test(string);

console.log(isExisting);

//var re=new RegExp ();
//RegExp JS class，like Array 。然而这个创建方法没有指定表达式内容

//最简单的正则表达式，将匹配字母a 
//re=new RegExp ("a");

//重载的构造函数，其第二个参数指定将不区分大小写
//re=new RegExp ("a","i");

// the sesond para: g->search global; i-> ignore lowcase uppercase; m -> seach multiple line

//anther method created


//var re = /a/i;

//------test()


//var patt = /e/;
//var result = patt.test("The best things in life are free!");

///e/.test("The best things in life are free!")

//console.log(result);

//exec() 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果

//for String

//--search()

//使用正则表达式搜索 "Runoob" 字符串，且不区分大小写：
//var str = "Visit Runoob!"; 
//var n = str.search(/Runoob/i);


//console.log(n);


//var str = "Visit Runoob!"; 
//var m = str.search("Runoob");

//console.log(m);


//--relace() 方法将接收字符串作为参数

//var str2="Visit W3CSchool!";
//var n2=str2.replace("W3CSchool","Runoob");

//console.log(n2);


//common grammar.  () {} []

//function isStudentNo(str) {
//    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
//    return reg.test(str);     /*进行验证*/
//}

//[] the range  [0-9] means search the num from 0 to 9
//{} usually means length {8} means have 8 number or bit
//() get the aim string, (\s+) means continus space tring

//-----^ $

// ^ with string start : (^a) means the string started with a

//$ means end: (b$) means string end with b

// ^ another is [^xyz] means the string don't have xyz : here we use [] not ();

// \d match a non negotive num equal to [0-9]
// \s match a space

// \w march a english character or num.  == [0-9a-zA-z];

// . match any character except return === [^\n]


// * +

// * match element 0 time or many times (\s*) 0 or many space
// +  			   1.     or many 		(\d+) match string at least have 1 interger

// ? match 0 or 1 equal to {0,1}, like (\w?) means match string have at most one num or letter



var regEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
 //var email=$("#email").val();

//var email = 'robin@gmail.com';
var email = 'wewew';
 if(!regEmail.test(email) ){
    console.log("correct email please！");
    return false;
   }

function isNum(numValue){
 var numPattern=/^\d*$/; //数字的正则表达式
 result=numPattern.test(numValue);
 return result;
}   

function isCharNum(flagValue){
 var flagPattern=/^[a-zA-Z0-9]*$/; //是否为字母和数字
 result=flagPattern.test(flagValue);
 return result;
}

function isInt(intValue){
  var intPattern=/^0$|^[1-9]\d*$/; //整数的正则表达式
 result=intPattern.test(intValue);
  return result;
 }

 function validatePwd(str) {
if (/^.*?[\d]+.*$/.test(str) && /^.*?[A-Za-z]/.test(str)
&& /^.*?[~/`!@#$%^&*()_+|{}?;:><\-\]\\[\/].*$/.test(str) && /^.{8,20}$/.test(str)) {
return true;
}
return false;
}












