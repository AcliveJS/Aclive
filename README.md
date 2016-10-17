# AcliveJS (ver. 0.10)

A AcliveJS é uma biblioteca escrita em JavaScript e suas funções foram desenvolvidas a partir da
biblioteca THREE.js e do WebGL. Para programar utilizando a Aclive é preciso escrever duas funções
principais. São elas, Ambiente() e Simulacao().

Em Ambiente() são criados os objetos que farão parte da cena, como partículas, grades, eixos coordenados, 
vetores, etc. Em Simulacao() é possível fazer a atualização dos valores das variáveis o que permite criar 
movimentos (uma partícula se movendo no espaço, por exemplo).

verifique na pasta PROJETO o arquivo LEIA-ME PRIMEIRO.txt
Após ter entendido como funciona o sistema de pastas da Aclive, o arquivo projeto.js pode ser editado no 
bloco de notas do Windows, NotePad++ ou qualquer outro editor.

Corpo principal de todo o projeto

// Variáveis globais aqui
function Ambiente()
{
	// Condições iniciais aqui
	(comandos aqui)
}
function Simulacao()
{
	(comandos aqui)
}

Para executar a simulação basta clicar duas vezes no "main.html" 
Navegadores aceitos: Firefox, Google Chrome, IE, Opera.
Caso alguma simulação não funcione num navegador, execute o mesmo exemplo em outro. Variações quanto ao 
funcionamento podem ocorrer de acordo com o sistema operacional (W7, W8, W10, WXP, Linux) e as atualizações 
dos brownsers. É recomendável manter os navegadores atualizados. 

PASTAS:
DOC: Pasta vazia.
EXEMPLOS: Contém diversos exemplos que ilustram as funcionalidades da engine. Para abrir os exemplos
basta clicar duas vezes nos arquivos html.
HTML: Possui arquivos no formato html que explica os comandos da AcliveJS. O arquivo comando.html traz um
ficheiro completo. Nesta pasta há um pequeno manual javascript (manual javascript.html)
MEU PROJETO: Principal pasta da biblioteca, nela contem o arquivo main.html e a pasta JS. 
PROJETO: É nesta pasta que você vai criar seus projetos. Siga as instruções em LEIA-ME PRIMEIRO.TXT

Para compreender como a AcliveJS funciona, é importante executar os exemplos numa dada ordem, veja abaixo:
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
- MR1D (Movimento Relativo em 1 dimensão)*
- MR2D (Movimento Relativo em 2 dimensões)*

* Preferencialmente no Firefox.
