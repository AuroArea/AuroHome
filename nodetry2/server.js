var http = require("http");
var office = require("./office");

var officeData = {project:"staples", dept: "JS-SME" };
var off = new office();
off.setOfficeDetails(officeData);

var onRequest = function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write('Hello');
	res.end(JSON.stringify(off.getOfficeDetails(), null, 3));
	//res.json(off.getOfficeDetails()); --> in express framework
}

http.createServer(onRequest).listen(8888);
console.log('server has started');