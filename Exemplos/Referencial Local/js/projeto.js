// Variáveis Globais aqui
var x, y, z;
var cubo, SLcubo;

function Ambiente()
{
	// Condições iniciais aqui
	x=0; y=0; z=0;

	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(20.0, 20.0, 20.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												
	Janela2D('rgb(40,40,100)',0.2,0.95);
	Texto("Referencial Local", 10, 20, 'rgb(255,255,255)', 13);

	cubo = new CorpoExtenso(4,4,4,0,0,0,0,0,0,0xff0000,true,1);				
	SLcubo = new SistemaRetangularL(10);
	//cubo.CorpoExtenso.add(SLcubo.SistemaRetangularL);
	Ligar(cubo.CorpoExtenso,SLcubo.SistemaRetangularL);										
	
}

function Simulacao()
{
	cubo.CorpoExtenso.rotation.x += 0.02;
	cubo.CorpoExtenso.rotation.z += 0.002;
}
