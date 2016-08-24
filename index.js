var koa = require('koa');
var auth = require('koa-basic-auth');
// var router = require('koa-router')();
var app = koa();

app.use(function* (next) {
  try {
  	yield* next;
  } catch (err) {
  	if( 401 == err.status) {
  		this.status = 401;
  		this.body = 'cant haz that';
  	} else {
  		throw err;
  	}
  }
})

app.use(auth({ name: 'cherish', pass: 'fancy' }));

app.use(function* () {
	this.body = 'secret';
})

// var users = ['cherish', 'fancy', 'kitty'];

/*
* koa-router
*/
// router
//   .param('user', function *(id, next) {
//   	this.user = users[id];
//   	if(!this.user) return this.status = 404;
//   	yield next;
//   })
//   .get('/user/:user', function *(next) {
// 	this.body = this.user;
//   })
//   .get('/', function *(next) {
//   	this.body = 'This is index page';
//   })

// app.use(router.routes());



app.listen(3000);