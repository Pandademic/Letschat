//Vars
var firebaseConfig = {
   apiKey: "AIzaSyAx6OkMhGcuTwSA8lyP2xXIkSFNxrQ7N_Y",
   authDomain: "letschat-a8134.firebaseapp.com",
   databaseURL: "https://letschat-a8134-default-rtdb.firebaseio.com",
   projectId: "letschat-a8134",
   storageBucket: "letschat-a8134.appspot.com",
   messagingSenderId: "149667303219",
   appId: "1:149667303219:web:6ff00f98afbe65b4067846"
 };
var user_name=localStorage.getItem("UserName");
var room_name;
//Test Case
console.log("Firebase Config:"+firebaseConfig);
console.log("UserName:"+user_name);
//console.log("Roomname:"+room_name);
//Activate Firebase
firebase.initializeApp(firebaseConfig);
//Func
function RoomDisplay(){
room_name=document.getElementById("roomname").value;
//test case
console.log("Room Name:"+room_name);
}
function redirectToRoomName(){
   RoomDisplay()
   console.log(room_name);
   localStorage.setItem("room_name",room_name);
   firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
   window.location="chatPage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
   document.getElementById("list").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
var Room_names = childKey;
//Start code
console.log("room name-"+Room_names);
var row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("list").innerHTML+=row;

//End code
});});}
getData();