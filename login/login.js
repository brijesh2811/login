let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("submit");
console.log(username, password, login);

function validation() {
    /* username error*/
    if (username.value === "") {
        console.log("Please enter a username");
        uerror.innerHTML = "*Please enter a username"
    }
    else {
        uerror.innerHTML = ""
    }
    /* password error*/
    if (password.value.length === "") {
        console.log("Please enter a password");
        perror.innerHTML = "*please enter a password"
    }
    else if (password.value.length <= 4) {
        console.log("enter password less than 4 characters");
        perror.innerHTML = "enter password less than 4 characters"
    }
    else if (password.value.length >= 16) {
        console.log("your password more than 16 characters");
        perror.innerHTML = "your password more than 16 characters"
    }
    else {
        innerHTML = ""
    }
    confirm("Sure Login Your Account")
    return false;
}