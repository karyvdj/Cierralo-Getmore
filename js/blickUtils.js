var url = "http://demo6292426.mockable.io/blickTest";

var btnContacto = document.getElementById("contact");
btnContacto.addEventListener("click", info);


function info() {
	var info = new XMLHttpRequest();
	info.open('GET', url);
	info.onload = function () {
		var data = JSON.parse(info.response);
		var name = data.name;
    var email = data.email;
		console.log(name);

		alert(name + email)

	}
	info.send();
}
