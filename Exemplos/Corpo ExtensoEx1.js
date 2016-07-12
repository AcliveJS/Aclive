var CE;

function Ambiente()
{
	CriarEspaco(0x222255);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	SistemaRetangular(50,true,true,true);	
	CamOrbita();
	
	CE = new CorpoExtenso(2,2,0.5,0,0,0,0,0,0,0xff0000,false,0);
}

function Simulacao()
{
	// Por enquanto nada aqui!
}