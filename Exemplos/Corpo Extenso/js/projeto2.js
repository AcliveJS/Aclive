// Variáveis Globais aqui
var CE=[];
var i

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(20.0, 20.0, 20.0);
	OlharPara(0.0, 0.0, 0.0);							
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false);	
	SistemaRetangular(50,false, false, false);	
	CamOrbita();
	
	Janela2D('rgb(40,40,100)',0.2,0.95);
	
	for (i=0;i<=10;i++)
	{
		CE[i] = new CorpoExtenso(2,2,0.5,4*i,0,0,0,0,0,'rgb(255,0,0)',false,0);		// Veja HTML como utilizar este comando												
	}
}

function Simulacao()
{
	// Códigos da simulação aqui
}


