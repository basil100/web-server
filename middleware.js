/**
 * Created by basil on 1/18/16.
 */

var middleware = {
    requireAuth : function(req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;