
// Your web app's Firebase configuration
var  firebaseConfig = {
    apiKey: "AIzaSyBM8YAxLNjOJvZuuiT_VtvW33jkxn-Fdmg",
    authDomain: "letschat-web-app-d1ad8.firebaseapp.com",
    databaseURL: "https://letschat-web-app-d1ad8-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-d1ad8",
    storageBucket: "letschat-web-app-d1ad8.appspot.com",
    messagingSenderId: "566623824713",
    appId: "1:566623824713:web:99ef88aaa0952d7cfa4898"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();