var firebaseConfig = {
    apiKey: "AIzaSyAx6OkMhGcuTwSA8lyP2xXIkSFNxrQ7N_Y",
    authDomain: "letschat-a8134.firebaseapp.com",
    databaseURL: "https://letschat-a8134-default-rtdb.firebaseio.com",
    projectId: "letschat-a8134",
    storageBucket: "letschat-a8134.appspot.com",
    messagingSenderId: "149667303219",
    appId: "1:149667303219:web:6ff00f98afbe65b4067846"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var MsgValue;
var Msg;
var Username;
var room_name;
var message;
var like;
var MsgToDisplay;
Username=localStorage.getItem("UserName")
console.log("Username="+Username);  
function logout(){
    window.location="login.html"
}
function setItems(){
    console.log("started.....")
    room_name=localStorage.getItem("roomName=");
    console.log(room_name);
    document.getElementById("chatroomName").innerHTML="Welcome to "+roomName;
    
}

function logout(){
    localStorage.removeItem("UserName")
    window.location="login.html";
}
function send(){
    MsgValue=document.getElementById("msgVal").value;
    console.log("MSGValue="+MsgValue);
    Msg= Username+" says :"+MsgValue;
    console.log(Msg)
    firebase.database().ref(room_name).push({
        message:Msg,
        like:0
   });
   document.getElementById("msgVal").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("chat").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    message = message_data['message'];
    like = message_data['like'];
    console.log(message);
    console.log(like);
    MsgToDisplay="<h4>"+Msg+"</h4>"
    //name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    //message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    //like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    //span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";  
   document.getElementById("chat").innerHTML += MsgToDisplay;
//End code
 } });  }); }
getData(); 
//toDO:check in code
//FIXME: GETDATA
//FIXME:WHY THE HECK DOES IT NOT PUT THE MESSAGE IN THE LISTING DIRECTORY OF THE ROOM_NAME IN DATAASE?IT INSTEAD PUTS IN AS A NEW DIRECTORY COSNULE FUNC SEND