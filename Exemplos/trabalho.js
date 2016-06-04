var v=[];

function Ambiente()
{
	CriarEspaco(0x222222);
	InserirObservador(45,0.1,20000);
	Cam = new Ortografica(false, false, true, 20);
	
	GradeXY(50, 5, false);
	SistemaRetangular(100,true,true,false);
	
	//v[1] = new Vetor(0, 0, 0, 7.5, 40, 0,1,amarelo);
	//v[2] = new Vetor(0, 0, 0, 20, -15, 0, 1, amarelo);
	
	//v[1] = new Vetor(2.5, 7.5, 0, 7.5-2.5, 40.0-7.5, 0,1,amarelo);
	//v[2] = new Vetor(2.5, 0, 0, 20.0-2.5, -15.0, 0, 1, amarelo);
	
	v[1] = new Vetor(2.5, 5.0, 0, 5.0-2.5, 25.0-5.0, 0, 1, amarelo);
	v[2] = new Vetor(5.0, 0, 0, 20.0-5.0, 2.5-0.0, 0, 1, amarelo);
	
	//SomaVetor(v[1],v[2],true, true);
	//SomaVetor(v[1],v[2], true, true);
	SomaVetor(v[2],v[1], false,false);
	
	
	//Desempenho(true, false, false);	
	
}

function Simulacao()
{
	UpdateOrtografica(Cam);
}
