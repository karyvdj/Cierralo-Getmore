var url = "http://demo6292426.mockable.io/blickTest";

var btnContacto = document.getElementById("contact");
btnContacto.addEventListener("click", info);


function info() {
	var info = new XMLHttpRequest();
	info.open('GET', url);
	info.onload = function () {
		var data = JSON.parse(info.responseText);
		var nombre = data.name;
		console.log(nombre);

		alert(nombre)

	}
	info.send();
}
