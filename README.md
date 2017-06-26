# How to use
Open your browser's console and copy paste this :

```javascript
var exobot = document.createElement("script");
exobot.type = "text/javascript";
$(exobot).load("https://raw.githubusercontent.com/ExoKalork/Exobot-s0urce.io/master/main.js");
document.head.appendChild(exobot);
```

Wait a second or two and then type this : 

```javascript
Exo.Initiate();
```

You can now use the ingame bot's UI to use it.

# Configuration
To change a configuration, open your browser's console and type `Exo.<configuration> = <new value>`.

The configurations available are listed below.

```
Interval : Changes a tick duration. See the note below. DO NOT CHANGE IF YOU DON'T KNOW WHAT THIS IS. eg: 500. default: 350.
HackedMessage : Message displayed on the target's page when hacked. If this configuration is set to "" (aka nothing) the bot will click okay instead of send. eg: "Hey there". default: "Exobot".
LoadExternalImages : Load images from github instead of typing them yourself. eg: false. default: true.
Debug : Adds debug informations to the console. eg: true. default: false.

```

# Interval
A good interval for this bot is 350 and it's the default.

If you set your interval too low, the bot will still work but the server-side anticheat will block it because you'll be too fast.
The way it blocks a client is by not taking in account the word typed.
In case this happens, the bot will simply stop typing words. If it happens to you, you can't revert it, you'll have to refresh your page.
