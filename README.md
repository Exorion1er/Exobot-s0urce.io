# How to use
**Step 1 :** Open your browser's console and copy paste this :

```javascript
var exobot = document.createElement("script");
exobot.type = "text/javascript";
$(exobot).load("https://raw.githubusercontent.com/ExoKalork/Exobot-s0urce.io/master/main.js");
document.head.appendChild(exobot);
```

**Step 2 :** Wait a second or two and then type this : 

```javascript
Exo.Initiate();
```

Exobot is ready to go. You can now see a red GUI at the bottom right of your game screen.

**Step 3 :** You first need a target. A target ID looks like this : `0gK-4OLweWN9BePvAFwv`
A good way to get a target would be to open the game in another browser and log in, then get your brand new target's ID, and put it in the "Target ID" input. Then, just click Start and your bot will work by itself.

**Note :** If the bot encounters a word that he doesn't know about, it will prompt you what word it should type. If this happens, you'll see the "Word" input become visible and usable. You can type the needed word in that input and then click "Validate". After that, the bot will resume it's work and won't ask you again about this word.

# Configuration
To change a configuration, open your browser's console and type `Exo.<configuration> = <new value>`.

The configurations available are listed below.

- **Setup :** Tells the bot to either buy data miners or not. eg: false. default: true.
- **SetupInterval :** Changes a tick duration for the bot setup. eg: 300. default: 250.
- **AttackInterval :** Changes a tick duration. See the note below. DO NOT CHANGE IF YOU DON'T KNOW WHAT THIS IS. eg: 500. default: 350.
- **HackedMessage :** Message displayed on the target's page when hacked. If this configuration is set to "" (aka nothing) the bot will click okay instead of send. eg: "Hey there". default: "Exobot".
- **LoadExternalImages :** Load images from github instead of typing them yourself. eg: false. default: true.
- **Debug :** Adds debug informations to the console. eg: true. default: false.

# Attack Interval
A good interval for this bot is 350 and it's the default.

If you set your interval too low, the bot will still work but the server-side anticheat will block it because you'll be too fast.
The way it blocks a client is by not taking in account the word typed.
In case this happens, the bot will simply stop typing words. If it happens to you, you can't revert it, you'll have to refresh your page.

---
My name is Jason and I'm currently looking for a job. If you want to hire me you can contact me at pro@exorion.me
