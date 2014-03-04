/*
 *  @author: Shuo Liang
 */

var ACS = require('acs').ACS;
var sdk = ACS.initACS('0Ydv6OIaCiRPjQEn1P50Gk11f4URNHAa');


function login(req, res) {
	var data = {
		login: req.body.username,
		password: req.body.password
	};
	sdk.rest('users/login.json', 'POST', data, function(data) {
		if(data && data.meta) {
			if(data.meta.status == 'ok') {
				req.session.user = data.response.users[0];
				res.redirect('/chatroom');
			} else {
				res.render('/', {message: data.meta.message});
			}
		} else {
			res.render('/', {message: "Login error, try again later."});
		}
	}, req, res);
}

function logout(req, res) {
	sdk.rest('users/logout.json', 'DELETE', null, function(data) {
		if(data && data.meta) {
			if(data.meta.status == 'ok') {
				delete req.session.user;
				res.redirect('/');
			} else {
				res.render('/', {message: data.meta.message});
			}
		} else {
			res.render('/', {message: "Error to logout, try again later."});
		}
	}, req, res);
}