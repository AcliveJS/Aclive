var CE=[];
var w=2;
var A=50;
var x=0;
var v=0;
var t=0;
var VP,VV;

function Ambiente()
{
	CriarEspaco(0x222222);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	SistemaRetangular(50,true,true,true);	
	CamOrbita();
	
	CE[1] = new CorpoExtenso(2,2,0.5,x,0,0,0,0,0,0xff0000,false,0);
	VP = new Vetor(0,0,0,x,0,0,1,0xffff00);
	VV = new Vetor(x,0,0,v,0,0,0.2,0x4444ff);
	
}

function Simulacao()
{
	x=A*Math.sin(w*t);
	v=A*w*Math.cos(w*t);
	CE[1].CorpoExtenso.position.set(x,0,0);
	
	// M�todo Destr�i / Constr�i
	UpdateVetor(VP);
	VP = new Vetor(0,0,0,x,0,0,1,0xffff00);
	
	UpdateVetor(VV);
	VV = new Vetor(x,0,0,v,0,0,0.2,0x4444ff);
	
	t+=0.01;
	// Por enquanto nada aqui!
}