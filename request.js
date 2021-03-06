var koa = require('koa');
var koaRequest = require('koa-http-request');

var app = koa();

app.use(koaRequest());

app.use(function *() {
	var res = yield this.get('https://api.github.com/repos/junyiz/koa-http-request', null, {
		'User-Agent': 'koa-http-request'
	});
	var info = JSON.parse(res);
	this.body = 'repos id: ' + info.id + '\n repos name: ' + info.full_name;
})

app.listen(8090);