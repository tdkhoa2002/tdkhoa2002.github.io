var btn = document.getElementById('btn')
var login = document.forms.login;
var username = document.getElementById("username");
var password = document.getElementById("password");
var requestUsername = document.getElementById("requestUsername");
var requestPassword = document.getElementById("requestPassword");


function check() {
    var usernameValue = document.getElementById("username").value;
    var passwordValue = document.getElementById("password").value;
    if (usernameValue == '') {
        requestUsername.innerHTML = "Username không được để trống";
        username.addEventListener('keydown',function() {
            requestUsername.remove();
        })
        return false;
    }
    if (passwordValue == '') {
        requestPassword.innerHTML = "Password không được để trống";
        password.addEventListener('keydown',function() {
            requestPassword.remove();
        })
        return false;
    }
    return true;
}