//getByClass
/*function getByClass(oParent, sName)
{
	if (oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sName);
	}
	else
	{
		var aChild=oParent.getElementsByTagName('*');
		var aRes=[];
		
		for (var i=0; i<aChild.length; i++)
		{
			var obj=aChild[i];
			var aTmp=obj.className.split(' ');
			if (findInArr(aTmp, sName) == true)
			{
				aRes.push(obj);
			}
		}

		return aRes;
	}	
}*/

/**
 * 从数组中查找   //findInArr
 * @param arr    array 被查找数组
 * @param value        被查找值
 *
 * @return 找到了true  没找到false
 */
function findInArr(arr, value)
{
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i] == value)
		{
			return true;
		}
	}
	
	return false;
}

function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var arr=[];
		
		//var reg=/\bred\b/;
		var reg=new RegExp('\\b'+sClass+'\\b');

		
		var aEle=oParent.getElementsByTagName('*');
		for(var i=0; i<aEle.length; i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);	
			}
		}
		return arr;
	}
}
function hasClass(obj,sClass){
	var reg=new RegExp('\\b'+sClass+'\\b');
	return reg.test(obj.className);
}

function addClass(obj,sClass){
	if(obj.className){
		if(!hasClass(obj,sClass)){
			obj.className+=' '+sClass;
		}
	}else{
		obj.className=sClass;	
	}
}

function removeClass(obj,sClass){
	var reg=new RegExp('\\b'+sClass+'\\b','g');
	if(hasClass(obj,sClass)){
		obj.className=obj.className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
	}
}
function toggleClass(obj,sClass){
	if(hasClass(obj,sClass)){
		removeClass(obj,sClass);
	}else{
		addClass(obj,sClass);	
	}
}



//获取非行间样式
function getStyle(obj, sName)
{
	if (obj.currentStyle)
	{
		return (obj.currentStyle || getComputedStyle(obj, false))[sName];
	}
}
/*
function getStyle(obj, sName)
{
	if (obj.currentStyle)
	{
		return obj.currentStyle[sName];
	}
	else
	{
		return getComputedStyle(obj, false)[sName];
	}
}//   面试中写法
*/
// 随机数
function rnd(n, m)
{
	return Math.floor(Math.random()*(m-n)+n);
}

//补0
function toDub(n)
{
	return n<10 ? '0'+n : ''+n;
}

//事件绑定
function addEvent(obj, sEv, fn)
{
	if (obj.addEventListener)
	{
		obj.addEventListener(sEv, fn, false);
	}
	else
	{
		obj.attachEvent('on'+sEv, fn);
	}
}

//事件解绑
function removeEvent(obj, sEv, fnName)
{
	if (obj.removeEventListener)
	{
		obj.removeEventListener(sEv, fnName, false);
	}
	else
	{
		obj.detachEvent('on'+sEv, fnName);
	}
}

//ready
function ready(fn)
{
	if (document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded', fn, false);
	}
	else
	{
		document.attachEvent('onreadystatechange', function (){
			if (document.readyState == 'complete')
			{
				fn();
			}
		});
	}
}

//getPos 获取到页面距离

function getPos(obj){
	var left=0;
	var top=0;
	while(obj)
	{
		left+=obj.offsetLeft;
		top+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:left, top:top};	
}


//鼠标滚轮
function addWheel(obj, fn)
{
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
	{
		// FF
		obj.addEventListener('DOMMouseScroll', _wheel, false);
	}
	else
	{
		// 非FF
		obj.onmousewheel=_wheel;
	}
	
	function _wheel(ev)
	{
		var oEvent=ev || event;
		var down=false;
		
		if (oEvent.wheelDelta)
		{
			down=oEvent.wheelDelta>0 ? false : true;
		}
		else
		{
			down=oEvent.detail>0 ? true : false;
		}
		
		fn(down);
	}
}

//drag

function drag(obj)
{
	obj.onmousedown=function (ev){
		var oEvent=ev || event;
		var disX=oEvent.clientX-getPos(obj).left;
		var disY=oEvent.clientY-getPos(obj).top;
		
		document.onmousemove=function (ev){
			var oEvent=ev || event;
			var left=oEvent.clientX-disX;
			var top=oEvent.clientY-disY;
			
			obj.style.left=left+'px';
			obj.style.top=top+'px';
		};
		
		document.onmouseup=function (){
			document.onmousemove=null;
			document.onmouseup=null;
		
			obj.releaseCapture && obj.releaseCapture();
		};
		
		obj.setCapture && obj.setCapture();
		return false;
	};
}

// enter/leave
function mouseenter(obj, fn)
{
	if (obj.onmouseenter)
	{
		obj.onmouseenter=fn;
	}
	else
	{
		obj.onmouseover=function (ev){
			var oEvent=ev || event;
			var oFrom=oEvent.fromElement || oEvent.relatedTarget;
			
			if( ! (oFrom && obj.contains(oFrom)))
			{
				fn(ev);
			}
		};
	}
}

function mouseleave(obj, fn)
{
	
	if (obj.onmouseleave)
	{
		obj.onmouseleave=fn;
	}
	else
	{
		obj.onmouseout=function (ev){
			var oEvent=ev || event;
			var oTo=oEvent.toElement || oEvent.relatedTarget;
			if ( ! (oTo && obj.contains(oTo)))
			{
				fn(ev);
			}
		};
	}
}

//isFF

function isFF()
{
	return window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1 ? true : false;
}


//表单检验
(function(global){
	
	var re={  //整个正则
		email:/^\w+@[a-z0-9-]+(\.[a-z]{2,8}){1,2}$/,
		tel:/^(0[1-9]\d{1,2}-)?[1-9]\d{6,7}$/,
		age:/^(1[6-9]|[2-9]\d|100)$/,
		cnName:/^[\u4e00-\u9fa5]{2,4}$/
	};
	global.checkForm=function(id){
		var oForm=document.getElementById(id);
		var aInput=oForm.getElementsByTagName('input');
	
		
		function check(obj,reg){
			if(obj.value){
				//正则
				if(reg.test(obj.value)){
					obj.className='ok';
					obj.parentNode.children[1].innerHTML='';
					return true;
				}else{
					obj.parentNode.children[1].innerHTML=obj.getAttribute('err_tip');
					obj.className='error';
					return false;
				}
			}else{
				obj.parentNode.children[1].innerHTML='*内容不能为空';
				obj.className='error';
				return false;	
			}	
		}
		
		oForm.onsubmit=function(){
			var bS=true;
			for(var i=0; i<aInput.length; i++){
				if(re[aInput[i].name]){
					if(!check(aInput[i],re[aInput[i].name])){
						//return false;	
						bS=false;
					}	
				}
			}
			return bS;	
		};
		
		//加事件
		for(var i=0; i<aInput.length; i++){
			var r=re[aInput[i].name];
			if(r){
				(function(r){
					aInput[i].onblur=function(){
						check(this,r);	
					};
				})(r);	
			}
		}
		
		oForm.onreset=function(){
			var t=confirm('你确认重置么');
			if(!t){
				return false;	
			}
		};
	}	
})(window);

//选项卡重用

function tab(sName)
{
	var aParent=getByClass(document,sName);
	
	for (var i=0; i<aParent.length; i++)
	{
		_tab(aParent[i]);
	}
	
	function _tab(oParent)
	{
		var aBtn=getByClass(oParent,'btn');
		var aCont=getByClass(oParent,'cont');
		for (var i=0; i<aBtn.length; i++)
		{
			aBtn[i].index=i;
			aBtn[i].onclick=function (){
				for (var i=0; i<aBtn.length; i++)
				{
					aBtn[i].className='btn';
					aCont[i].className='cont';
				}
				
				this.className='active btn';
				aCont[this.index].className='active cont';
			};
		}
	}
}

	












