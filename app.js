var app = require('./config/express')();

app.get('/', function(req, res) {
    res.send('<h1>Bem vindo ao Near </h1>');
});
app.listen(process.env.PORT || 3002, function() {
    console.log('form app listening on port ', process.env.PORT || 3002);
});