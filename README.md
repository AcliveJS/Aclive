# AcliveJS
A AcliveJS é uma biblioteca escrita em JavaScript e suas funções foram desenvolvidas a partir da
biblioteca THREE.js e do WebGL. Para programar utilizando a Aclive é preciso escrever duas funções
principais. São elas, Ambiente() e Simulacao().

Em Ambiente() são criados os objetos que farão parte da cena, como partículas, grades, eixos coordenados, vetores, etc.
Em Simulacao() é possível fazer a atualização dos valores das variáveis o que permite criar movimentos (uma partícula
se movendo no espaço, por exemplo).

Obrigatoriamente o arquivo de simulação deverá se chamar projeto.js
Este arquivo pode ser editado no bloco de notas do Windows, NotePad++ ou qualquer outro editor.

Corpo principal de todo o projeto:
.............................
// Variáveis globais
function Ambiente()
{
	// comandos aqui!
}
function Simulacao()
{
	// comandos aqui!
}
.............................

Para executar a simulação basta clicar abrir o arquivo main.html 
Navegadores aceitos: Firefox, Google Chrome.

Dentro da pasta HTML, é possível uma breve explicação sobre os comandos. Basta clicar em Comandos.html
Os demais arquivos HTML são ficheiros de comando.

Em projeto.js há um exemplo simples que cria 2000 partículas em posições aleatórias na cena, sem simulação!