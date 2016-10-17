// Variáveis Globais aqui
function Ambiente()
{
	// Condições iniciais aqui
	Janela3D('rgb(100,40,40)',0.75,0.95);		
	InserirObservador(45,0.1,20000);
	PosicaoDoObservador(60.0, 60.0, 60.0);
	OlharPara(0.0, 0.0, 0.0);							
	SistemaRetangular(50,false, false, false);	
	GradeXY('rgb(255,255,0)', 'rgb(50,50,0)',100, 5, false)		
	CamOrbita();												// VEJA A SINTAXE ABAIXO:
	
	Janela2D('rgb(40,40,100)',0.2,0.95);										
	
}

function Simulacao()
{
	// Códigos da simulação aqui
}

// SINTAXE:
//			GradeXY(CorMeio,CorGrade,tamanho,divisao,bool)
//
//			Onde: CorMeio - Cor das linhas centrais da grade
//				  CorGrade - Cor da malha da grade
//				  tamanho - tamanho das laterais da grade (por enquanto a grade é quadrada)	
//				  divisão - tamanho dos retículos da grade
//				  bool - Se true (verdadeiro), a grade vai começar das coordenadas (0,0) - por padrão é false.
//
//			OBSERVAÇÃO: Existe o comando GradeXZ e GradeYZ		
