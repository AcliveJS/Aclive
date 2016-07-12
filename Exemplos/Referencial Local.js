// Variáveis globais
var x=0, y=0, z=0;

function Ambiente()
{
	CriarEspaco(0x111111);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(20,20,20);
	OlharPara(0,0,0);
	//CamOrbita();
	
	Desempenho(true,false,false);
	
	cubo = new CorpoExtenso(4,4,4,0,0,0,0,0,0,0xff0000,true,1);				// Criamos um objeto cubo -- chamada no programa: cubo.CorpoExtenso
	SLcubo = new SistemaRetangularL(10);
	//cubo.CorpoExtenso.add(SLcubo.SistemaRetangularL);
	Ligar(cubo.CorpoExtenso,SLcubo.SistemaRetangularL);
	
}

function Simulacao()
{
	cubo.CorpoExtenso.rotation.x += 0.02;
	cubo.CorpoExtenso.rotation.z += 0.002;
}