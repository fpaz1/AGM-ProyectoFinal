var objUsers = [
    {
        user: "joel",
        password: "123"
    },
    {
        user: "fanor",
        password: "123"
    },
    {
        user: "julio",
        password: "123"
    }
]

function loginUser(){
    var username = document.getElementById("user").value
    var pass = document.getElementById("password").value

    for(i=0; i<objUsers.length; i++){
        if(username == objUsers[i].user && pass == objUsers[i].password){
            windows.location="homepage.html";
            return
        }
    }
    console.log("Incorrect user or password")
}