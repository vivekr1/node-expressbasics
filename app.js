// express basics 

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

// set up static path 
app.use(express.static(__dirname + '/public'));
app.use('*/css',express.static('/public/css'));
app.use('*/js',express.static('/public/js'));
app.use('*/images',express.static('/public/images'));



app.get('/users', (req,res)=>{
    
    let users = [
        {
            first_name:"John",
            lastName:"Doe",
            age:34,
            gender:"male"
        },
        {
            first_name:"Jade",
            lastName:"Dame",
            age:34,
            gender:"female"
        },
        {
            first_name:"McCormick",
            lastName:"Huddle",
            age:34,
            gender:"male"
        }
    ];
    res.json(users);
    });

    app.post('/subscribe', (req,res)=>{
        let name = req.body.name;
        let email = req.body.email;

        console.log(name  + ' has subscribed with ' + email );
        res.send('subscribed successfully. ');
    })
    app.get('/download', (req,res)=>{
        res.download(path.join(__dirname, '/downloads/report.pdf'));
    });


    app.get('/about', (req,res)=>{
        res.redirect("/about.html");
    });

// app.get('/', function(req,res){
//     res.send('hello world');
// });


// app.get('/about', (req,res)=>{
// res.send('<h1> about </h1>')
// });


// app.get('/users/:name', (req,res)=>{
//     let user = req.params.name;
//     res.send('<h2> '+user +' </h2>')
//     });



// app.post('/', function(req,res){
//         res.send('post returned from homepage');
//     });

    
app.listen(3000, ()=> {
    console.log('server running at port 3000');
})