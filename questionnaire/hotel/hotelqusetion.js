var sub = document.getElementsByClassName('btn-sub')[0]
var input = document.getElementsByTagName('input')
var arrObj = {}
var checkedArr = []
var topScroll =[]
var phoneNum = document.getElementById('tel')
var y = true

changLanguage();
hideText();

//提交表单
sub.onclick = function () {  
  getAttrName();
  runQuestion();
  checked();
  topScroll = []
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
  function hideText(){
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
  function runQuestion () {
    /*把获取到每个题目的属性名Name存到一个数组里面*/
    var attrNameKeys = Object.keys(arrObj)
    //循环数组里面的每个name
    for(var i = 0; i < attrNameKeys.length; i ++){
      /*获取每个题目下面的input*/
      var tempArr = $('input[name = "' + attrNameKeys[i] + '"]')
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
    var titleNumber = document.getElementsByTagName('h2')
    var count = 0
    for (item in arrObj) {
      // 为0说明题目未作答，添加提示语
      if (arrObj[item].length === 0) {
        $('#' + item).children('.tips').remove()
        $('#' + item).append(addTips);
      //获取每个item距离顶端的高度
        var distance = $("#" + item).offset().top
      //把每个距离放进数组里面
        topScroll.push(distance)
      //获取每次数组的第一位
        var theFirstY = topScroll[0]
       //让滚动条滚动到没填写的第一道题的位置
        window.scrollTo(0,theFirstY)
      } else {
      //当length长度不为0的时候++
      count += 1
      $('#' + item).children('.tips').remove()
    }
  }
  //当length不为0的长度为h2即题目的长度-1时，跳转页面
  if(count == titleNumber.length - 1){
    checkMobile()
    //手机号码验证正确或者没填，跳转
    if(y == true || phoneNum.value == ''){
      skip()
    }
  }
}

//点击跳转页面
  function skip(){
    //获取当前地址
    var adress = location.href
    //获取当前地址字符串长度
    var len = adress.length
    //当前长度减去hotelquestion.html的长度
    var cut = len - 19
    //截取除去hotelquestion.html外的地址
    var adress1 = adress.slice(0,cut)
    location.href = adress1 +'/'+'thanks.html'
  }

  //验证手机号码
  function checkMobile(){ 
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phoneNum.value))){ 
    //  alert("不是完整的11位手机号或者正确的手机号前七位"); 
    phoneNum.focus(); 
     y = false
    }else{
      y = true
    }
   } 