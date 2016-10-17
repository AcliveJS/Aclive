// Variáveis Globais aqui
var CE=[];
var w, A, x, t;

function Ambiente()
{
	// Condições iniciais aqui
	w=2; A=50; x=0; t=0;

	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												// VEJA A SINTAXE ABAIXO:
	Janela2D('rgb(40,40,100)',0.2,0.95);	

	CE[1] = new CorpoExtenso(2,2,0.5,x,0,0,0,0,0,'rgb(255,0,0)',false,0);									
	
}

function Simulacao()
{
	x=A*Math.sin(w*t);
	CE[1].CorpoExtenso.position.set(x,0,0);
	t+=0.01;
}


