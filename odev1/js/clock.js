let name = prompt("Adınızı giriniz", "asdas");
myName = document.querySelector("#myName");
myName.innerHTML = name;

function showTime(){
	myClock = document.querySelector("#myClock");

	let timeElapsed = Date.now();
	let today = new Date(timeElapsed);
	myClock.innerHTML = today.toDateString();
}