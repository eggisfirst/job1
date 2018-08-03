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