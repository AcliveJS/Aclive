// Variáveis Globais aqui
function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							// O observador está olhando para a origem do sistema de coordenadas
	SistemaRetangular(50,false, false, false);			// VERIFIQUE A SINTAXE ABAIXO:		
	
	Janela2D('rgb(40,40,100)',0.2,0.95);										
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}

// SINTAXE:
//			SistemaRetangular(tamanho, Xnegativo, Ynegativo, Znegativo);
//			
//			onde: tamanho - tamanho dos eixos do sistema (VERMELHO para x, VERDE para y, AZUL para z)
//				  Xnegativo - Se true, mostra em pontilhado o eixo X negativo (padrão é false)			
//				  Ynegativo - Se true, mostra em pontilhado o eixo Y negativo (padrão é false)
//				  Znegativo - Se true, mostra em pontilhado o eixo Z negativo (padrão é false)