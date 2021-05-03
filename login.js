function login(){
    username=document.getElementById("UserName").value;
    localStorage.setItem("UserName",username);
    window.location = "page.html"
}