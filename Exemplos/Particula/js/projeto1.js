// Variáveis Globais aqui
var p1, p2, p3, p4;

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												// VEJA A SINTAXE ABAIXO:
	
	// Cria as partículas e coloca no ambiente 3D nas posições x, y, z.
	p1 = new Particula(5,5,10);
	p2 = new Particula(15,5,10);
	p3 = new Particula(5,15,10);
	p4 = new Particula(15,15,10);

	Janela2D('rgb(40,40,100)',0.2,0.95);										
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}


