var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
'article-one':{
                title:'Article One',
                heading:'Article One',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>`
    
    
},
'article-two':{
                title:'Article Two',
                heading:'Article Two',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my second article  . .
                </p>`
    
},
'article-three':{
                title:'Article Three',
                heading:'Article Three',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my third article  . .
                </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1 "/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
    <div class="container">
        <div>
        <a href="/">Home</a>   
        </div>
        <div>
        <h3>
        ${heading}
        </h3>
        </div>
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

var counter=0;
app.get('/:counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});

var names=[];
app.get('/submit-name/:name' , function(req,res){//url:/submit-name?name=aaa
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});






app.get('/ui/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/Screenshot_1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Screenshot_1.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
