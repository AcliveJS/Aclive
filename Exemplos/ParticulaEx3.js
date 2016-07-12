var p=[];
var i
var r=30

function Ambiente()
{
	CriarEspaco(0x222255);
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60,60,60);
	OlharPara(0,0,0);
	SistemaRetangular(50,true,true,true);	
	CamOrbita();
	
	// vamos criar 50 partículas aleatoriamente em torno do ponto (0,0,0)
	for(i=0;i<=50;i++)
	{
		p[i] = new Particula(Math.random()*r-r/2, Math.random()*r-r/2, Math.random()*r-r/2);
	}
	// Math.random() é uma função que gera número aleatórios
	// Ex: Math.random()*10 (vai gerar números aleatórios entre 0 e 10)
}

function Simulacao()
{
	// Por enquanto nada aqui!
}