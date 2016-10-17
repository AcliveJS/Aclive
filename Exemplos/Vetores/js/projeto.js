// Variáveis Globais aqui
var p1, p2, p3, p4, vp1, vp2;

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(20.0, -20.0, 20.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												
	
	// Cria as partículas e coloca no ambiente 3D nas posições x, y, z.
	p1 = new Particula(5,5,10);
	p2 = new Particula(15,5,10);
	p3 = new Particula(5,15,10);
	p4 = new Particula(15,15,10);

	// Vetor posição da origem do sistema de coordenadas até a particula 1
	vp1 = new Vetor(0,0,0,5,5,10,1,'rgb(255,255,255)');							// Veja no HTML como utilizar esta função
	// Vetor posiçcao da partícula 2 relativa a particula 1
	vp2 = new Vetor(5, 5, 10, 15-5, 5-5, 10-10, 1,'rgb(255,0,255)');

	Janela2D('rgb(40,40,100)',0.2,0.95);
	Texto("Vetores", 10, 20, 'rgb(255,255,255)', 14);										
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}


