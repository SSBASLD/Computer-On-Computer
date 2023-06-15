let streamWindow = document.getElementById('Stream Element');
let connectButton = document.getElementById('Connect Button');

const pageAccessedByReload =
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload');

let started = false;
let error = false;
function startSocket(uid) {
  started = true;
  let socket = new WebSocket('wss://websocket-server-i98k.onrender.com/ws/', [
    'echo-protocol',
    'website',
    uid,
  ]);

  socket.onmessage = (message) => {
    if (message.data.toLowerCase().includes('error:') && !error) {
      alert(message.data);
      error = true;
    }
  };

  socket.onopen = (event) => {
    alert('Connection Established');

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

let userData = JSON.parse(localStorage.getItem('userDatas'));

let username;
if (pageAccessedByReload) {
  username = sessionStorage.getItem('currentAccount');
} else username = localStorage.getItem('currentAccount');

sessionStorage.setItem('currentAccount', username);

if (username == null) {
  connectButton.style.display = 'none';
  streamWindow.style.display = 'none';
}

let password = userData[username].password;
let dolbyID = userData[username].dolbyID;
let streamName = userData[username].dolbyStream;
let uid = userData[username].uniqueID;

alert(`Your unique ID is: ${uid}`);

document.getElementById(
  'Stream Element'
).src = `https://viewer.millicast.com?streamId=${dolbyID}/${streamName}`;

function connectToWebsocket() {
  try {
    if (!started) startSocket(uid);
    else alert('Already attempting to connect');
  } catch (e) {
    started = false;
    alert(e);
  }
}
