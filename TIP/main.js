function createDiv(dayTxt,timeTxt){
	var _div = document.createElement('div');
	var _divDays = document.createElement('div');
	var _divTimeWrap = document.createElement('div');
	var _divTime = document.createElement('div');
	var _divText = document.createElement('div');
	_div.id='timeDivSetDemo';

	//div样式
	_div.style.width='620px';
	_div.style.height='170px';
	_div.style.position='fixed';
	_div.style.left='50%';
	_div.style.bottom='50px';
	_div.style.marginLeft='-310px';
	_div.style.zIndex='9999';
	_div.style.opacity='0.7';
	_div.style.color='#313938';

	//_divDays样式
	_divDays.style.width='200px';
	_divDays.style.height='100%';
	_divDays.style.float='left';
	_divDays.style.fontFamily='Agency FB';
	_divDays.style.fontSize='140px';
	_divDays.style.textAlign='right';
	_divDays.innerHTML=dayTxt

	//_divDays样式
	_divTimeWrap.style.width='400px';
	_divTimeWrap.style.height='100%';
	_divTimeWrap.style.float='right';
	_divTimeWrap.style.fontSize='50px';
	_divTimeWrap.style.textAlign='left';

	//_divDays样式
	_divText.style.width='400px';
	_divText.style.height='110px';
	_divText.style.fontFamily='Agency FB';
	_divText.style.fontSize='34px';
	_divText.style.textAlign='left';
	_divText.style.marginTop='34px';
	_divText.innerHTML='It`s no more time for me!'

	//_divDays样式
	_divTime.style.width='400px';
	_divTime.style.height='60px';
	_divTime.style.fontFamily='Agency FB';
	_divTime.style.fontSize='80px';
	_divTime.style.textAlign='left';
	_divTime.style.paddingTop='14px';
	_divTime.innerHTML=timeTxt;

	_divTimeWrap.appendChild(_divTime)
	_divTimeWrap.appendChild(_divText)
	
	_div.appendChild(_divDays)
	_div.appendChild(_divTimeWrap)
	return _div;
}
var timeDiv;
var totalTime='2016-12-31-24-30';
var loactionURL = location.href;
setInterval(function(){
	var _targetDiv = document.getElementById('timeDivSetDemo');
	if(_targetDiv) _targetDiv.parentNode.removeChild(_targetDiv);
	if(loactionURL.search(/search/)!= -1){
		document.getElementsByTagName('body')[0].removeChild(timeDiv)
	}else{
		function count_down(o){
		        var www_qsyz_net=/^[\d]{4}-[\d]{1,2}-[\d]{1,2}( [\d]{1,2}:[\d]{1,2}(:[\d]{1,2})?)?$/ig,str='',conn,s;
		        if(!o.match(www_qsyz_net)){
		                alert('参数格式为2012-01-01[ 01:01[:01]].\r其中[]内的内容可省略');
		                return false;
		        }
		        var sec=(new Date(o.replace(/-/ig,'/')).getTime() - new Date().getTime())/1000;
		        if(sec > 0){
		                conn='还有';
		        }else{
		                conn='已过去';
		                sec*=-1;
		        }
		        var days = Math.floor(sec/24/3600);
		        s=[sec/3600%24<10?'0'+sec/3600%24:sec/3600%24,sec/60%60<10?'0'+sec/60%60:sec/60%60,sec%60];
		        for(var i in s){
		       	 	s[i] = Math.floor(s[i]);
		       	 	if(s[i]<10){
		       			s[i]='0'+s[i]
		       		}
		       	}

		        str = s[0]+':'+s[1]+':'+s[2]
		        timeDiv = createDiv(days,str);	        

		}
		count_down('2016-12-31 23:59:00'); 
		document.getElementsByTagName('body')[0].appendChild(timeDiv)
	}
},1000)
