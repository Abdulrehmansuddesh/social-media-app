window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})

//for login function
function login(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var getUser = JSON.parse(localStorage.getItem('users'))
    var user = getUser.findIndex(function(value){
        if(value.email===email && value.password===password) return true
    })
    console.log(user)
    if (user !== -1) {
        alert("successfully login")
        window.location.replace('./home.html')
        localStorage.setItem('lognUser',JSON.stringify(user))
        window.location.replace("./dashboard.html")
    } else {
        console.log("credentials error")
        alert("email or password does not match!")
    }

}