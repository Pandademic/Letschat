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
Username=localStorage.getItem("UserName");
console.log("Username="+Username);  
room_name=localStorage.getItem("room_name");
console.log("rooomName:",room_name);
if(room_name==null){
   console.error("Room Name cannot be null");
} 
getData();
function logout(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("room_name");
    window.location="login.html";
}

getData();
function getData() 
{ 
    console.log("Get data started");
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { 
        document.getElementById("chat").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot) 
        {
            var childKey  = childSnapshot.key; 
            var childData = childSnapshot.val(); 
            if(childKey != "purpose") 
            {
                var firebase_message_id = childKey;
                var message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                var name = message_data['name'];
                var message = message_data['message'];
                var like = message_data['like'];
                var Name_with_colon=name+":"
                var message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                var like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                var span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                var row = Name_with_colon+message_with_tag +like_button + span_with_tag;
                document.getElementById("chat").innerHTML += row;
            }
        });  
    }); 
}
function send()
{
    getData();
    console.log("gettinng messages");
    console.error("YOU WANT THIS ERROR");
    Msg=document.getElementById("msgVal").value;
    document.getElementById("msgVal").innerHTML="";
    console.log("Msg");
    firebase.database().ref("/"+room_name+"/").push( {
        name:Username,
        message:Msg,
        like:0,
        
        });
    getData();
}
