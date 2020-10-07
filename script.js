var numSort = [];
var numEsco = [];
let sort;
var cont = 0;


function sortear(){
	numSort = [];
	for (var i = 0; i < 6; i++) {
		do{
			sort = Math.ceil(Math.random()*60)
			if(sort == 0){
			sort++;
			} 
		}while(numSort.includes(sort));
		numSort.push(sort);
	}
	console.log(numSort);
}

function addList(num, pos){
	if(num.length == 2){
		if(numEsco.includes(num)){
		alert("Numero Escolhido Anteriormente");
		}else if(parseInt(num) > 60){
			alert("O numero digitado não pode ser maior que 60");
		}
		else{
			numEsco[pos-1] = num;
		}
	}
}

function verificar(){
	sortear();
	if(numEsco.length != 6){
		alert("A quantidade de numeros escolhidos é menor que 6.\n Digite 6 numeros de 0 a 60 com 2 casas decimais, EX: 01, 12");
	}else{
		for (var i = 0; i < 6; i++) {
			if(numSort.includes(parseInt(numEsco[i]))){
				cont++;
			}
		}
		printNumSort();
		console.log(cont);
		document.getElementById('acertos').innerHTML = "Voce acertou " + conts;
	}
}		

function printNumSort(){
	document.getElementById('numerosS').innerHTML = "";
	for (var i = 0; i < numSort.length; i++) {
		let li = document.createElement("li");
		li.append(numSort[i]);
		document.getElementById('numerosS').append(li);
	}
}