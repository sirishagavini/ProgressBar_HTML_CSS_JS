/**
* @desc - A function to show status of progress bar of width 200 in 5secs
**/
function setProgressBar() {
//setting current width to 0 on page load
var myCurrentWidth = 0;
//setting Interval of 1sec to increase the progress bar
var myInt = setInterval(function() {
//continue the progress if the progress is not max
if(myCurrentWidth !== 200) {
myCurrentWidth = myCurrentWidth + 40;
document.getElementById("incrementer").innerHTML = "Progressing";
document.getElementById("incrementer").style.width = myCurrentWidth +"px";
}
//clear the interval if the progress has reached max (other wise interval will run on the background forever)
if(myCurrentWidth === 200)  {
		 clearInterval(myInt);
		document.getElementById("incrementer").innerHTML = "Progressed";
}
},1000);
}
