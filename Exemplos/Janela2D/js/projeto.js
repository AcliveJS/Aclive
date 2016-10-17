/* Este programa explica como criar uma aplicação basica com a Aclivejs
   As functions Ambiente() e Simulacao() são obrigatórias. Toda aplicação deve ter em Ambiente()
   pelo menos 2 comandos: Janela3D e InserirObservador, caso contrário não irá funcionar.
*/

// Variáveis Globais aqui

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);			
	
	Janela2D('rgb(40,40,100)',0.2,0.95);		// LEIA A SINTAXE DESTE COMANDO ABAIXO									
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}

// SINTAXE:
//			Janela2D(cor, % largura, % altura);
//			
//			Observe na execução que há 1 ponto na cor VERDE referente a janela Gráfica (não definida neste exemplo)
//			A janela 2D tem borda AZUL
//			A janela 3D tem borda VERMELHO