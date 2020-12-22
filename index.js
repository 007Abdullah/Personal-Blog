var arr = [];

function Post() {


    // var users = {
    //     name: document.getElementById('name').value,
    //     fathername: document.getElementById('fname').value,
    //     email: document.getElementById('email').value,
    //     password: document.getElementById('password').value
    // };

    // arr.push(users);
    var arr = ["one", "two", "three"];
    arr = JSON.stringify(arr);
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/signup';
    Http.open("POST", url);
    Http.send(arr);

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }


    return false;
}
