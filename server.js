const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('use engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
});

app.use((req, res, next)=> {
    var now = new Date().toString();
    console.log(now);
    next();
});

var resJson = {
    name: 'Rajib',
    age: 23
};

app.get('/', (request, response)=>{
    response.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Rajib',
    });
} 
);

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About'
    });
});

app.listen(3002, ()=>{
    console.log('Server is listening at port 3002');
});