var p1, p2, p3, p4;
var vp1

function Ambiente()
{
	CriarEspaco(0x222255);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	SistemaRetangular(50,true,true,true);	
	CamOrbita();
	
	p1 = new Particula(5,5,10);
	p2 = new Particula(15,5,10);
	p3 = new Particula(5,15,10);
	p4 = new Particula(15,15,10);
	
	//Nome = new Vetor(xo, yo, zo, vec_x, vec_y, vec_z, escala, cor);
	vp1 = new Vetor(0,0,0,5,5,10,1,0xffffff);
	
}

function Simulacao()
{
	// Por enquanto nada aqui!
}