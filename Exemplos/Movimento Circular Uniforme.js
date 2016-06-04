w=1;
var oldx, oldy, oldz;																// posição antiga da particula
var cont=0																				// contador de trajetória
var px1=20, py1=0, pz1=20;
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
	Inicio();
	
	p1 = new Particula(px1,py1,pz1);																
	s1 = new SistemaRetangularL(5);														
	p1.Particula.add(s1.SistemaRetangularL);												
	R1 = new VetorPosicao(0,0,0, px1, py1, pz1);
	v1 = new VetorVelocidade();
	a1 = new VetorAceleracao();
	c1 = new Componentes(30,30,30);
	
	//Ortografica(true,true,true,20);
	
}

function Simulacao()
{
	oldx=px1;
	oldy=py1;
	oldz=pz1;
	
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
    pz1=20*Math.cos(1.5*w*t);	
	//pz1=20;
	
	p1.Particula.position.set(px1, py1, pz1);
	Trajetoria(oldx, oldy, oldz, px1, py1, pz1, cont,1600);
	
	// update de R1
	R1.VetorPosicao.visible = false;
	cena.remove(R1.VetorPosicao);
	R1 = new VetorPosicao(0,0,0,px1,py1,pz1);
	R1.VetorPosicao.visible = true;
	
	
	// update de v1
	v1.VetorVelocidade.visible = false;
	cena.remove(v1.VetorVelocidade);
	v1 = new VetorVelocidade(px1,py1,pz1, vx1, vy1, vz1,0.5);
	v1.VetorVelocidade.visible = true;
	
	// update de a1
	a1.VetorAceleracao.visible = false;
	cena.remove(a1.VetorAceleracao);
	a1 = new VetorAceleracao(px1,py1,pz1, ax1, ay1, az1,0.2);
	a1.VetorAceleracao.visible = true;
	
	//update componentes p1
	c1.ComponenteZ.visible = false;
	c1.ComponenteX.visible = false;
	c1.ComponenteY.visible = false;
	c1.ComponenteXY.visible = false;
	c1.ComponenteXYZ.visible = false;
	cena.remove(c1.ComponenteZ);
	cena.remove(c1.ComponenteX);
	cena.remove(c1.ComponenteY);
	cena.remove(c1.ComponenteXY);
	cena.remove(c1.ComponenteXYZ);
	c1 = new Componentes(px1,py1,pz1);
	c1.ComponenteZ.visible = true;
	c1.ComponenteX.visible = true;
	c1.ComponenteY.visible = true;
	c1.ComponenteXY.visible = true;
	c1.ComponenteXYZ.visible = true;
		
	t +=h;
	cont += 1;
}

