window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})


function signUp(){

    var fullName = document.getElementById('fname').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var password = document.getElementById('password').value

    //creating a obj and assign the input value
    var userobj ={
        fullName,
        email,
        phone,
        password

    }

    var get_user = JSON.parse(localStorage.getItem("users"))
    console.log(get_user,'getuser')

    if(get_user==null){
        var arr = []
        arr.push(userobj)
        console.log("first signup")
        localStorage.setItem("users", JSON.stringify(arr))
        window.location.href = "./index.html"


    }else{
        console.log('signup')
        var findUser = get_user.find(function (value) {
            console.log(value.email, "value")
            if (value.email === email) {
                return true
            }
        })

        // if (findUser === -1) {
        //     get_user.push(userobj)
        //     localStorage.setItem("users", JSON.stringify(get_user))
        //     alert("user signup")
        //     window.location.replace("./index.html")
        // } else {
        //     alert("email address already exists")
        // }

        if (findUser === undefined) {
            get_user.push(userobj)
            localStorage.setItem("users", JSON.stringify(get_user))
            alert("user signup")
            window.location.href = "./index.html"
        } else {
            alert("email address already exists")
        }
    

    }
}