# AcliveJS
A AcliveJS é uma biblioteca escrita em JavaScript e suas funções foram desenvolvidas a partir da
biblioteca THREE.js e do WebGL. Para programar utilizando a Aclive é preciso escrever duas funções
principais. São elas, Ambiente() e Simulacao().

Em Ambiente() são criados os objetos que farão parte da cena, como partículas, grades, eixos coordenados, vetores, etc.
Em Simulacao() é possível fazer a atualização dos valores das variáveis o que permite criar movimentos (uma partícula
se movendo no espaço, por exemplo).

Obrigatoriamente o arquivo de simulação deverá se chamar projeto.js
Este arquivo pode ser editado no bloco de notas do Windows, NotePad++ ou qualquer outro editor.

Corpo principal de todo o projeto

// Variáveis globais aqui
function Ambiente()
{
	(comandos aqui)
}
function Simulacao()
{
	(comandos aqui)
}

Para executar a simulação basta clicar duas vezes no "main.html" 
Navegadores aceitos: Firefox, Google Chrome, IE, Opera.
Caso alguma simulação não funcione num navegador, execute o mesmo exemplo em outro. Variações quanto ao funcionamento
podem ocorrer de acordo com o sistema operacional (W7, W8, W10, WXP, Linux) e as atualizações dos brownsers. É
recomendável manter os navegadores atualizados. 

PASTAS:
HTML - Possui arquivos html de ajuda com as funções da biblioteca e um pequeno manual do javascript
js - Pasta onde se encontra a Aclive.js e os arquivos do three.js e WebGL (não alterar nada nesta pasta)
Exemplos - Alguns exemplos utilizando a AcliveJS. Para testar os arquivos, basta copiar o arquivo desejado da pasta 
Exemplos para a pasta raiz Aclive. Em seguida, renomeie o arquivo para projeto.js e cliquer duas vezes no 
arquivo main.html para executar a simulação. Para ver o código do exemplo, abra a arquivo *.js utilizando o 
bloco de notas ou NotePad++ (http://portableapps.com/apps/development/notepadpp_portable). Para uma curva de aprendizagem
melhor, sugiro executar os arquivos de exemplo na seguinte sequência:
- CriarEspaço.js
- Sistema Cartesiano.js
- CamOrbita.js
- Inicio.js
- ParticulaEx1.js
- ParticulaEx2.js
- ParticulaEx3.js
- Corpo ExtensoEx1.js
- Corpo ExtensoEx2.js
- MHS
- Vetor
- MHS_VetorPosição.js
- MHS_VetorVelocidade.js
