// suas variáveis globais aqui
//var px1=0, py1=0, pz1=0;
//var vx1=10, vy1=0, vz1=25;
//var ax1=0, ay1=0, az1=-9.8;

w=1;
var px1=20, py1=0, pz1=20;
var px2=50, py2=50, pz2=50;
var vx1=0, vy1=20*w, vz1=0;
var ax1=(-1)*(w^2)*20, ay1=0, az1=0;

var x = 100, y = 100, z = 100;
var xc=-100, yc=100, zc=0;
var nome;
var pos, rot;
var COrbita=true;																	// Liga e desliga a função orbit
var t=0, h=0.01

function Ambiente()
{
	CriarEspaco(0x222222);														// Primeiro comando a ser dado - Criamos o espaço (cor de fundo)
	InserirObservador(45,0.1,20000);											// Segundo comando a ser dado - Inserimos o observador no espaço (ang, near, far)
	PosicaoDoObservador(obx,oby,obz);													// Posiciona o observador (x,y,z)
	OlharPara(0,0,0);
	if (COrbita) { CamOrbita();} else {OlharPara(20,20,20);}		    // Se o orbit estiver desligado fazer o observador olhar para (a partir da sua posiçao)
	
	Desempenho(true, false, false);											// Exibe as estatísticas da cena: fps, ms e Mb


	SistemaRetangular(100,true,true,false);								// Cria um sistema cartesiano (default) - Este comando mostra os eixos do sistema
	 GradeXY(60,5, false);	
	 //GradeXZ(20,2,true);
	//GradeYZ(50,2,false);
	
	p1 = new Particula(px1,py1,pz1);											// Cria uma partícula de nome p1 na posição px, py, pz
	s1 = new SistemaRetangularL(5);											// Exibe o sistema de coordenada Local da partícula p1
	Ligar(p1.Particula,s1.SistemaRetangularL);
	
	R1 = new Vetor(0,0,0, px1, py1, pz1,1,verde);
	v1 = new Vetor();
	v1r = new Vetor();
	a1 = new Vetor();
	c1 = new Componentes(px1,py1,pz1);
	
	p2 = new Particula(px2,py2,pz2);
	c2 = new Componentes(50,50,50);
	
	R2 = new Vetor(px1,py1,pz1, 50,50,50,1, azulc);
			
	cubo1 = new CorpoExtenso(1.5,1.5,1.5,30,20,10,0,Math.PI*0.25,0);					// Cria um objeto chamado cubo1 que é um CorpoExtenso
	SCLcubo1 = new SistemaRetangularL(4);												// Exibe o sistema de coordenada Local do cubo1
	//SCLcubo1.SistemaRetangularL.position.set(35, 25, 10);
	Ligar(cubo1.CorpoExtenso,SCLcubo1.SistemaRetangularL);
	
	dummy = new SistemaRetangularL(5);
	dummy.SistemaRetangularL.position.set(5,5,0);	
	
	Ligar(p2.Particula,p1.Particula);
	
	// o for loop abaixo é apenas para testar se estamos realmente criando vários objetos com nomes diferentes
	for (i=-100; i<100; i++)
	{
		//nome = nome+"i";
		nome = new Particula(xc+i*20,yc+i^2, zc);
		//cubo.position.x += i+10
	}
	
}

function Simulacao()
{
	cubo1.CorpoExtenso.rotation.z +=0.05;
	cubo1.CorpoExtenso.rotation.x +=0.02;
	
	//ax1 = 0;
	//ay1 = 0;
    //az1 = -9.8;	
	ax1=(-1)*(w^2)*px1;
	ay1=(-1)*(w^2)*py1;
    az1=0;	
	
	//vx1 = vx1 + ax1*h;
	//vy1 = vy1 + ay1*h;
	//vz1 = vz1 + az1*h;
	vx1=-20*w*Math.sin(w*t);
	vy1=20*w*Math.cos(w*t);
	vz1=0;
	
	//px1 = px1 + vx1*h;
	//py1 = py1 + vy1*h;
	//pz1 = pz1 + vz1*h;
	px1=20*Math.cos(w*t);
    py1=20*Math.sin(w*t);
    pz1=20;	
	
	// update posição da partícula
	p1.Particula.position.set(px1, py1, pz1);
		
	// update de R1
	UpdateVetor(R1);
	R1 = new Vetor(0,0,0, px1, py1, pz1,1,verde);
		
	// update de v1
	UpdateVetor(v1);
	v1 = new Vetor(px1,py1,pz1, vx1, vy1, vz1,0.5,azule);
		
	// update de v1r
	UpdateVetor(v1r);
	v1r = new Vetor(10,10,0,vx1, vy1, vz1,0.5,0xff2244);
		
	// update de a1
	UpdateVetor(a1);
	a1 = new Vetor(px1,py1,pz1, ax1, ay1, az1,0.2,azule);
	
	// update de R2
	UpdateVetor(R2);
	R2 = new Vetor(px1,py1,pz1, px2-px1,py2-py1,pz2-pz1,1, azulc);
	
	
	// Update componentes da particula p1
	UpdateComponentes(c1);
	c1 = new Componentes(px1,py1,pz1);

	
	t +=h;
	//if (pz1<=0.0) {h=0}
}

