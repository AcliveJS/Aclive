w=1;
//var oldx, oldy, oldz;																// posição antiga da particula
var cont=0																				// contador de trajetória
var p = [], s = [],	v=[];																// p = partícula  e s = sistema coordenada local

var px = [], py = [], pz = [];													// também funciona com: px = new Array();
var vx = [], vy = [], vz = [];
var ax = [], ay = [], az = [];


px = 20.0;
py = 0;
pz = 20.0;

vx = 0;
vy = 20*w;
vz = 0;

ax = (-1)*(w^2)*20;
ay = 0;
az = 0;


//var px1=20, py1=0, pz1=20;
//var vx1=0, vy1=20*w, vz1=0;
//var ax1=(-1)*(w^2)*20, ay1=0, az1=0;

//var x = 100, y = 100, z = 100;
//var xc=-100, yc=100, zc=0;
//var nome;
//var pos, rot;
var COrbita=true;																	// Liga e desliga a função orbit
var t=0, h=0.01


function Ambiente()
{
	Inicio();
	
	p[0] = new Particula(px,py,pz);																
	s[0] = new SistemaRetangularL(5);														
	Ligar(p[0].Particula,s[0].SistemaRetangularL);
	
	p[1] = new Particula(30,30,30);
	s[1] = new SistemaRetangularL(7);
	Ligar(p[1].Particula,s[1].SistemaRetangularL);
	
	
	R1 = new Vetor(0,0,0, px, py, pz,verde);
	v1 = new Vetor();
	a1 = new Vetor();
	c1 = new Componentes(30,30,30);
	
	//Ortografica(true,true,true,20);
	
	// teste da função de OPERAÇÕES de vetores................................................................................................................................
	// dois vetores para teste
	//v[1] = new THREE.Vector3(1,2,0);
	//v[2] = new THREE.Vector3(4,3,0);
	v[1] = new Vetor(0,0,0,10,20,0,1,vermelho);
	v[2] = new Vetor(0,0,0,15,0,0, 1,azulc);
	
	
	// somando vetores
	//v[3] = new THREE.Vector3().addVectors(v[1],v[2]);
	//v[4] = new Vetor(0,0,0,v[3].x, v[3].y, v[3].z, 1, branco);
	//v[3] = new SomaVetor(v[1], v[2], false);
	v[4] = new SubtraiVetor(v[1], v[2], true);
	//v[4] = new SomaVetor(v[2], v[3].SomaVetor, true);
	
	// subtraindo vetores
	//v[5] = new THREE.Vector3().subVectors(v[1],v[2]);
	//v[6] = new Vetor(0,0,0,v[5].x,v[5].y,v[5].z, 1, amarelo);
	//v[7] = new THREE.Vector3().subVectors(v[2],v[1]);
	//v[8] = new Vetor(0,0,0,v[7].x, v[7].y, v[7].z, 1, vermelho);
	//....................................................................................................................................................................................
	
	
}

function Simulacao()
{
	//oldx=px1;
	//oldy=py1;
	//oldz=pz1;
	
	//ax1 = 0;
	//ay1 = 0;
    //az1 = -9.8;	
	ax=(-1)*(w^2)*px;
	ay=(-1)*(w^2)*py;
    az=0;	
	
	//vx1 = vx1 + ax1*h;
	//vy1 = vy1 + ay1*h;
	//vz1 = vz1 + az1*h;
	vx=-20*w*Math.sin(w*t);
	vy=20*w*Math.cos(w*t);
	vz=0;
	
	//px1 = px1 + vx1*h;
	//py1 = py1 + vy1*h;
	//pz1 = pz1 + vz1*h;
	px=20*Math.cos(w*t);
    py=20*Math.sin(w*t);
    pz=20*Math.cos(1.5*w*t);	
	//pz1=20;
	
	p[0].Particula.position.set(px, py, pz);
	Trajetoria(p[0].Particula);
		
	// update de R1
	UpdateVetor(R1);
	R1 = new Vetor(0,0,0,px,py,pz,1,cinza);
		
	// update de v1
	UpdateVetor(v1);
	v1 = new Vetor(px,py,pz, vx, vy, vz,0.5,verde);
		
	// update de a1
	UpdateVetor(a1);
	a1 = new Vetor(px,py,pz, ax, ay, az,0.2,verde);
		
	//update componentes p1
	UpdateComponentes(c1);
	c1 = new Componentes(px,py,pz);
		
	t +=h;
	cont += 1;
}



