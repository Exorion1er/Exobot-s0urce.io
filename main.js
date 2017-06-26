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
	LoadExternalImages : Load images from github instead of typing them yourself.
	Debug : Adds debug informations to the console.
*/

Exo.Interval = 350;
Exo.HackedMessage = "Exobot";
Exo.LoadExternalImages = true;
Exo.Debug = false;

// INTERNAL # DO NOT TOUCH

Exo.Initiated = false;
var images = {};
var windowWrapper = hackingImage = hackingInput = hackingForm = hackingWindow = hackingProgressBar = success = successInput = successButtonSend = successButtonOkay =
	targetInput = targetForm = targetWindow = hackButton = portsWrapper = adWindow = profilePicture = rankMaster = undefined;
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
	successButtonSend = document.getElementById("targetmessage-button-send");
	successButtonOkay = document.getElementsByClassName("targetmessage-button-cancel")[0];
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

	if (Exo.LoadExternalImages) {
		Exo.LoadImages();
	}
}

Exo.GUI.KillAd = function() {
	adWindow.style.display = "none";
	Exo.Log("Killed ad.");
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

	contentWord.id = "exobot-worddiv";
	contentWord.style.paddingBottom = "15px";
	contentWord.style.pointerEvents = "none";
	contentWord.style.opacity = 0.2;

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

	Exo.Log("GUI Created.");
}

Exo.GUI.Start = function() {
	var target = document.getElementById("exobot-targetid").value.trim();
	var error = document.getElementById("exobot-targeterror");

	if (target != null && target != undefined && target != "") {
		Exo.Log("Starting bot from GUI. Target : " + target);
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
		var div = document.getElementById("exobot-worddiv");
		var label = document.getElementById("exobot-wordlabel")

		Exo.Log("Received unknown word input. Word : " + word);
		error.setAttribute("hidden", "true");
		Exo.AddUnknownWord(askingForWord, word);

		label.innerHTML = "Word ():";
		div.style.pointerEvents = "none";
		div.style.opacity = 0.2;
		input.blur();
	} else {
		error.innerHTML = "Please provide a word.";
		error.removeAttribute("hidden");
	}
}

Exo.GUI.SetProfilePicture = function() {
	profilePicture.src = "https://github.com/ExoKalork/Exobot-s0urce.io/raw/master/image.gif";
	profilePicture.style.height = "72px";

	Exo.Log("Profile picture replaced.");
}

Exo.GUI.SetRankName = function() {
	rankMaster.children[1].innerHTML = "BotMaster";
	Exo.Log("Master rank renamed.");
}

Exo.LoadImages = function() {
	Exo.LoadJSON("https://raw.githubusercontent.com/ExoKalork/Exobot-s0urce.io/master/images.json", function(data) {
		images = data;
		Exo.Log("Loaded external images.");

		Exo.Initiated = true;
		Exo.Log("Exobot initiated");
	});
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

	var div = document.getElementById("exobot-worddiv");
	document.getElementById("exobot-wordlabel").innerHTML = "Word (" + key + "):";
	div.style.pointerEvents = "auto";
	div.style.opacity = 1.0;
	document.getElementById("exobot-word").focus();
	return false;
}

Exo.AddUnknownWord = function(key, word) {
	images[key] = word;
	askingForWord = false;
	Exo.Log("Added " + word + " (" + key + ") to images.");
}

Exo.ConfirmSuccess = function() {
	if (Exo.IsVisible(success)) {
		if (Exo.HackedMessage != "") {
			successInput.value = Exo.HackedMessage;
			successButtonSend.click();
		} else {
			successButtonOkay.click();
		}
		return true;
	}
	console.error("[Exobot] Tried to confirm success even though the window is not visible.");
	return false;
}

Exo.OpenPort = function(port) {
	var button = document.getElementById("window-other-port" + port);
	if (button != undefined) {
		button.click();
		Exo.Log("Opened port " + port);
	} else {
		console.error("[Exobot] Wrong port input : window-other-port" + port);
	}
}

Exo.OpenTarget = function(target) {
	targetInput.value = target.trim();
	Exo.Submit(targetForm);
	Exo.Log("Target acquired.");
}

Exo.ShowPorts = function() {
	if (Exo.IsVisible(hackButton)) {
		hackButton.click();
		return true;
	}
	console.error("[Exobot] Tried to click hack button, but it's not visible.");
}

Exo.Start = function(target) {
	if (Exo.Worker != undefined && Exo.Worker != null) {
		console.error("[Exobot] Bot is already running. Please stop it before running another instance of it.");
		return;
	}

	if (target == null || target == undefined || target.trim() == "") {
		console.error("[Exobot] Please input a target.");
		return;
	}

	var ready = targetLoaded = portsVisible = wordTyped = confirmed = false;
	var port = 1;
	var progress = timeout = 0;

	Exo.Worker = setInterval(function() {
		if (!Exo.Initiated) {
			Exo.Initiate();
			return;
		}
		if (!targetLoaded) {
			Exo.Log("Acquiring target...");
			Exo.OpenTarget(target);
			targetLoaded = true;
			return;
		}
		if (!Exo.IsVisible(targetWindow)) {
			Exo.Log("Target window is not visible yet, waiting for next tick.");
			return;
		}
		if (!portsVisible) {
				Exo.ShowPorts();
				Exo.Log("Showing ports of target.");
				portsVisible = true;
				return;
			}
		if (!Exo.IsVisible(portsWrapper)) {
			Exo.Log("Ports are not visible yet, waiting for next tick");
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
					Exo.Log("Waiting for success window to close.");
					return;
				}
				confirmed = false;
				Exo.Log("Success window closed, resuming.");
				return;
			} else {
				var barProgress = parseInt(hackingProgressBar.style.width);

				if (Exo.IsVisible(success)) {
					Exo.Log("Hacking successfull, confirming.");
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
						Exo.Log("Progress changed to " + barProgress);
						return;
					}
					Exo.Log("Progress bar is full, waiting for success window.");
					return;
				} else if (!wordTyped) {
					if (Exo.GetWordKey()) {
						if (!askingForWord) {
							Exo.Log("Typing word");
							if (Exo.TypeWord()) {
								wordTyped = true;
							} else {
								Exo.Log("Unknown word, asking user.");
							}
							return;
						}
						Exo.Log("Waiting for the unknown word from user.");
						return;
					}
					Exo.Log("Word not loaded, waiting for next tick.");
					return;
				}
				Exo.Log("Waiting for game to load to perform next action.");
				return;
			}
		}
		Exo.Log("Hacking window is not open yet, waiting for next tick.");
		return;
	}, Exo.Interval);
}

Exo.Stop = function() {
	clearInterval(Exo.Worker);
	Exo.Worker = null;
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

Exo.LoadJSON = function(url, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open("GET", url, true);
	xobj.onreadystatechange = function () {
	if (xobj.readyState == 4 && xobj.status == "200") {
			callback(JSON.parse(xobj.responseText));
		}
	};
	xobj.send(null);  
}

Exo.Log = function(log) {
	if (Exo.Debug) {
		console.log("[Exobot] " + log);
	}
}
