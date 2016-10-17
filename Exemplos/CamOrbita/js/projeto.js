// Variáveis Globais aqui
function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);			
	CamOrbita();										// VEJA A SINTAXE ABAIXO:
	
	Janela2D('rgb(40,40,100)',0.2,0.95);										
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}

// SINTAXE:
//			CamOrbita();
//
//			DICA: Mexa o mouse na janela 3D para ver o resultado!			
