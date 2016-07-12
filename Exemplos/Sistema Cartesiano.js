

function Ambiente()
{
	CriarEspaco(0x555577);
	InserirObservador(45,0.1,20000);	// E preciso existir o observador no Universo Aclive
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);
	SistemaRetangular(50,false, false, false);
}

function Simulacao()
{
	// Por enquanto nada aqui!
}