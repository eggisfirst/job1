var sub = document.getElementsByClassName('btn-sub')[0]
var input = document.getElementsByTagName('input')
var arrObj = {}
var checkedArr = []

changLanguage();
hide();

//提交表单
sub.onclick = function () {
  getAttrName();
  run();
  checked();
  console.log(arrObj)
}

/*中英文切换*/
  function changLanguage (){
    var btn = document.getElementsByTagName('button')
    btn[1].onclick = function () {
      btn[0].className = 'Chinese';
      btn[1].className = ('English-on')
    }
    btn[0].onclick = function () {
      btn[0].className = 'Chinese-on'; 
      btn[1].className = ('English')
    }
  }
  
/*点击文字隐藏*/
  function hide(){
    var pushText = document.getElementsByClassName('inputText')
    var textBox = document.getElementsByClassName('mutiLine')
    textBox[0].onclick = function () {
      pushText[0].className = 'inputText1';
    }
  }
  
//获取每个题目的属性名name
  function getAttrName () {
    for(var i = 0; i < input.length - 2; i ++){
      //获取每个input下的name
      var attrName = input[i].name
      //如果name存在，把name存在arrobj里面
      if(attrName){
        arrObj[attrName] = []
      }
    }
  }

//遍历题目
  function run () {
    /*把获取到每个题目的属性名Name存到一个数组里面*/
    var attrNameKeys = Object.keys(arrObj)
    //循环数组里面的每个name
    for(var i = 0; i < attrNameKeys.length; i ++){
      /*获取每个题目下面的input*/
      var tempArr = $('input[name = "' +  attrNameKeys[i] + '"]')
      /*获取每个相同name下的选项*/
      for(var j = 0; j < tempArr.length; j++){
      /*把选中的选项的value值push进arrobj这个数组里面*/
        tempArr[j].checked ? arrObj[attrNameKeys[i]].push(tempArr[j].value) : null
      }
    }
  }

/*检查题目是否全部回答完,如果回答完，跳转到第二个页面*/
  function checked () {
    var addTips = `<div class = tips >这道题必填哦！</div>`
    var count = 0
    for (item in arrObj) {
      // 为0说明题目未作答，添加提示语
      if (arrObj[item].length === 0) {
        $('#' + item).children('.tips').remove()
        $('#' + item).append(addTips);
      } else {
        count += 1
        $('#' + item).children('.tips').remove()
      }
    }
    if(count == 7){
      skip()
    }
  }

//点击跳转页面
  function skip(){
    //获取当前地址
    var adress = location.href
    //获取当前地址字符串长度
    var len = adress.length
    //当前长度减去question.html的长度
    var cut = len - 14
    //截取除去question.html外的地址
    var adress1 = adress.slice(0,cut)
    location.href = adress1 +'/'+'thanks.html'
  }