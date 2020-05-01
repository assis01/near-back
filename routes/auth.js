require('dotenv/config');
module.exports = function (app, router) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
    router.use('/*', function (req, res, next) {
        var token = req.headers['x-api-key'];
        if (token) {

      
            if (token == process.env.TOKEN_API) {
                next();
            } else {
                console.log('Token rejeitado');
                return res.sendStatus(401);
            }

        }
    });

}