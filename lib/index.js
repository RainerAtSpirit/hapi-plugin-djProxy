var handler = require('./handler');

exports.register = function( plugin, options, next ) {

    plugin.expose('path', plugin.path);

    plugin.route({
        method: 'GET',
        path: '/api/{svc}/{operation*}',
        config: {
            handler: {
                proxy: {
                    mapUri: handler.mapper,
                    passThrough: true
                }
            }
        }
        //passThrough proxy and caching are mutually exclusive
        /*config: {
            handler: {
                proxy: {
                    mapUri: handler.mapper
                }
            },
            cache: {
                mode: 'server',
                expiresIn: 10 * 60 * 1000
            }
        }*/
    });

    next();
};



