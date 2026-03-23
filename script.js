function register() {
    let username = document.getElementById("newUser").value;
    let password = document.getElementById("newPass").value;

    if(username == "" || password == "") {
        document.getElementById("msg").innerText = "Please enter username and password";
        return;
    }

    localStorage.setItem(username, password);
    document.getElementById("msg").innerText = "Account Created Successfully!";
}

function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(username);

    if(storedPass == password) {
        document.getElementById("msg").innerText = "Login Successful!";
        window.location.href = "quiz.html";
    } else {
        document.getElementById("msg").innerText = "Invalid Username or Password";
    }
}
