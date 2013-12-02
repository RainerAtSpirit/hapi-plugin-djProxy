var _ = require('lodash');

exports.mapper = function mapper ( request, callback ) {
    var svcConfig = require('../svcConfig.json');

    var svc = svcConfig[request.params.svc];
    var operation = request.params.operation || '';
    var svcUrl = svc + operation;
    var query = [];

    _.forEach(request.query, function( val, key ) {
        query.push(key + '=' + val);
    });

    if ( query.length ) {
        svcUrl += '?' + query.join('&');
    }

    console.log( 'proxy', svcUrl);

    callback(null, svcUrl);
};




