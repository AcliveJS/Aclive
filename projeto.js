// Declara as variáveis... 
var pL, pC, pM					// Posição de Lauro, Cora e Marta
var vFL, vFC, vFM    			// Velocidade de Lauro, Cora e Marta relativo ao referencial fixo (solo)
var vEC, vEM 						// Velociade Cora e Marta relativo à esteira (OBS: Lauro não está sobre esteira)
var vFE				  				// Velocidade da Esteira relativo ao referencial fixo (solo)
var L									// Comprimento da esteira

// Atribuições de valores para as variáveis do problema
// LEITURA:
// Um aeroporto dispõe de uma esteira rolante para ajudar os passageiros a atravessar um longo corredor. 
// Lauro não usa a esteira rolante e leva 150s para atravessar o corredor (...)
L=200;								// Vamos adotar um comprimento para esteira (para realizar a simulação). Adotamos 200uc (unidade de comprimento)
vFL = 1.33333;					// Esta é a velocidade de Lauro para cobrir o comprimento da esteira em 150ut (unidade de tempo)

// (...) Cora, que fica parada na esteira rolante, cobre a mesma distância em 70s. (...)
vFE = 2.8571;				  		// velocidade da esteira relativo ao referencial fixo (Um ponto fixo na esteira gasta 70ut para cobrir 200uc)
vEC = 0.0;							// velocidade de Cora relativa a esteira (parada sobre a esteira)

// (...) Marta prefere andar na esteira rolante. Suponha que Lauro e Marta caminhem com a mesma velocidade.
vEM = vFL;							// O problema diz que Marta caminha com mesma rapidez que Lauro, como ela está sobre a esteira, então caminha
										// sobre ela com a mesma rapidez caminha sobre o solo, logo, a velocidade de Marta relativa a Esteira é a mesma 
										// que a velocidade de Lauro relativa ao solo;


t=0;									// Zeramos nosso cronômetro
pL=0, pC=0, pM=0;				// Os três saem da mesma posição (início da esteira)


// Utilizando a equação do movimento relativo, descobrimos qual a velocidade resultante de cada um relativo ao solo (fixo)
vFC = vEC + vFE;				// vEC = vFC - vFE		Assim: vFC = vEC + vFE
vFM = vEM + vFE;				// vEM = vFM - vFE		Assim: vFM = vEM + vFE


function Ambiente()
{

	 //Inicio();
	 CriarEspaco(0x999999);
	 InserirObservador(45, 0.1, 20000);
	 PosicaoDoObservador(180,240,80);
	 OlharPara(-70,-100,0);
	 CamOrbita();     
     SistemaRetangular(50, false, false, false);  
	 GradeXY(200,10, false);  
	 Desempenho(true, false, false);
	 
	
			
		BLauro = new Plano(10.0, 200.0, 1,1, 5,100,0,0,0,0,0xff0000, true,false);
		BCora = new Plano(10.0, 200.0, 1,1, 25,100,0,0,0,0,0xffff00, true,false);
		BMarta = new Plano(10.0, 200.0, 1,1, 45,100,0,0,0,0,0xffff00, true,false);
		
		Lauro = new CorpoExtenso(5,5,5,5,pL,2.5,0,0,0,0xffff00, true, 1);
		Cora = new CorpoExtenso(5,5,5,25,pC,2.5,0,0,0,0x00ff00, true, 1);
		Marta = new CorpoExtenso(5,5,5,45,pM,2.5,0,0,0,0x0000ff, true,1);
		
		
		posicaoL = new Texto2D( "pL="+vFL, 5, vFL, 10, 130, 60, {fontface:"Arial", fontsize:18,  borderColor: {r:255, g:0, b:0, a:1.0},  
        borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" }); 
        
		posicaoC = new Texto2D( "pC="+vFC, 25, vFC, 10, 130, 60, {fontface:"Arial", fontsize:18,  borderColor: {r:255, g:0, b:0, a:1.0},  
        borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" }); 
		 
		posicaoM = new Texto2D( "pM="+pM, 45, vFC, 10, 130, 60, {fontface:"Arial", fontsize:18,  borderColor: {r:255, g:0, b:0, a:1.0},  
        borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" });
		
		tempo = new Texto2D( "t = "+t, 0, vFC, 20, 220, 150, {fontface:"Arial", fontsize:36,  borderColor: {r:0, g:0, b:255, a:1.0},  
        borderThickness:4, fillColor: {r:0, g:0, b:255, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" });
         
	
}

	

function Simulacao()
{
	//if (pL<200) {pL=round(vFL*t,2)};
	//Lauro.CorpoExtenso.position.y = pL;
	
	//if (pC<200) {pC=round(vFC*t,2)};
	//Cora.CorpoExtenso.position.y = pC;
	
	if (pM<200) 
	{
		pL=round(vFL*t,2);
		pC=round(vFC*t,2);
		pM=round(vFM*t, 2);
		t=t+0.1;	
	}
	Lauro.CorpoExtenso.position.y = pL;
	Cora.CorpoExtenso.position.y = pC;
	Marta.CorpoExtenso.position.y = pM;
	
	// Updates Labels
	UpdateTexto2D(posicaoL.Texto2D);
	posicaoL = new Texto2D( "pL="+round((pL/10.0),1)+"m", 5, pL, 15, 130, 60, {fontface:"Arial", fontsize:48,  borderColor: {r:255, g:0, b:0, a:1.0},  
    borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" }); 
	
	UpdateTexto2D(posicaoC.Texto2D);
	posicaoC = new Texto2D( "pC="+round((pC/10.0),1)+"m", 25, pC, 15, 130, 60, {fontface:"Arial", fontsize:48,  borderColor: {r:255, g:0, b:0, a:1.0},  
    borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" }); 
	
	UpdateTexto2D(posicaoM.Texto2D);
	posicaoM = new Texto2D( "pM="+round((pM/10.0),1)+"m", 45, pM, 15, 130, 60, {fontface:"Arial", fontsize:48,  borderColor: {r:255, g:0, b:0, a:1.0},  
    borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"left" }); 
	
	UpdateTexto2D(tempo.Texto2D);
	tempo = new Texto2D( "t = "+round(t,1)+"s", 0, vFC, 50, 220, 150, {fontface:"Arial", fontsize:72,  borderColor: {r:0, g:0, b:255, a:1.0},  
    borderThickness:4, fillColor: {r:0, g:0, b:255, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"center" });
	
	//texto1.Texto2D.position.set(5, pL, 10); 
	//texto2.Texto2D.position.set(25, pC, 10);
	//texto3.Texto2D.position.set(45, pM, 10);	
	
		
	//t=t+0.1
	
}




  