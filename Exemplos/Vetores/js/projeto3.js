// Variáveis Globais aqui
var CE=[], w, A, x, v, t=0, VP, VV;

function Ambiente()
{
	// Condições iniciais aqui
	w=2; A=50; x=0; y=0, v=0, t=0;

	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	//SistemaRetangular(50,false, false, false);	
	//GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												
	Janela2D('rgb(40,40,100)',0.2,0.95);	

	CE[1] = new CorpoExtenso(2,2,0.5,x,0,0,0,0,0,'rgb(255,0,0)',true,0);
	VP = new Vetor(0,0,0,x,0,0,1,'rgb(25525500)');
	VV = new Vetor(x,0,0,v,0,0,0.2,'rgb(150,150,255)');
	
	Texto("Vetor Amarelo: Posicao", 10, 20, 'rgb(255,255,255)', 12);
	Texto("Vetor azul:    Velocidade", 10, 50, 'rgb(255,255,255)', 12);
}

function Simulacao()
{
	x=A*Math.sin(w*t);
	v=A*w*Math.cos(w*t);
	CE[1].CorpoExtenso.position.set(x,0,0);
	
	// Método Destrói / Constrói
	UpdateVetor(VP); VP = new Vetor(0,0,0,x,0,0,1,0xffff00);
	
	UpdateVetor(VV); VV = new Vetor(x,0,0,v,0,0,0.2,0x4444ff);
	t+=0.01;
}


