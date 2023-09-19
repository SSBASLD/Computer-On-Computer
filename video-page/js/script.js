let streamWindow = document.getElementById('Stream Element');
let connectButton = document.getElementById('Connect Button');
let errorDiv = document.getElementById('Error Div');
errorDiv.style.display = 'none';

const pageAccessedByReload =
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload');

let uid;

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
    if (message.data == 'ping') {
      socket.send('pong' + ' ' + uid);
      return;
    }

    if (message.data.toLowerCase().includes('error:') && !error) {
      alert(message.data);
      error = true;
    }
  };

  let mousePos = { x: 0, y: 0 };
  socket.onopen = (event) => {
    alert('Connection Established');

    let previousKeys = [];

    let toggledKey;
    const keyInterval = setInterval(() => {
      if (previousKeys.length != 0) {
        let jsonText = `{"key": [${previousKeys}], "toggle": "down", "type": "KeyDown"}`;
        socket.send(jsonText);
      }

      previousKeys = [];
    }, 10);

    document.addEventListener('keydown', (event) => {
      previousKeys.push(event.key);
    });

    let oldMousePos = { x: 0, y: 0 };
    const mouseInterval = setInterval(() => {
      if (mousePos.x != oldMousePos.x || mousePos.y != oldMousePos.y) {
        oldMousePos.x = mousePos.x;
        oldMousePos.y = mousePos.y;

        let jsonText = `{"x": ${mousePos.x}, 
          "y": ${mousePos.y},
          "screenHeight": ${screen.availHeight},
          "screenWidth": ${screen.availWidth}, 
          "type": "MouseMove"}`;

        socket.send(jsonText);
      }
    }, 10);

    document.addEventListener('mousemove', (event) => {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;
    });

    document.onclick = (event) => {
      let jsonText = `{"buttons": ${event.buttons}, "ctrlKey": ${event.ctrlKey}, "type": "MouseDown"}`;

      socket.send(jsonText);
    };
  };
}

let userData = JSON.parse(localStorage.getItem('userDatas'));

let username;
username = sessionStorage.getItem('currentAccount');
console.log('Session Storage Used: ' + username);

sessionStorage.setItem('currentAccount', username);

if (username == '' || username == undefined || username == 'null') {
  errorDiv.style.display = 'block';

  connectButton.style.display = 'none';
  streamWindow.style.display = 'none';
} else {
  let password = userData[username].password;
  let dolbyID = userData[username].dolbyID;
  let streamName = userData[username].dolbyStream;
  uid = userData[username].uniqueID;

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
}
