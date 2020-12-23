
function postSign() {
    var user = {
        name: document.getElementById('name').value,
        fathername: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerText = Http.responseText;
    }
    return false;


}

function login() {

    let Emails = document.getElementById("lemail").value;
    let Passwords = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));

    Http.onreadystatechange = (e) => {
        document.getElementById("email").innerText = Http.responseText;
    }


    return false;
}