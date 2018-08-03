/*中英文切换*/
var btn = document.getElementsByTagName('button')
btn[1].onclick = function () {
  btn[0].className = 'Chinese';
  btn[1].className = ('English-on')
}
btn[0].onclick = function () {
  btn[0].className = 'Chinese-on'; 
  btn[1].className = ('English')
}
/*点击文字隐藏*/
var push = document.getElementsByClassName('inputText')
var textBox = document.getElementsByClassName('mutiLine')
textBox[0].onclick = function () {
  push[0].className = 'inputText1';
}

/*点击跳转到第二个页面*/
var sub = document.getElementsByClassName('btn-sub')[0]
var adress = location.href
var len = adress.length
var cut = len - 14
var adress1 = adress.slice(0,cut)




var i = 0;
var li = document.getElementsByTagName('li');
var input = document.getElementsByTagName('input')
var h = document.getElementsByTagName('h2')
var radio1 = document.getElementById('radio1')
var addTips = `<div class = tips >这道题必填哦！</div>`


sub.onclick = function () {
for(var i = 0;i < input.length-2;i ++){
  if(input[i].checked == false){
    h[i].innerHTML += addTips;
    break
    i = i
  }else{

  }
}

  

 
//   location.href = adress1 + 'thanks.html'
// }
}
/*遍历所有必填题目*/


