var ok_btn = document.getElementsByTagName('button')[0]

ok_btn.onclick = function(){
  skips()
}

//点击跳转页面
function skips(){
  //获取当前地址
  var adress = location.href
  //获取当前地址字符串长度
  var len = adress.length
  //当前长度减去thanks.html的长度
  var cut = len - 11
  //截取除去thanks.html外的地址
  var adress1 = adress.slice(0,cut)
  location.href = adress1 +'/'+'question.html'
}