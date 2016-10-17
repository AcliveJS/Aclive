// Declara as variáveis do Problema (fora das functions Ambiente e Simulação)
var pNx, pNy, pNz;
var pCx, pCy, pCz; 
var old_pC;
var vFN, vFNy, vFNz;
var vFC, vFCy, vFCz; 
var vCN; vCNy, vCNz;
var t;
var angulo;
var RefFixo;

function Ambiente()
{
	// Atribuir valores iniciais (obrigatoriamente dentro da function Ambiente)
	RefFixo=true;
	pNx=0; pNy=0; pNz=30; 
	pCx=0; pCy=60; pCz=1.7;
	vFNy=0; vFNz=8.0; vFN = 8.0;
	vFCy=50.0/3.6; vFCz=0; vFC = 50.0/3.6; 
	vCNy= -vFCy; vCNz=vFNz; vCN = Math.sqrt(Math.pow(vFN, 2) + Math.pow(vFC, 2));
	angulo = Math.atan(vFC/vFN)*(180/Math.PI);
	t = clock.start();
	
	// Inicia a Engine
	Janela3D('rgb(50,50,90)',0.7,0.8)
	InserirObservador(45,0.1,20000)
	PosicaoDoObservador(30,20,10);
	Ortografica(0,30,15,true,false,false,25);
	GradeYZ('rgb(50,50,150)','rgb(50,50,150)',200000,5,false);
	SistemaRetangular(70,false,false,false);
	Desempenho(true,false,false);
	Janela2D('rgb(25,25,120)',0.2,0.8);
	
	// Insere os Sprites na cena
	Neve = new SpriteB('imagens/neve.png', 2, 2, pNx, pNy, pNz);
	Carro = new SpriteB('imagens/carro.png',5,5,pCx,pCy,pCz);

	// Cria os vetores
	Vel_FN = new Vetor(0,0,pNz,0,0,-vFNz,1,'rgb(255,0,0)');
	Vel_FC = new Vetor(0,pCy,2.5,0,-vFCy,0,1,'rgb(0,255,0)');
	Dummie_FN = new Vetor(0,30,30, 0, 0, -vFNz, 1,'rgb(255,0,0)'); 
	Dummie_FC = new Vetor(0,30,30, 0, -vFCy, 0, 1, 'rgb(0,255,0)'); 
	Dummie_SFC = new Vetor(0,30,30, 0, +vFCy, 0, 1, 'rgb(255,255,0)'); UpdateVetor(Dummie_SFC);
	Dummie_CN = new Vetor(0,30,30, 0,+vFCy, -vFNz, 1, 'rgb(255,255,255)'); UpdateVetor(Dummie_CN);
	Dummie_CN2 = new Vetor(0,30,30, 0,+vFCy, -vFNz, 1, 'rgb(255,255,255)'); UpdateVetor(Dummie_CN2);

	Pausa();
}

function Simulacao()
{
	
	if (pNz>0)
	{
		t = parseFloat(clock.getElapsedTime()/1000);
		pNz = round(pNz - vFNz*t,2);
		pCy = round(pCy - vFCy*t,2);
	}
	else {Pausa();}

	if (RefFixo)
	{
		
		// Atualiza as posições dos sprites
		Neve.SpriteB.position.set(pNx, pNy, pNz);
		Carro.SpriteB.position.set(pCx,pCy,pCz);

		// Atualiza os vetores
		UpdateVetor(Dummie_SFC); UpdateVetor(Dummie_CN); UpdateVetor(Dummie_CN2);
		UpdateVetor(Vel_FN); Vel_FN = new Vetor(pNx,pNy,pNz,0,0,-vFNz,1,'rgb(255,0,0)');
		UpdateVetor(Vel_FC); Vel_FC = new Vetor(pCx,pCy,pCz,0,-vFCy,0,1,'rgb(0,255,0)');
		UpdateVetor(Dummie_FC); Dummie_FC = new Vetor(0,30,30, 0, -vFCy, 0, 1, 'rgb(0,255,0)');
		UpdateVetor(Dummie_FN); Dummie_FN = new Vetor(0,30,30, 0, 0, -vFNz, 1,'rgb(255,0,0)');

		// Exibe o tempo e as velocidades
		Retangulo(0,0,600,1000,'rgb(25,25,120');
		Texto ("vFN = { "+round(vFNy,1)+"i - "+round(vFNz,1)+"j } m/s", 30, 80, 'rgb(255,255,0', 15, 1);
		Texto ("vFC = { -"+round(vFCy,1)+"i + "+round(vFCz,1)+"j } m/s", 30, 110, 'rgb(255,255,0)', 15, 1);
		Texto ("|vCN| = "+round(vFN,1)+" m/s", 30, 170, 'rgb(255,255,255)', 15, 1);
		Texto ("|vFC| = "+round(vFC,1)+" m/s", 30, 200, 'rgb(255,255,255)',15,1);

		UpdateOrtografica();
	}
	else
	{
		// Atualiza as posições dos sprites
		Neve.SpriteB.position.set(pNx,pNy,pNz);
		Carro.SpriteB.position.y=pCy;
		camera.position.set(1,pCy,15);

		UpdateVetor(Dummie_FC); UpdateVetor(Vel_FN); UpdateVetor(Vel_FC);
		UpdateVetor(Dummie_SFC); Dummie_SFC = new Vetor(0,30,30, 0, +vFCy, 0, 1, 'rgb(255,255,0)');
		UpdateVetor(Dummie_CN); Dummie_CN = new Vetor(0,30,30, 0,+vFC, -vFNz, 1, 'rgb(255,255,255)');
		UpdateVetor(Dummie_FN); Dummie_FN = new Vetor(0,30,30, 0, 0, -vFNz, 1,'rgb(255,0,0)'); 
		UpdateVetor(Dummie_CN2); Dummie_CN2 = new Vetor(pNx,pNy,pNz, 0,+vFCy, -vFNz, 1, 'rgb(255,255,255)');
		UpdateVetor(Dummie_FC); Dummie_FC = new Vetor(0,30,30, 0, -vFCy, 0, 1, 'rgb(0,255,0)');

		// Exibe o tempo e as velocidades
		Retangulo(0,0,600,1000,'rgb(25,25,120');
		Texto ("vCN = { "+round(vFCy,1)+"i - "+round(vCNz,1)+"j } m/s", 30, 80, 'rgb(255,255,0)', 15, 1);
		Texto ("|vCN| = "+round(vCN,1)+ "m/s", 30, 140, 'rgb(255,255,255)', 15, 1);
		Texto ("Angulo = "+round(angulo,1)+" graus", 30, 200, 'rgb(255,50,50)',18,1);
	}		
}

function RF() {RefFixo=true;}
function RC() {RefFixo=false;}




