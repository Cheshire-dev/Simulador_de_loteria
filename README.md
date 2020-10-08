# Simulador_de_loteria

Este programa é um simulador de *loteria* feito como trabalho escolar com o intuito de aprender 
as funcionalidades do JS, HTML e CSS em conjunto, o usúario digita 6 numeros, o programa sorteia 
e verifica quantos números o usúario acertou, mostrando ao final os numeros sorteados.

**Este simulador é meramente ilistrativo, ou seja, não é para jogos oficiais**


## Oque foi utilisado para sua construção

1. **HTML**: HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web. 

2. **CSS**: CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.

3. **JS**: JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.

## Código do programa(Funções)

### Sorteio dos numeros

```
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
```

### Verificador de acertos

```
function verificar(){
	sortear();
	if(numEsco.length != 6){
		alert2("Oops..." "A quantidade de numeros escolhidos é menor que 6.\n Digite 6 numeros de 0 a 60 com 2 casas decimais, EX: 01, 12");
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
```
#### Exemplo de verificação
	
Numero Sorteado| Numeros do usario| Acertos|
---------------|------------------|--------|
10             |8                 |None
15             |15                |Cont++ 
24             |26                |None
41             |34                |None 
49             |49                |Cont++
58             |60                |None	

Resultado: Cont = 2, 2 acertos


### Mostrar números sorteados

```
function printNumSort(){
	document.getElementById('numerosS').innerHTML = "";
	for (var i = 0; i < numSort.length; i++) {
		let li = document.createElement("li");
		li.append(numSort[i]);
		document.getElementById('numerosS').append(li);
	}
}
```

## Como rodar o código
Para rodar este código deve-se baixar o mesmo e executar o arquivo **_indexo.html_**
ultilisando seu navegador, recomendo ultilisar o chromer


#### Referencias

* HTML: [MDM Web docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

* CSS: [Hostinger tutoriais](https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css/#O-que-e-CSS)

* JS:	[MDM Web docs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)
