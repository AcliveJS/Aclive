var CE=[];
var w=2;
var A=50;
var x=0;
var t=0;

function Ambiente()
{
	CriarEspaco(0x222255);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	SistemaRetangular(50,true,true,true);	
	CamOrbita();
	
	CE[1] = new CorpoExtenso(2,2,0.5,x,0,0,0,0,0,0xff0000,false,0);
	
}

function Simulacao()
{
	x=A*Math.sin(w*t);
	CE[1].CorpoExtenso.position.set(x,0,0);
	t+=0.01;
	// Por enquanto nada aqui!
}