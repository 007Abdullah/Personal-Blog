
var users = [
    {
        email: "kb337137@gmail.com",
        password: "123"
    },

];
var dataadd = [
    // {
    //         title: "First Post",
    //         date: "5-3-2019",
    //         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsum dolor odio quae sequi maiores molestias explicabo. Rerum cum ipsam, asperiores, labore possimus rem facere ab, dolores placeat dicta inventore."
    // },
]

var PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("signup success full");
});

app.post('/login', (req, res) => {



    for (let i = 0; i < users.length; i++) {
        if (req.body.email === users[i].email && req.body.password === users[i].password) {
            res.send({
                message: "Login SuccesFully",
                status: 200

            })

        }
        else {
            res.send({
                message: "User Not Found",
                status: 400
            })
        }
    }
})
app.post("/del", (req, res, next) => {
    var index = req.body.i
    dataadd.splice(index,1);
    console.log(dataadd);
    res.send(dataadd)
});
app.post("/dashboard", (req, res, next) => {
    let newDate = new Date();
    newDate.toLocaleDateString();
    dataadd.push({
        title: req.body.title,
        date: newDate,
        description: req.body.Despcription
    })
    res.send({
        post: dataadd,
        message: "Post Successfully Created"
    })

})
app.get("/getPosts", (req, res, next) => {
    console.log(dataadd)
    res.send(dataadd)
});


app.listen(PORT, () => {
    console.log("server is running on " + PORT);
})