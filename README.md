# AcliveJS (ver. 0.10)

A AcliveJS � uma biblioteca escrita em JavaScript e suas fun��es foram desenvolvidas a partir da
biblioteca THREE.js e do WebGL. Para programar utilizando a Aclive � preciso escrever duas fun��es
principais. S�o elas, Ambiente() e Simulacao().

Em Ambiente() s�o criados os objetos que far�o parte da cena, como part�culas, grades, eixos coordenados, 
vetores, etc. Em Simulacao() � poss�vel fazer a atualiza��o dos valores das vari�veis o que permite criar 
movimentos (uma part�cula se movendo no espa�o, por exemplo).

verifique na pasta PROJETO o arquivo LEIA-ME PRIMEIRO.txt
Ap�s ter entendido como funciona o sistema de pastas da Aclive, o arquivo projeto.js pode ser editado no 
bloco de notas do Windows, NotePad++ ou qualquer outro editor.

Corpo principal de todo o projeto

// Vari�veis globais aqui
function Ambiente()
{
	// Condi��es iniciais aqui
	(comandos aqui)
}
function Simulacao()
{
	(comandos aqui)
}

Para executar a simula��o basta clicar duas vezes no "main.html" 
Navegadores aceitos: Firefox, Google Chrome, IE, Opera.
Caso alguma simula��o n�o funcione num navegador, execute o mesmo exemplo em outro. Varia��es quanto ao 
funcionamento podem ocorrer de acordo com o sistema operacional (W7, W8, W10, WXP, Linux) e as atualiza��es 
dos brownsers. � recomend�vel manter os navegadores atualizados. 

PASTAS:
DOC: Pasta vazia.
EXEMPLOS: Cont�m diversos exemplos que ilustram as funcionalidades da engine. Para abrir os exemplos
basta clicar duas vezes nos arquivos html.
HTML: Possui arquivos no formato html que explica os comandos da AcliveJS. O arquivo comando.html traz um
ficheiro completo. Nesta pasta h� um pequeno manual javascript (manual javascript.html)
MEU PROJETO: Principal pasta da biblioteca, nela contem o arquivo main.html e a pasta JS. 
PROJETO: � nesta pasta que voc� vai criar seus projetos. Siga as instru��es em LEIA-ME PRIMEIRO.TXT

Para compreender como a AcliveJS funciona, � importante executar os exemplos numa dada ordem, veja abaixo:
- Janela3D
- Janela2D
- Sistema de coordenadas
- CamOrbita
- Grade xy-xz-yz
- Particulas
- Texto2D
- Corpo Extenso
- Vetores
- MHS
- Componentes
- Referencial Local
- Demo
- MR1D (Movimento Relativo em 1 dimens�o)*
- MR2D (Movimento Relativo em 2 dimens�es)*

* Preferencialmente no Firefox.
