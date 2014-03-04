// initialize app
function start(app, express) {
	app.use(express.cookieParser());
	app.use(express.session({key: 'node.acs', secret: "my secret" }));
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon
}

// release resources
function stop() {
	
}