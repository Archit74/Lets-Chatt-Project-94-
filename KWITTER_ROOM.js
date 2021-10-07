const firebaseConfig = {
    apiKey: "AIzaSyBBd20pxqiyGtMs6EKA5dvcL1FzLFg4KGo",
    authDomain: "kwitter-ddf94.firebaseapp.com",
    databaseURL: "https://kwitter-ddf94-default-rtdb.firebaseio.com",
    projectId: "kwitter-ddf94",
    storageBucket: "kwitter-ddf94.appspot.com",
    messagingSenderId: "443347565242",
    appId: "1:443347565242:web:0c4f35eced036b590b2083"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=  localStorage.getItem("user");
document.getElementById("user_name1").innerHTML="Welcome: " + user_name
   function getData()
   {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
   {childKey = childSnapshot.key; Room_names = childKey;}
   )
;}
);
}
getData();
function addRoom(){
  get_input=document.getElementById("room_name").value;
  firebase.database().ref("/").child(get_input).update({
   purpose:"adding the room name"
  });
localStorage.setItem("roomName",get_input);
window.location="Kwiteer_page.html";
}
function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("roomName");
  window.location="kwitter_page_1.html"
}