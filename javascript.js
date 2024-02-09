
function inserir(numero) {
	document.querySelector(".tela").innerHTML += numero;
}

function apagar() {
	document.querySelector(".tela").innerHTML = "";
}

function voltar() {
	let tela = document.querySelector(".tela").innerHTML;
	document.querySelector(".tela").innerHTML = tela.substring(0, tela.length -1);
}

function calcular() {

	let tela = document.querySelector(".tela").innerHTML;

	if(tela){
		document.querySelector(".tela").innerHTML = eval(tela);
	} else {
		document.querySelector(".tela").innerHTML = "Digite uma função";
	}
}