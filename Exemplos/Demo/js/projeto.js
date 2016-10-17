var p=[];
var x=[];
var w=[];
var t=0;
var A=30;

x[1]=0;
x[2]=0;

w[1]=0.2*Math.PI;
w[2]=0.4*Math.PI;

function Ambiente()
{
	Janela3D('rgb(100,100,100)', 0.5, 0.8);
	InserirObservador();
	SistemaRetangular(30,true,false,false);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	CamOrbita();
	
	Janela2D('rgb(20,20,70)',0.15,0.8);
	/* Retangulo(0,0,500,700,'rgb(100,100,165)'); */
	Texto("MNPEF", 30, 30, 'rgb(255,0,0)', 30);
	Retangulo(50,180,100,60,'rgb(0,255,255');
	RetanguloV(50,300,60,60,'rgb(255,0,0)',2);
	
	Linha2D(30, 150,170,150,30,'rgb(255,255,255)', boleada);
	
	Arco(90,250,50,(1/2)*Math.PI,2*Math.PI,false,'rgb(255,100,100)');
	ArcoV(90,450,50,0.5*Math.PI,Math.PI,true,true,'rgb(255,150,100)',2)
	
	
	//Inicio();
	
	p[1] = new Particula(x[1],0,0);
	p[2] = new Particula(x[2],5,0);
	
}

function Simulacao()
{
	x[1]= A*Math.sin(w[1]*t);
	p[1].Particula.position.set(x[1],0,0);
	
	x[2]= A*Math.sin(w[2]*t);
	p[2].Particula.position.set(x[2],5,0);
	
	t+=0.01;
	
	Retangulo(45,55,120,30,'rgb(50,50,255');
	TextoV ("x= "+round(x[1], 2), 50, 80, 'rgb(255,255,255)', 20,1);
	
	
}
	