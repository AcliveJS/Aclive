// Variáveis Globais aqui
var p=[];
var i
var r=100
var NumPart=1000;

function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(20,20,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(150,150,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												
	
	// vamos criar 1000 partículas aleatoriamente em torno do ponto (0,0,0)
	for(i=0;i<=NumPart;i++)
	{
		p[i] = new Particula(Math.random()*r-r/2, Math.random()*r-r/2, 0);
	}
	// Math.random() é uma função que gera número aleatórios
	// Ex: Math.random()*10 (vai gerar números aleatórios entre 0 e 10)

	Janela2D('rgb(40,40,100)',0.2,0.95);
	Texto("Ola mundo!", 10, 20, 'rgb(255,255,255)', 14);	
	TextoV("Ola mundo!", 10, 50, 'rgb(255,255,0)',18,1);									
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}


