// Variáveis Globais aqui
var CE=[];
var w, A, x, y, t, vp;

function Ambiente()
{
	// Condições iniciais aqui
	w=2; A=50; x=0; y=0, t=0;

	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												
	Janela2D('rgb(40,40,100)',0.2,0.95);	

	CE[1] = new CorpoExtenso(2,2,0.5,x,0,0,0,0,0,'rgb(255,0,0)',true,0);	// Cria o corpo extenso na cena
	vp = new Vetor(0,0,0, x,y,0,'rgb(255,255,255)');
		
	Texto("Vetores", 10, 20, 'rgb(255,255,255)', 15);
}

function Simulacao()
{
	x=A*Math.sin(w*t);
	y=(A/2)*Math.sin(2*w*t)
	CE[1].CorpoExtenso.position.set(x,y,0);
	t+=0.01;

	//Atualiza o vetor
	UpdateVetor(vp); vp = new Vetor(0,0,0, x,y,0, 1,'rgb(255,255,255)');
}


