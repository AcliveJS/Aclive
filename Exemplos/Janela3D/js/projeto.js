/* Este programa explica como criar uma aplicação basica com a Aclivejs
   As functions Ambiente() e Simulacao() são obrigatórias. Toda aplicação deve ter em Ambiente()
   pelo menos 2 comandos: Janela3D e InserirObservador, caso contrário não irá funcionar.
*/

// Variáveis Globais aqui

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(40,40,100)',0.95,0.95);		// LEIA A SINTAXE DESTE COMANDO ABAIXO
	InserirObservador(45,0.1,20000);			// E preciso existir o observador no Universo Aclive
												// Sem ele a janela 3D não funciona

	// (Códigos de montagem da simulação)
}

function Simulacao()
{
	// Códigos da simulação aqui
}

// SINTAXE:
//			Janela3D(cor, % largura, % altura);
//			No exemplo acima criamos uma janela 3D na cor padrão RGB que ocupa 95% da janela na largura e 95% na altura
//
//			Observe na execução que há dois pontos no canto inferior esquerdo da janela 3D
//			O 1o ponto, na cor AZUL, refere-se a janela 2D que não foi definida neste programa
//			O 2o ponto, na cor VERDE, refere-se a janela Gráfica que não foi definida neste programa
//			A janela 3D tem borda VERMELHO