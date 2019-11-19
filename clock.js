jQuery( document ).ready(function( $ ) {
	Timer = setInterval("clock()", 10);
});
	function clock() {
	    if (!document.all && !document.getElementById) return;
	    thetime = document.getElementById ? document.getElementById("time") : document.all.time;
	    if (!document.all && !document.getElementById) return;
	    theday = document.getElementById ? document.getElementById("day") : document.all.day;
	    if (!document.all && !document.getElementById) return;
	    thesec = document.getElementById ? document.getElementById("sec") : document.all.sec;
	    if (!document.all && !document.getElementById) return;
	    themin = document.getElementById ? document.getElementById("min") : document.all.min;
	    if (!document.all && !document.getElementById) return;
	    thehours = document.getElementById ? document.getElementById("hours") : document.all.hours;
	    if (!document.all && !document.getElementById) return;
	    thepersent = document.getElementById ? document.getElementById("persent") : document.all.persent;
	    if (!document.all && !document.getElementById) return;
	    thesecondleft = document.getElementById ? document.getElementById("secondleft") : document.all.secondleft;
	    if (!document.all && !document.getElementById) return;
	    theminutesleft = document.getElementById ? document.getElementById("minutesleft") : document.all.minutesleft;
	    if (!document.all && !document.getElementById) return;
	    thehoursleft = document.getElementById ? document.getElementById("hoursleft") : document.all.hoursleft;
	    if (!document.all && !document.getElementById) return;
	    thetimeT = document.getElementById ? document.getElementById("timeT") : document.all.timeT;

	    var d = new Date();

	    // convert to msec
	    // subtract local time zone offset
	    // get UTC time in msec
	    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

	    // create new Date object for different city
	    // using supplied offset
	    var nowDateT = new Date(utc + (3600000*"-9"));
	    var hoursT = nowDateT.getHours();
	    var minutesT = nowDateT.getMinutes();
	    var secondsT = nowDateT.getSeconds();
	       if (hoursT <= 9) hoursT = "0" + hoursT;
	    if (minutesT <= 9) minutesT = "0" + minutesT;
	    if (secondsT <= 9) secondsT = "0" + secondsT;
	    var newtimeT = hoursT + ":" + minutesT + ":" + secondsT;
	    var nowDate = new Date();
	    var hours = nowDate.getHours();
	    var minutes = nowDate.getMinutes();
	    var seconds = nowDate.getSeconds();
	    var secondleft = 60 - seconds;
	    var minutesleft = 60 - minutes;
	    var hoursleft = 24 - hours;
	    if (hours <= 9) hours = "0" + hours;
	    if (minutes <= 9) minutes = "0" + minutes;
	    if (seconds <= 9) seconds = "0" + seconds;
	    var newtime = hours + ":" + minutes + ":" + seconds;

	    var date = nowDate.getDate();
	    var month = nowDate.getMonth() + 1;
	    var fullyear = nowDate.getFullYear();
	    if (date <= 9) date = "0" + date;
	    if (month <= 9) month = "0" + month;
	    var newdate = date + "." + month + "." + fullyear;

	    var nowDate = new Date();
	    var start = new Date(nowDate.getFullYear(), 0, 0);
	    var diff = nowDate - start;
	    var oneDay = 1000 * 60 * 60 * 24;
	    var day = 347 - Math.floor(diff / oneDay);
	    var secondsleftall = 29895400000 - diff;
	    var percent1 = 100 - (secondsleftall / 5098600000 * 100);
	    var hoursleftall = secondsleftall / 1000 / 60 / 60;

	    thetime.innerHTML = "" + newtime + "";
	    thetimeT.innerHTML = "" + newtimeT + "";
	    thesecondleft.innerHTML = "" + secondleft + "";
	    theminutesleft.innerHTML = "" + minutesleft + "";
	    thehoursleft.innerHTML = "" + hoursleft + "";
	    theday.innerHTML = "" + day + "";
	    thepersent.innerHTML = "" + percent1.toFixed(5) + "%";
	    thesec.innerHTML = "" + (secondsleftall / 1000).toFixed(0) + "sec";
	    themin.innerHTML = "" + (secondsleftall / 1000 / 60).toFixed(0) + "min";
	    thehours.innerHTML = "" + hoursleftall.toFixed(0) + "h;";
	    progressBarUpdate((100/60*seconds).toFixed(0), 100, $('.pie-1'));
	    progressBarUpdate((100/60*minutes).toFixed(0), 100, $('.pie-minutes'));
	    progressBarUpdate((100/24*hours).toFixed(0), 100, $('.pie-hours'));
	    progressBarUpdate2((percent1).toFixed(1), 100, $('.pie-percent'));
	    // setInterval(progressBarUpdate(70, 100, $('.pie-1')),100);
	}




	function rotate(element, degree) {
	    element.css({
	        '-webkit-transform': 'rotate(' + degree + 'deg)',
	        '-moz-transform': 'rotate(' + degree + 'deg)',
	        '-ms-transform': 'rotate(' + degree + 'deg)',
	        '-o-transform': 'rotate(' + degree + 'deg)',
	        'transform': 'rotate(' + degree + 'deg)',
	        'zoom': 1
	    });
	}

	function progressBarUpdate(x, outOf, elem) {
	    var firstHalfAngle = 180;
	    var secondHalfAngle = 0;

	    // caluclate the angle
	    var drawAngle = x / outOf * 360;

	    // calculate the angle to be displayed if each half
	    if (drawAngle <= 180) {
	        firstHalfAngle = drawAngle;
	    } else {
	        secondHalfAngle = drawAngle - 180;
	    }

	    // set the transition
	    rotate(elem.find(".slice1"), firstHalfAngle);
	    rotate(elem.find(".slice2"), secondHalfAngle);

	    // set the values on the text
	    elem.find(".status").html(x + "<span>%</span>");
	}
	function progressBarUpdate2(x, outOf, elem) {
	    var firstHalfAngle = 180;
	    var secondHalfAngle = 0;

	    // caluclate the angle
	    var drawAngle = x / outOf * 360;

	    // calculate the angle to be displayed if each half
	    if (drawAngle <= 180) {
	        firstHalfAngle = drawAngle;
	    } else {
	        secondHalfAngle = drawAngle - 180;
	    }

	    // set the transition
	    rotate(elem.find(".slice1-color"), firstHalfAngle);
	    rotate(elem.find(".slice2-color"), secondHalfAngle);

	    // set the values on the text
	    elem.find(".status").html(x + "<span>%</span>");
	}
	function calcTime(city, offset) {
	    // create Date object for current location
	    var d = new Date();

	    // convert to msec
	    // subtract local time zone offset
	    // get UTC time in msec
	    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

	    // create new Date object for different city
	    // using supplied offset
	    var nd = new Date(utc + (3600000*offset));

	    // return time as a string
	    return "The local time for city"+ city +" is "+ nd.toLocaleString();
	}





