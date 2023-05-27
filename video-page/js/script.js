function startSocket() {
  let socket = new WebSocket('wss://node-xkap.onrender.com/ws', [
    'echo-protocol',
    'website',
  ]);

  socket.onopen = (event) => {
    console.log('a');

    let previousKeys = [];

    let toggledKey;
    document.addEventListener('keydown', (event) => {
      if (toggledKey != event.key) {
        previousKeys.push(event.key);
      }

      let number = 0;
      previousKeys.forEach((element) => {
        if (element == event.key) number++;
      });

      if (number > 5) {
        if (toggledKey != event.key) {
          toggledKey = event.key;
          let jsonText = `{"key": "${event.key}", "toggle": "down", "type": "KeyToggle"}`;

          socket.send(jsonText);
        }
      } else {
        let jsonText = `{"key": "${event.key}", "type": "KeyDown"}`;

        socket.send(jsonText);
      }
    });

    document.addEventListener('keyup', (event) => {
      previousKeys = previousKeys.splice(previousKeys.indexOf(event.key), 1);

      if (toggledKey == event.key) {
        toggledKey = null;
        previousKeys = previousKeys.filter((value) => value != event.key);

        let jsonText = `{"key": "${event.key}", "toggle": "up", "type": "KeyToggle"}`;

        socket.send(jsonText);
      }
    });

    document.addEventListener('mousemove', (event) => {
      let jsonText = `{"x": ${event.clientX}, 
                      "y": ${event.clientY},
                      "screenHeight": ${screen.availHeight},
                      "screenWidth": ${screen.availWidth}, 
                      "type": "MouseMove"}`;

      socket.send(jsonText);
    });

    document.onclick = (event) => {
      let jsonText = `{"buttons": ${event.buttons}, "ctrlKey": ${event.ctrlKey}, "type": "MouseDown"}`;

      socket.send(jsonText);
    };
  };
}

function connectToWebsocket() {
  try {
    startSocket();
  } catch (e) {
    alert(e);
  }
}

let userData = JSON.parse(localStorage.getItem('userDatas'));

let username = localStorage.getItem('currentAccount');
let password = userData[username].password;
let dolbyID = userData[username].dolbyID;
let streamName = userData[username].dolbyStream;

document.getElementById(
  'Stream Element'
).src = `https://viewer.millicast.com?streamId=${dolbyID}/${streamName}`;
