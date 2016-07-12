# AcliveJS
A AcliveJS � uma biblioteca escrita em JavaScript e suas fun��es foram desenvolvidas a partir da
biblioteca THREE.js e do WebGL. Para programar utilizando a Aclive � preciso escrever duas fun��es
principais. S�o elas, Ambiente() e Simulacao().

Em Ambiente() s�o criados os objetos que far�o parte da cena, como part�culas, grades, eixos coordenados, vetores, etc.
Em Simulacao() � poss�vel fazer a atualiza��o dos valores das vari�veis o que permite criar movimentos (uma part�cula
se movendo no espa�o, por exemplo).

Obrigatoriamente o arquivo de simula��o dever� se chamar projeto.js
Este arquivo pode ser editado no bloco de notas do Windows, NotePad++ ou qualquer outro editor.

Corpo principal de todo o projeto

// Vari�veis globais aqui
function Ambiente()
{
	(comandos aqui)
}
function Simulacao()
{
	(comandos aqui)
}

Para executar a simula��o basta clicar duas vezes no "main.html" 
Navegadores aceitos: Firefox, Google Chrome, IE, Opera.
Caso alguma simula��o n�o funcione num navegador, execute o mesmo exemplo em outro. Varia��es quanto ao funcionamento
podem ocorrer de acordo com o sistema operacional (W7, W8, W10, WXP, Linux) e as atualiza��es dos brownsers. �
recomend�vel manter os navegadores atualizados. 

PASTAS:
HTML - Possui arquivos html de ajuda com as fun��es da biblioteca e um pequeno manual do javascript
js - Pasta onde se encontra a Aclive.js e os arquivos do three.js e WebGL (n�o alterar nada nesta pasta)
Exemplos - Alguns exemplos utilizando a AcliveJS. Para testar os arquivos, basta copiar o arquivo desejado da pasta 
Exemplos para a pasta raiz Aclive. Em seguida, renomeie o arquivo para projeto.js e cliquer duas vezes no 
arquivo main.html para executar a simula��o. Para ver o c�digo do exemplo, abra a arquivo *.js utilizando o 
bloco de notas ou NotePad++ (http://portableapps.com/apps/development/notepadpp_portable). Para uma curva de aprendizagem
melhor, sugiro executar os arquivos de exemplo na seguinte sequ�ncia:
- CriarEspa�o.js
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
- MHS_VetorPosi��o.js
- MHS_VetorVelocidade.js
