var P=[];
var x = [],y = [], z= [];
x[1] = 20;
y[1] = 30;
z[1] = 10;


function Ambiente(){

	Inicio();
	/*CriarEspaco(0x3307ef);
	 InserirObservador(45, 0.1, 20000);
	 PosicaoDoObservador(30,30,30);
	 OlharPara(0,0,0);
	 CamOrbita();     
     SistemaRetangular(50, false, false, false);  
	 GradeXY(60,10, false);  
	 Desempenho(true, false, false);*/
	 
	
	//criação de particula.
	 //P[1] = new Particula(x[1],y[1],z[1]);               // Cria uma particula de  chamada p[1] na posição x=10, y=10 e z=10.
	 
	for(var i = 1; i<2000; i++){
		x[i] = Math.random()*200;
		y[i] = Math.random()*200;
		z[i] = Math.random()*200;
		
		P[i] = new Particula(x[i],y[i],z[i]);               // Cria uma particula de  chamada p[1] na posição x=10, y=10 e z=10.
		}	
		
}

function Simulacao(){

	
            
}
