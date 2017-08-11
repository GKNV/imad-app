var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= { 

'gopi1':{
    title: 'gopi1',
    heading:'Article-one',
    date:'Aug 10,2017',
    content:`
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>    
    `
    
},
'gopi2':{  
    title: 'gopi2',
    heading:'Article-two',
    date:'Aug 10,2017',
    content:`
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>
   
    `
    
},
'gopi3':{
    
      title: 'gopi3',
    heading:'Article-three',
    date:'Aug 10,2017',
    content:`
<p>Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works Hi , This is first test html page. To check how html works</p>    
    `
},
};


function createTemplate (data){
    
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
    


var htmlTemplate=`

<html>
<head><title>
${title}
</title>
<meta name ="viewport" content="width-device-width, initial-scale=1">
<link href="/ui/style.css" rel="stylesheet" />

</head>
<body><div class="container">
<div>
<a href='/'>home</a>

</div>
<hr/>
<h3>
${heading}
</h3>
<div>
${date}
</div>
<div>
${content}
</div>
</div>
</body>
</html>


`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.tostring());

}

);

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function(req,res){
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/gopi2', function(req,res){
    res.send("test page2");
});

app.get('/gopi3', function(req,res){
    res.send("test page3");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
