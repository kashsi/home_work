

// Timer ************************************************************** //

var currentTimeMili = 0;
var myTimer;
var timer_is_on = 0;
var beginTimeMili = Date.now();
var dcurrentMain = new Date();
var bsetTimeMain = true;

var elementMiliTime = document.getElementById('miliTime');
var elementMainTime = document.getElementById('mainTime');

function timeCount()
{
	if (timer_is_on)
	{
		currentTimeMili = Date.now() - beginTimeMili;
		var nscrMili = currentTimeMili % 1000;
		if(bsetTimeMain && nscrMili < 500)
		{
			bsetTimeMain = false;
		}							
	
		if(!bsetTimeMain && (nscrMili > 950 || nscrMili < 150))
		{
			bsetTimeMain = true;
			var currentTimeSec = (currentTimeMili + 200) / 1000;
			
			var hours   = Math.floor(currentTimeSec / 3600);
			var minutes = Math.floor((currentTimeSec - (hours * 3600)) / 60);
			var seconds = Math.floor(currentTimeSec - (hours * 3600) - (minutes * 60));        
							 
			if (hours   < 10) { hours   = "0" + hours; }
			if (minutes < 10) { minutes = "0" + minutes; }
			if (seconds < 10) { seconds = "0" + seconds; }
			var mytime = hours + ':' + minutes + ':' + seconds;
			
			elementMainTime.innerHTML = "<a>" + mytime + "</a>";
		}

		var str = nscrMili;
		if(nscrMili < 10)
			str = '00' + str;
		else if(nscrMili < 100)
			str = '0' + str;
		elementMiliTime.innerHTML = "<a>" + str + "</a>";
		
	}
	else
	{
		clearInterval(t);
	}
}

function doTimer(bpause)
{
	if (!timer_is_on)
	{
		timer_is_on = 1;
		if(!bpause)
			beginTimeMili = Date.now();
		else
			beginTimeMili = Date.now() - currentTimeMili;
			
		myTimer = setInterval(timeCount, 1);
	}
}

function stopCount(nTimeMili)
{
	clearInterval(myTimer);
	timer_is_on = 0;
	currentTimeMili = nTimeMili;
	if(nTimeMili == 0)
	{
		elementMiliTime.innerHTML = "<a>000</a>";
		elementMainTime.innerHTML = "<a>00:00:00</a>";
	}
}

// BtnStart ************************************************************** //

var elementBtnStart = document.getElementById('btnStart');

function handlerBtnStartClick() {
	if(elementBtnStart.innerHTML == 'Start') {
		elementBtnStart.innerHTML = 'Pause';
		elementBtnStart.style.background = 'linear-gradient(to top, #006090, #ADF6FF)';
		doTimer(false);
	}
	else
	if(elementBtnStart.innerHTML == 'Continue') {
		elementBtnStart.innerHTML = 'Pause';
		elementBtnStart.style.background = 'linear-gradient(to top, #006090, #ADF6FF)';
		doTimer(true);
	}
	else
	if(elementBtnStart.innerHTML == 'Pause') {
		elementBtnStart.innerHTML = 'Continue';
		elementBtnStart.style.background = 'linear-gradient(to top, #009C2C, #ABFFC3)';
		stopCount(currentTimeMili);
	}
}

elementBtnStart.addEventListener('click', handlerBtnStartClick);


// BtnClear ************************************************************** //

var elementBtnClear = document.getElementById('btnClear');

function handlerBtnClearClick() {
	elementBtnStart.innerHTML = 'Start';
	elementBtnStart.style.background = 'linear-gradient(to top, #009C2C, #ABFFC3)';
	stopCount(0);
}

elementBtnClear.addEventListener('click', handlerBtnClearClick);

