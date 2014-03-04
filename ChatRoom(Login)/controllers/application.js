function index(req, res) {
	res.render('index', {title:"Chartoom Login Example"});
}

function chatroom(req, res) {
	res.render('chatroom', {user: req.session.user});
}
