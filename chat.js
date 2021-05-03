function findName(){
    UserName=localStorage.getItem("UserName");
    document.getElementById("404").innerHTML="Hello ,"+UserName+".Thanks for coming ,but their is no page here"
}