exports.getSSL=function(url,callback){
	var https = require('https');

	var options = {
		host: url.hostname,
		port: url.port,
		method: 'GET',
		rejectUnauthorized: false,
		requestCert: true,
		agent: false
	};

	var req = https.request(options, function(res){
		var result=res.connection.getPeerCertificate();
		if( result && result.subject.CN != null ){
			callback({
				"url": result.subject.CN,
				"certificate": result.issuer.CN,
				"start": result.valid_from,
				"end": result.valid_to,
				"raw": result
			});
		}else{
			callback(null);
		}
	});

	req.on('socket', function (socket) {
		setTimeout(function(){
			req.abort();
			callback(null);
		},500);
	});

	req.on("error",function(e){
	});

	req.end();
};
