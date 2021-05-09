var firebaseConfig = {
    apiKey: "AIzaSyCmE3yIrSMKYDadEkgPKlrUG4AdtaJS_nI",
    authDomain: "letschat-1fc01.firebaseapp.com",
    databaseURL: "https://letschat-1fc01-default-rtdb.firebaseio.com",
    projectId: "letschat-1fc01",
    storageBucket: "letschat-1fc01.appspot.com",
    messagingSenderId: "1083839247742",
    appId: "1:1083839247742:web:d3cb3b7c495984471aef2f"
  };
  firebase.initializeApp(firebaseConfig);
function login(){
    username=document.getElementById("UserName").value;
    localStorage.setItem("UserName",username);
    window.location = "page.html"
}