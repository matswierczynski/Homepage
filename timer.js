function count()
	{
	var today = 	   new Date();
	var hours =      today.getHours();
	var minutes =   today.getMinutes();
	var seconds =   today.getSeconds();
	
	if (seconds<10) seconds="0"+seconds;
	if (minutes<10) minutes="0"+minutes;
	if (hours<10)    hours="0"+hours;
	
	document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds;
	
	setTimeout("count()", 1000);
	}