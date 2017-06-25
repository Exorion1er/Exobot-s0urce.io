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
**Interval :** Changes a tick duration. See the note about this on the README. DO NOT CHANGE IF YOU DON'T KNOW WHAT THIS IS
**HackedMessage :** Message displayed on the target's page when hacked
```
