var P
var g
var t
var y
var x, vx

g=1.66
t=0
y=60
x=0
vx=200


function Ambiente()
{
	CriarEspaco(0x555577);
	InserirObservador(45,0.1,20000);
	SistemaRetangular(30,false,false,false);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	CamOrbita();
	
	P = new Particula(0,0,y);
	
}
function Simulacao()
{
	if (y>0)
	{
		y=y+(-1)*0.5*(t^2);
		x=vx*t;
	}
	P.Particula.position.set(0,x,y);
	t+=0.001;
}
	