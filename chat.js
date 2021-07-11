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
getData();
var Msg;
var Username;
var room_name;
var message;
var like;
var MsgToDisplay;
Username=localStorage.getItem("UserName");
console.log("Username="+Username);  
room_name=localStorage.getItem("roomName");
console.log("rooomName:",room_name);
if(room_name==null){
   console.error("Room Name cannot be null");
} 
function setItems(){
    console.log("started.....");
    room_name=localStorage.getItem("roomName=");
    console.log(room_name);
    document.getElementById("chatroomName").innerHTML="Welcome to "+roomName;    
}

function logout(){
    localStorage.removeItem("UserName");
    window.location="login.html";
}


function getData() 
{ 
    console.log("Get data started");
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { 
        document.getElementById("chat").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot) 
        {
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if(childKey != "purpose") 
            {
                firebase_message_id = childKey;
                message_data = childData;
    
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                row = name_with_tag + message_with_tag +like_button + span_with_tag;
                document.getElementById("chat").innerHTML += row;
            }
        });  
    }); 
}
function getMessage()
{
    console.log("gettinng messages");
    console.error("YOU WANT THIS ERROR");
    Msg=document.getElementById("msgVal").value;
    console.log("Msg");

}

function send()
{
    getData();
    getMessage();
    firebase.database().ref("/"+room_name).push( {
        name:Username,
        message:Msg,
        like:0,
        
        });
    getData()
}
//FIXME: GETDATA
//FIXME:WHY THE HECK DOES IT NOT PUT THE MESSAGE IN THE LISTING DIRECTORY OF THE ROOM_NAME IN DATAASE?IT INSTEAD PUTS IN AS A NEW DIRECTORY COSNULE FUNC SEND