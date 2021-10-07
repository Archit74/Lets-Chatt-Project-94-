username="";
function adduser(){
    username= document.getElementById("input_name").value;
    localStorage.setItem("user",username);
    window.location="kwitter_room.html";
}