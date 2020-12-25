

// const url = 'https://login-servers.herokuapp.com';
const url = 'http://localhost:5000';


function postSign() {
    var user = {
        name: document.getElementById('name').value,
        fathername: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            let JsonResp = JSON.parse(Http.responseText);
            if (JsonResp.status === 200) {
                document.getElementById('name').value = "";
                document.getElementById('fname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";

                alert(JsonResp.message);
                window.location.href = "login.html";
            } else {
                document.getElementById("result").innerHTML = JsonResp.message;
            }
        }
    }
    return false;
}

function login() {

    let Emails = document.getElementById("lemail").value;
    let Passwords = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));

    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            let JSONres = JSON.parse(Http.responseText)
            if (JSONres.status === 200) {
                document.getElementById('lemail').value = ""
                document.getElementById('lpassword').value = ""

                document.getElementById("Result").innerText = JSONres.message;
                document.getElementById("name").innerText = "Name :" + JSONres.user.name;
                document.getElementById("fname").innerText = "Father Name :" + JSONres.user.fathername;
                document.getElementById("email").innerText = "Email :" + JSONres.user.email;
            }
            else if (JSONres.status > 200) {
                document.getElementById("Result").innerText = JSONres.message;
                document.getElementById("name").innerText = "";
                document.getElementById("fname").innerText = "";
                document.getElementById("email").innerText = "";
            }
            else {
                document.getElementById("Result").innerText = JSONres.message;
            }

        }


    }


    return false;
}

