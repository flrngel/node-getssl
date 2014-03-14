var ssl=require('./getSSL.js');

ssl.getSSL({
	hostname: process.argv[2],
	port: process.argv[3]
},function(result){
	if( result != null ){
		console.log("<tr>");
		console.log("<td>"+result.url+"</td>");
		console.log("<td>"+result.certificate+"</td>");
		console.log("<td>"+result.start+"</td>");
		console.log("<td>"+result.end+"</td>");
		console.log("</tr>");
	}
});
