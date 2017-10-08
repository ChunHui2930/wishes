/**
 * Created by Administrator on 2017/7/27.
 */
// 这是获取标签间内容 的对象的方式
var tag = {
  // name:'',
  // age:'',
  // sayHello :function (){
  //
  // }
  getText: function (tag) {
    if (typeof tag.innerText == 'string') { // if的小括号里面，一般是boolean类型的值或是关系表达式或是逻辑表达式  ，如果不是前面的三种情况的话，则在小括号里面，会默认的调用 Boolean(),将当前的数据值进行转换
      return tag.innerText;
    } else {
      // 低版本的火狐 浏览器支持的方式
      return tag.textContent;
    }
  },
  setText: function (tag, value) {
    // 能力检测： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if (typeof tag.innerText == 'string') {
      tag.innerText = value;
    } else {
      tag.textContent = value;
    }
  }
};

// 这个对象是与节点相关的方法
var node = {
  getNextElement: function (ele) {
    // 能力检测
    if (ele.nextElementSibling) { // 高级的浏览器
      return ele.nextElementSibling;
    } else {  //IE8浏览器
      ele = ele.nextSibling;//先获取一下下一个节点
      while (ele && ele.nodeType != 1) {
        ele = ele.nextSibling;  // 在当前节点，继续往后找
      }
      return ele;
    }
  },
  getPreviousElement: function (ele) {
    //能力检测： 就是要看当前的浏览器是否支持此对象 的属性或是方法
    if (ele.previousElementSibling) {
      return ele.previousElementSibling;// 高级浏览器支持的方式
    } else {
      // 低级浏览器支持的方式
      ele = ele.previousSibling;
      while (ele && ele.nodeType != 1) {
        ele = ele.previousSibling; //在当前节点继续向前找
      }
      return ele;
    }
  },
  getFirstChild: function (ele) {
    // 能力检测
    if (ele && ele.firstElementChild) {
      return ele.firstElementChild;
    } else {
      // 低版本的浏览器支持的方式
      ele = ele.firstChild;  // ele是先判断的是否存在，如果存在，并且类型不是1的话，则是在当前结点继续往后找
      while (ele && ele.nodeType != 1) {
        ele = ele.nextSibling;
      }
      return ele;
    }
  },
  getLastChild: function (ele) {
    // 能力检测
    if (ele && ele.lastElementChild) {
      return ele.lastElementChild;
    } else {
      // 低版本的浏览器支持的方式
      ele = ele.lastChild;
      while (ele && ele.nodeType != 1) {
        ele = ele.previousSibling;
      }
      return ele;
    }
  }
}

// jQuery就是别人封装好的方法库

function $$(id){
   return   document.getElementById(id);
}

/**
 * 封装了一个将原来的所有的option移动到目标侧的函数
 * @param source
 * @param target
 */
function moveAll(source,target){
  var source = $$(source);
  var target = $$(target);
  var options = source.children;
  for(var i=0;i<options.length;i++){
    target.appendChild(options[i])
    i--;
  }
}

/**
 * 封装了一个将原来的选中的option移动到目标侧的函数
 * @param source
 * @param target
 */
function moveSelect(source,target){
  var source = $$(source);
  var target = $$(target);
  var options = source.children;
  for(var i=0;i<options.length;i++){
    if(options[i].selected ){
      target.appendChild(options[i]);
      i--;
    }
  }
}