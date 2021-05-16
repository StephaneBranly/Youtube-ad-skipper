alert("Extension loaded");

function checkPub(pubDetected = false){
	var pub = document.getElementsByClassName("ytp-ad-preview-container");
	console.log("check pub");
	if(Object.keys(pub).length)
	{
		console.log("- pub detected");
		if(!pubDetected) switchMuteAudio();
		var delay = pub[0].getElementsByClassName("ytp-ad-text");
		if(Object.keys(delay).length && Number.isInteger(parseInt(delay[0].innerHTML)))
		{
			console.log("-- delay detected = "+delay[0].innerHTML);
			const skipPubIn = parseInt(delay[0].innerHTML*1000);
			setTimeout(() => {skipPub();}, skipPubIn);
		}
		else
			setTimeout(() => {checkPub(true);}, 1000);
	}
	else
	{
		if(pubDetected) switchMuteAudio();
		setTimeout(() => {checkPub();}, 1000);
	}
	
}

function switchMuteAudio(){
	var button = document.getElementsByClassName("ytp-mute-button");
	button[0].click();
}

function skipPub(){
	var skipButton = document.getElementsByClassName("ytp-ad-skip-button-slot");

	if(Object.keys(skipButton).length)
	{
		console.log("-- pub skipped");
		setTimeout(() => {switchMuteAudio();}, 500);
		skipButton[0].click();
	}
	setTimeout(() => {checkPub();}, 1000);
}

function start(){
	console.log("program started");
	var moviePlayer = document.getElementById("movie_player");
	moviePlayer.style.border = "5px solid red"; 
	checkPub();
}

/* continuer to view videos ? class = yt-confirm-dialog-renderer */
/* confirm button id = confirm-button */
}

setTimeout(() => {start();}, 1000);
