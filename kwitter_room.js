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

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
  });
}

document.getElementById("welcome_user_name").innerHTML + "!Welcome "

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("room_name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}


function logOut()
{
  localStorage.removeItem("Username")
      localStorage.removeItem("Roomname")
      window.location.replace("index.html")
}
