// Código para pegar os elementos que vão ser exibidos na tabela
let cad = new Array();
let bt = document.getElementById("bt");
let name = document.getElementById('nome');
let email = document.getElementById('email');
let n = 0;

bt.onclick = function(){
	n++;
	cad.push(n)
	cad.push(nome.value);
	cad.push(email.value);

	// Exibir os elementos na tabela
	cad.forEach(element => {
		let tr = document.createElement("tr");
		tr.setAttribute("id", n)
		let views = document.getElementById("tabela");
		views.appendChild(tr);

		let li = document.createElement("td");
		let texto = document.createTextNode(element);
		li.appendChild(texto);
		let views2 = document.getElementById(n);
		views2.appendChild(li);

		// Apagar o texto do forms depois de exibido na tabela
		document.getElementById("nome").value = "";
		document.getElementById("email").value = "";
	}); 
	cad.splice(0, 3);
}