var Exo = {};
Exo.GUI = {};

// CONFIG

/*
	### Exobot s0urce.io ###
	Github : https://github.com/ExoKalork/Exobot-s0urce.io
	By Exorion : https://twitter.com/ExorionTV
	See LICENSE.md for License details

	-----

	Those configs can be edited directly in your browser's console.

	Interval : Changes a tick duration. See the note about this on the README. DO NOT CHANGE IF YOU DON'T KNOW WHAT THIS IS
	HackedMessage : Message displayed on the target's page when hacked
*/

Exo.Interval = 350;
Exo.HackedMessage = "Rekt By Exo";

// INTERNAL # DO NOT TOUCH

Exo.Initiated = false;
var images = {};
var windowWrapper = hackingImage = hackingInput = hackingForm = hackingWindow = hackingProgressBar = success = successInput = successButton = targetInput =
targetForm = targetWindow = hackButton = portsWrapper = adWindow = profilePicture = rankMaster = undefined;
var askingForWord = false;

Exo.Initiate = function() {
	windowWrapper = document.getElementsByClassName("window-wrapper")[0];
	hackingImage = document.getElementById("tool-type").children[0];
	hackingInput = document.getElementById("tool-type-word");
	hackingForm = document.getElementById("tool-type-form");
	hackingWindow = document.getElementById("window-tool");
	hackingProgressBar = document.getElementById("progressbar-firewall-amount");
	success = document.getElementById("topwindow-success");
	successInput = document.getElementById("targetmessage-input");
	successButton = document.getElementById("targetmessage-button-send");
	targetInput = document.getElementById("targetid-input");
	targetForm = document.getElementById("targetid-input-form");
	targetWindow = document.getElementById("window-other");
	hackButton = document.getElementById("window-other-button");
	portsWrapper = document.getElementById("window-other-attackbutton-wrapper");
	adWindow = document.getElementById("window-msg");
	profilePicture = document.getElementsByClassName("window-my-wrapper")[0].children[0];
	rankMaster = document.getElementById("window-rank-container").children[5];

	Exo.GUI.KillAd();
	Exo.GUI.SetProfilePicture();
	Exo.GUI.SetRankName();
	Exo.GUI.Create();

	Exo.Initiated = true;
	console.log("Exobot initiated.");
}

Exo.GUI.KillAd = function() {
	adWindow.style.display = "none";
	console.log("Killed ad.");
}

Exo.GUI.Create = function() {
	// GUI Create

	var gui = document.createElement("div");
	var title = document.createElement("div");
	var titleIcon = document.createElement("img");
	var titleClose = document.createElement("span");
	var titleCloseIcon = document.createElement("img");
	var content = document.createElement("div");
	var contentTarget = document.createElement("div");
	var contentTargetLabel = document.createElement("div");
	var contentTargetForm = document.createElement("form");
	var contentTargetFormInput = document.createElement("input");
	var contentTargetSubmit = document.createElement("div");
	var contentTargetError = document.createElement("div");
	var contentWord = document.createElement("div");
	var contentWordLabel = document.createElement("div");
	var contentWordForm = document.createElement("form");
	var contentWordFormInput = document.createElement("input");
	var contentWordSubmit = document.createElement("div");
	var contentWordError = document.createElement("div");

	gui.classList.add("window");
	gui.style.right = "30px";
	gui.style.bottom = "20px";
	gui.style.zIndex = 301;
	gui.style.backgroundColor = "#8c2020";

	title.classList.add("window-title");

	titleIcon.classList.add("icon-small", "window-title-icon");
	titleIcon.src = "https://github.com/ExoKalork/Exobot-s0urce.io/raw/master/image.gif";

	titleClose.classList.add("window-close-style", "window-title-icon");

	titleCloseIcon.classList.add("window-close-img");
	titleCloseIcon.src = "../client/img/icon-close.png";

	content.classList.add("window-content");
	content.style.width = "336px";

	contentTarget.style.borderBottom = "1px solid rgba(191, 207, 210, .5)";
	contentTarget.style.paddingBottom = "15px";
	contentTarget.style.marginBottom = "15px";

	contentTargetLabel.innerHTML = "Target ID:";
	contentTargetLabel.style.marginBottom = "5px";

	contentTargetForm.classList.add("input-form-wrapper");
	contentTargetForm.setAttribute("onsubmit", "Exo.GUI.Start(); return false;");

	contentTargetFormInput.id = "exobot-targetid";
	contentTargetFormInput.classList.add("input-form");
	contentTargetFormInput.autocomplete = "off";
	contentTargetFormInput.spellcheck = false;
	contentTargetFormInput.type = "text";
	contentTargetFormInput.style.width = "197px";

	contentTargetSubmit.type = "button";
	contentTargetSubmit.classList.add("button");
	contentTargetSubmit.style.width = "60px";
	contentTargetSubmit.innerHTML = "Start";
	contentTargetSubmit.setAttribute("onclick", "Exo.GUI.Start();");

	contentTargetError.id = "exobot-targeterror";
	contentTargetError.style.color = "orange";
	contentTargetError.innerHTML = "";
	contentTargetError.hidden = true;

	contentWord.style.paddingBottom = "15px";

	contentWordLabel.id = "exobot-wordlabel";
	contentWordLabel.innerHTML = "Word ():";
	contentWordLabel.style.marginBottom = "5px";

	contentWordForm.classList.add("input-form-wrapper");
	contentWordForm.setAttribute("onsubmit", "Exo.GUI.WordEntered(); return false;");

	contentWordFormInput.id = "exobot-word";
	contentWordFormInput.classList.add("input-form");
	contentWordFormInput.autocomplete = "off";
	contentWordFormInput.spellcheck = false;
	contentWordFormInput.type = "text";
	contentWordFormInput.style.width = "167px";

	contentWordSubmit.type = "button";
	contentWordSubmit.classList.add("button");
	contentWordSubmit.style.width = "90px";
	contentWordSubmit.innerHTML = "Validate";
	contentWordSubmit.setAttribute("onclick", "Exo.GUI.WordEntered();");

	contentWordError.id = "exobot-worderror";
	contentWordError.style.color = "orange";
	contentWordError.innerHTML = "";
	contentWordError.hidden = true;

	// Tree create

	titleClose.appendChild(titleCloseIcon);

	title.appendChild(titleIcon);
	title.innerHTML += "Exobot";
	title.appendChild(titleClose);

	contentTargetForm.innerHTML += "> ";
	contentTargetForm.appendChild(contentTargetFormInput);

	content.appendChild(contentTarget);
	contentTarget.appendChild(contentTargetLabel);
	contentTarget.appendChild(contentTargetForm);
	contentTarget.innerHTML += " ";
	contentTarget.appendChild(contentTargetSubmit);
	contentTarget.appendChild(contentTargetError);

	contentWordForm.innerHTML += "> ";
	contentWordForm.appendChild(contentWordFormInput);

	content.appendChild(contentWord);
	contentWord.appendChild(contentWordLabel);
	contentWord.appendChild(contentWordForm);
	contentWord.innerHTML += " ";
	contentWord.appendChild(contentWordSubmit);
	contentWord.appendChild(contentWordError);

	content.appendChild(contentTarget);
	content.appendChild(contentWord);

	gui.appendChild(title);
	gui.appendChild(content);

	windowWrapper.appendChild(gui);

	console.log("GUI Created.");
}

Exo.GUI.Start = function() {
	var target = document.getElementById("exobot-targetid").value.trim();
	var error = document.getElementById("exobot-targeterror");

	if (target != null && target != undefined && target != "") {
		console.log("Starting bot from GUI. Target : " + target);
		error.setAttribute("hidden", "true");
		Exo.Start(target);
	} else {
		error.innerHTML = "Please provide a target.";
		error.removeAttribute("hidden");
	}
}

Exo.GUI.WordEntered = function() {
	var input = document.getElementById("exobot-word");
	var word = input.value.trim();
	var error = document.getElementById("exobot-worderror");

	input.value = "";

	if (word != null && word != undefined && word != "") {
		console.log("Received unknown word input. Word : " + word);
		error.setAttribute("hidden", "true");
		Exo.AddUnknownWord(askingForWord, word);
	} else {
		error.innerHTML = "Please provide a word.";
		error.removeAttribute("hidden");
	}
}

Exo.GUI.SetProfilePicture = function() {
	profilePicture.src = "https://github.com/ExoKalork/Exobot-s0urce.io/raw/master/image.gif";
	profilePicture.style.height = "72px";

	console.log("Profile picture replaced.");
}

Exo.GUI.SetRankName = function() {
	rankMaster.children[1].innerHTML = "BotMaster";
	console.log("Master rank renamed.");
}

Exo.GetWordKey = function() {
	match = /\/([a-z0-9]+)\.png$/.exec(hackingImage.src);

	if (match[1] == "template") {
		return false;
	}

	return match[1];
}

Exo.TypeWord = function() {
	var key = Exo.GetWordKey().toString();

	if (key != false && images[key] != null) {
		hackingInput.value = images[key];
		Exo.Submit(hackingForm);
		return true;
	}
	askingForWord = key;
	document.getElementById("exobot-word").focus();
	return false;
}

Exo.AddUnknownWord = function(key, word) {
	images[key] = word;
	askingForWord = false;
	console.log("Added " + word + " (" + key + ") to images.");
}

Exo.ConfirmSuccess = function() {
	if (Exo.IsVisible(success)) {
		successInput.value = Exo.HackedMessage;
		successButton.click();
		return true;
	}
	console.error("Tried to confirm success even though the window is not visible.");
	return false;
}

Exo.OpenPort = function(port) {
	var button = document.getElementById("window-other-port" + port);
	if (button != undefined) {
		button.click();
		console.log("Opened port " + port);
	} else {
		console.error("Wrong port input : window-other-port" + port);
		console.error(button);
	}
}

Exo.OpenTarget = function(target) {
	targetInput.value = target.trim();
	Exo.Submit(targetForm);
	console.log("Target acquired.");
}

Exo.ShowPorts = function() {
	if (Exo.IsVisible(hackButton)) {
		hackButton.click();
		return true;
	}
	console.error("Tried to click hack button, but it's not visible.");
}

Exo.Start = function(target) {
	if (target == null || target == undefined || target.trim() == "") {
		console.error("Please input a target.");
		return;
	}

	var ready = targetLoaded = portsVisible = wordTyped = confirmed = false;
	var port = 1;
	var progress = 0;

	$(hackingImage).load = function() {
		var barProgress = parseInt(hackingProgressBar.style.width);

	}

	Exo.Worker = setInterval(function() {
		if (!Exo.Initiated) {
			Exo.Initiate();
			return;
		}
		if (!Exo.IsVisible(targetWindow)) {
			if (!targetLoaded) {
				console.log("Acquiring target...");
				Exo.OpenTarget(target);
				targetLoaded = true;
				return;
			}
			console.log("Target window is not visible yet, waiting for next tick.");
			return;
		}
		if (!Exo.IsVisible(portsWrapper)) {
			if (!portsVisible) {
				Exo.ShowPorts();
				console.log("Showing ports of target.");
				portsVisible = true;
				return;
			}
			console.log("Ports are not visible yet, waiting for next tick");
			return;
		}
		if (!ready) {
			Exo.OpenPort(port);
			ready = true;
			return;
		}

		if (ready && Exo.IsVisible(hackingWindow)) {
			if (confirmed) {
				if (Exo.IsVisible(success)) {
					console.log("Waiting for success window to close.");
					return;
				}
				confirmed = false;
				console.log("Success window closed, resuming.");
				return;
			} else {
				var barProgress = parseInt(hackingProgressBar.style.width);

				if (Exo.IsVisible(success)) {
					console.log("Hacking successfull, confirming.");
					Exo.ConfirmSuccess();

					ready = false;
					progress = 0;
					confirmed = true;
					wordTyped = false;

					port += 1;
					if (port > 3) {
						port = 1;
					}

					return;
				} else if (barProgress != progress) {
					if (barProgress < 100) {
						wordTyped = false;
						progress = barProgress;
						console.log("Progress changed to " + barProgress);
						return;
					}
					console.log("Progress bar is full, waiting for success window.");
					return;
				} else if (!wordTyped) {
					if (Exo.GetWordKey()) {
						if (!askingForWord) {
							console.log("Typing word");
							if (Exo.TypeWord()) {
								wordTyped = true;
							} else {
								console.log("Unknown word, asking user.");
							}
							return;
						}
						console.log("Waiting for the unknown word from user.");
						return;
					}
					console.log("Word not loaded, waiting for next tick.");
					return;
				}
				console.log("Waiting for game to load to perform next action.");
				return;
			}
		}
		console.log("Hacking window is not open yet, waiting for next tick.");
		return;
	}, Exo.Interval);
}

Exo.Stop = function() {
	clearInterval(Exo.Worker);
}

// UTILS

Exo.IsVisible = function(dom) {
	if (dom.style.display != "none") {
		return true;
	}
	return false;
}

Exo.Submit = function(dom) {
	$(dom).trigger("submit");
}
