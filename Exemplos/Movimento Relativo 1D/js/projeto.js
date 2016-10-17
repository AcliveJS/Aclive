// Declara as variáveis do Problema (fora das functions Ambiente e Simulação)
var pL, pC, pM;
var vFL, vFC, vFM;
var vEC, vEM;
var vFE;
var L;
var t = new Cronometro();

var offsetyL, offsetyC, offsetyM;

function Ambiente()
{
	// Atribuir valores iniciais (obrigatoriamente dentro da function Ambiente)
	offsetyL=0; offsetyC=0; offsetyM=0;
	L = parseFloat(document.Form1.L.value);
	t =  clock.start();
	vFL = L/150;
	vFE = L/70;
	vEC = 0;
	vEM = vFL;
	pL = 0, pC = 0, pM = 0
	vFC = vEC + vFE;
	vFM = vEM + vFE;

	// Inicia a Engine
	Janela3D('rgb(50,50,90)',0.7,0.8)
	InserirObservador(45,0.1,20000)
	PosicaoDoObservador(30,20,10);
	OlharPara(-70,20,-30);
	SistemaRetangular(50,false,false,false);
	GradeXY('rgb(150,150,0)','rgb(80,80,20)',L,2,false);
	Desempenho(true,false,false);
	Janela2D('rgb(25,25,120)',0.2,0.8)
	
		// Cria as esteiras 
		BLauro = new Plano(2, L, 1, 10, 1, L/2, 0, 0, 0, 0, 'rgb(180,180,170)',true,false);
		BCora = new PlanoT('imagens/esteira.jpg', 2, L, 1, 10, 5, L/2, 0, 0, 0, 0, true,false);
		BMarta = new PlanoT('imagens/esteira.jpg', 2, L, 1, 10, 9, L/2, 0, 0, 0, 0, true,false);
			
		// Insere os personagens 
		 Lauro = new Sprite("imagens/Lauro.png", 2, 2, 1, 0, 1, 8, 1, 8, 200);	
		 Cora = new Sprite("imagens/Cora.png", 2, 2, 5, 0, 1, 6, 1, 6, 150);
		 Marta = new Sprite("imagens/Marta.png", 2, 2, 9, 0, 1, 6, 1, 6, 80);
		 
		 // Insere os dummies (caixinhas coloridas de controle)
		 DLauro = new Caixa(0.2, 0.2, 0.2, 2, 0, 0.1, 0, 0, 0, 'rgb(255,255,0)', true, 1);
		 DCora = new Caixa(0.2, 0.2, 0.2, 6, 0, 0.1, 0, 0, 0, 'rgb(255,0,0)', true, 1);
		 DMarta = new Caixa(0.2, 0.2, 0.2, 10, 0, 0.1, 0, 0, 0, 'rgb(0,255,0)', true, 1);
		 DEsteira = new Caixa(0.2, 0.2, 0.2, 10, 0, 0.1, 0, 0, 0, 'rgb(0,0,255)',true, 1);
		 
		 // Cria os vetores
		 PosicaoL = new Vetor(2, 0, 0.1, 0, pL, 0, 1, 'rgb(255,255,0)');			 	 
		 PosicaoC = new Vetor(6, 0, 0.1, 0, pC, 0, 1, 'rgb(255,0,0)');			 
		 PosicaoM = new Vetor(10, 0, 0.1, 0, pM, 0, 1, 'rgb(0,0,255)');
		 
		 
	Pausa();
}

function Simulacao()
{
	if (pM<L)
		{
			t = parseFloat(clock.getElapsedTime());
			pL = round(vFL*t,1);
			pC = round(vFC*t,1);
			pM = round(vFM*t,1);
		}
		else
		{
			Pausa()
		}
	
	// Atualiza as posições dos Players	(também serve: Nome.Player.position.set(x,y,z);
	Lauro.Player.position.y=pL;
	Cora.Player.position.y=pC;
	Marta.Player.position.y=pM;
	
	// Anima os Players
	Lauro.Anima.update(15);
	Marta.Anima.update(8);
	
	// Anima as esteiras (tambem serve: Nome.TexturaPlano.offset.set(x,y);
	BCora.TexturaPlano.offset.y=offsetyC-=0.008; 
	BMarta.TexturaPlano.offset.y=offsetyM-=0.008;	
	
	// Atualiza as posições dos Dummies (também serve: Nome.Caixa.set(x,y,z);
	DLauro.Caixa.position.y=pL;
	DCora.Caixa.position.y=pC;
	DMarta.Caixa.position.y=pM;
	DEsteira.Caixa.position.y=pC;
	
	// Atualiza Vetores
	UpdateVetor(PosicaoL);  PosicaoL = new Vetor(2, 0, 0.1,  0, pL, 0, 1, 'rgb(255,255,0)');
	UpdateVetor(PosicaoC); PosicaoC = new Vetor(6, 0, 0.1, 0, pC, 0, 1, 'rgb(255,0,0)');
	UpdateVetor(PosicaoM); PosicaoM = new Vetor(10, pC, 0.1, 0, pM-pC, 0, 1, 'rgb(0,0,255)');
	
	// Exibe o tempo e posições de Lauro, Cora e Marta	
	Retangulo(0,0,600,1000,'rgb(25,25,120');
	Texto ("L= "+round(L,1)+" m", 50, 80, 'rgb(255,255,255)', 20,1);
	Texto ("t= "+round(t,1)+" s", 50, 120,'rgb(255,255,0)',20,1);
	Texto ("pL= "+pL+" m", 50, 180,'rgb(255,100,255)',15,0);	
	Texto ("pC= "+pC+" m", 50, 210,'rgb(255,100,255)',15,0);	
	Texto ("pM= "+pM+" m", 50, 240,'rgb(255,100,255)',15,0);	
	Linha2D (40,150,250,150,2,'rgb(255,255,255)',reta);
}





