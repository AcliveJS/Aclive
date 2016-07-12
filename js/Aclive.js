//  CRIA O ESPAÇO (Inicia a engine) 
function CriarEspaco(BGColor)
			{
			// Escolhemos o renderer (neste caso o WebGL)
			renderer=new THREE.WebGLRenderer( {precision: "lowp", antialias: false});
			renderer.setSize (WLargura,WAltura);
			//renderer.setSize(document.body.clientWidth, document.body.clientHeight);
			//renderer.autoClear = false;
			document.body.appendChild(renderer.domElement);
			renderer.setClearColor(BGColor,1);
			//document.body.appendChild (renderer.domElement);
			
			
			// EVENTS
			THREEx.WindowResize(renderer, camera);
			THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
			
			// A primeira coisa a ser feita é criar uma cena:
			cena=new THREE.Scene();
			cena.position.set(0,0,0);
			}

// FUNÇÕES PARA OBSERVADOR  
function InserirObservador(fov, near, far)																			// cria o observador
			{
			// Cria o observador - que nada mas é que a câmera (neste caso uma pespectiva)
			camera=new THREE.PerspectiveCamera (fov, WLargura/WAltura, near, far);
			camera.up.set(0,0,1);
			cena.add(camera);
			}		
			
function PosicaoDoObservador(obx,oby,obz)																		// define a posição do observador
			{
			camera.position.set(obx,oby,obz);
			}

function OlharPara(oopx, oopy, oopz)														     					// observador olhar para
			{
			camera.lookAt(new THREE.Vector3(oopx,oopy,oopz));
			}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function CamOrbita()
{
		// A função OrbitControls dá um controle a cena através do botões do mouse como rotate, pan e zoon
		var controle = new THREE.OrbitControls(camera, renderer.domElement);
		controle.target = new THREE.Vector3(0, 0, 0);
}	


// a função abaixo chamada render junto com requestAnimationFrame cria um "loop" para animações (faz o update da cena)
function render()
			{
			requestAnimationFrame(render);
			//Simulacao();										// teste, apagar depois!
			if (pausa_animacao==false) {Simulacao();}
			renderer.render(cena, camera);
			
			// update as estatísticas
			if (fps) 
				{
					stats0.update();
				}
			if (ms)
				{
					stats1.update();
				}
			if (Mb)
				{
					stats2.update();
				}
			}
			// update controls
			//controle.update();


// a função abaixo exibe as statísticas (fps, etc)
function Desempenho(f,m,b)
{
			if (f)
			{
				fps=true;
				stats0 = new Stats();
				stats0.setMode(0);   // 0-FPS; 1-ms; 2-Mb
				stats0.domElement.style.position = 'absolute';
				//stats.domElement.style.bottom = '0px';
				stats0.domElement.style.left = '5px';
				stats0.domElement.style.top = '5px';
				stats0.domElement.style.zIndex = 100;
				document.body.appendChild(stats0.domElement);
			}
			if (m)
			{
				ms=true;
				stats1 = new Stats();
				stats1.setMode(1);   // 0-FPS; 1-ms; 2-Mb
				stats1.domElement.style.position = 'absolute';
				//stats.domElement.style.bottom = '0px';
				stats1.domElement.style.left = '85px';
				stats1.domElement.style.top = '5px';
				stats1.domElement.style.zIndex = 100;
				document.body.appendChild(stats1.domElement);
			}
			if (b)
			{
				Mb=true;
				stats2 = new Stats();
				stats2.setMode(2);   // 0-FPS; 1-ms; 2-Mb
				stats2.domElement.style.position = 'absolute';
				//stats.domElement.style.bottom = '0px';
				stats2.domElement.style.left = '165px';
				stats2.domElement.style.top = '5px';
				stats2.domElement.style.zIndex = 100;
				document.body.appendChild(stats2.domElement);
			}
}

// << AS FUNÇÕES ABAIXO ESTAVAM NO ARQUIVO OBJETO.JS - APAGAR ESTE COMENTÁRIO DEPOIS
function CorpoExtenso(tx,ty,tz,x,y,z,rx,ry,rz,cor,CEbool, Material)
{
	var geometria=new THREE.BoxGeometry (tx,ty,tz);
	if (Material==0) {var material=new THREE.MeshLambertMaterial ( {color: cor, wireframe: CEbool} );}
	if (Material==1) {var material=new THREE.MeshBasicMaterial ( {color: cor, wireframe: CEbool} );}
	this.CorpoExtenso=new THREE.Mesh(geometria, material);
	cena.add(this.CorpoExtenso);
	this.CorpoExtenso.position.set(x,y,z);
	this.CorpoExtenso.rotation.set(rx,ry,rz);
	//cubo.rotation.y=Math.PI*(45/180);
}

function Particula(x,y,z)
{
	// Cria uma esfera.
	var geometria = new THREE.SphereGeometry(0.3,8, 8 ); 
	var material = new THREE.MeshBasicMaterial( {color: 0x8888ff} ); 
	//var material = new THREE.MeshLambertMaterial( {color: 0x8888ff} ); 
	this.Particula = new THREE.Mesh(geometria, material);
	cena.add(this.Particula);
	this.Particula.position.set(x,y,z);
}

function Vetor(x, y, z, vecx, vecy, vecz, escala, cor)
{
    this.origem = new THREE.Vector3(x,y,z);																		// Posição inicial do vetor no espaço 3D
	this.extremidade = new THREE.Vector3(x+vecx*escala,y+vecy*escala,z+vecz*escala);		// Extremidade do vetor															
	this.direcao = new THREE.Vector3().subVectors(this.extremidade, this.origem).normalize();			// Direção (vetor unitário)
	this.modulo = new THREE.Vector3().subVectors(this.extremidade, this.origem).length();
    this.Vetor = new THREE.ArrowHelper(this.direcao, this.origem, this.modulo, cor, 1.5,1);
	cena.add(this.Vetor);
}

function SomaVetor(vetor1, vetor2, exibe, apoio)
{
	O1 = new THREE.Vector3(vetor1.origem.x, vetor1.origem.y, vetor1.origem.z);
	E1 = new THREE.Vector3(vetor1.extremidade.x, vetor1.extremidade.y, vetor1.extremidade.z);
	
	O2 = new THREE.Vector3(vetor2.origem.x, vetor2.origem.y, vetor2.origem.z);
	E2 = new THREE.Vector3(vetor2.extremidade.x, vetor2.extremidade.y, vetor2.extremidade.z);
	
	O = new THREE.Vector3(0,0,0);
	ES = new THREE.Vector3().addVectors(E1,E2);
	OS = new THREE.Vector3().addVectors(O1,O2);
	if ((O1.x==O2.x) && (O1.y==O2.y) && (O1.z==O2.z))
	{
		dummy = new THREE.Vector3().subVectors(ES,O1);
		this.SomaVetor = new Vetor (O1.x, O1.y, O1.z, dummy.x, dummy.y, dummy.z, 1 ,amarelo);
	}
	else
	{	
		dummy = new THREE.Vector3().subVectors(ES,OS);
		this.SomaVetor = new Vetor (OS.x, OS.y, OS.z, dummy.x, dummy.y, dummy.z, 1 ,amarelo);
		
		if (apoio)
		{//apoio
			teste_O1 = new Vetor(O.x, O.y, O.z, O1.x, O1.y, O1.z, 1, verde);
			teste_O2 = new Vetor(O.x, O.y, O.z, O2.x, O2.y, O2.z, 1, verde);
			teste_OS = new Vetor (O.x, O.y, O.z, OS.x, OS.y, OS.z, 1, verde);
		}
	}
	
	if (apoio)
	{//apoio
		teste_ES = new Vetor (O.x, O.y, O.z, ES.x, ES.y, ES.z, 1, azulc);
		teste_E1 = new Vetor(O.x, O.y, O.z, E1.x, E1.y, E1.z, 1, rosa);
		teste_E2 = new Vetor(O.x, O.y, O.z, E2.x, E2.y, E2.z, 1, rosa);
	}	
		
	if (exibe)
	{
			vetor2 = new Vetor (OS.x, OS.y, OS.z, (E2.x-O2.x), (E2.y-O2.y), (E2.z-O2.z),1, branco);
			v2 = new THREE.Vector3(E2.x+O1.x, E2.y+O1.y, E2.z+O1.z);													// PAREI AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			vetor1 = new Vetor (OS.x, OS.y, OS.z, (E1.x-O1.x), (E1.y-O1.y), (E1.z-O1.z),1, branco);
			v1 = new THREE.Vector3(E1.x+O2.x, E1.y+O2.y, E1.z+O2.z);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(v2, ES);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888800, dashSize: 1, gapSize: 1 } );
			P1 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(P1);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(v1, ES);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888800, dashSize: 1, gapSize: 1 } );
			P2 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(P2);
			
			// Utilizando linhas para criar componentes
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(E1, ES);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
			C1 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(C1);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(E2, ES);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
			C2 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(C2);
			
			if (!((O1.x==O2.x) && (O1.y==O2.y) && (O1.z==O2.z)))
			{
				lineGeometry = new THREE.Geometry();
				vertArray = lineGeometry.vertices;
				vertArray.push(O1, OS);
				lineGeometry.computeLineDistances();
				lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
				C3 = new THREE.Line( lineGeometry, lineMaterial );
				cena.add(C3);
				
				lineGeometry = new THREE.Geometry();
				vertArray = lineGeometry.vertices;
				vertArray.push(O2, OS);
				lineGeometry.computeLineDistances();
				lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
				C4 = new THREE.Line( lineGeometry, lineMaterial );
				cena.add(C4);
			}
				
	}
	else
	// regra do polígono
	{
			vetor2 = new Vetor (E1.x, E1.y, E1.z, (E2.x-O2.x), (E2.y-O2.y), (E2.z-O2.z),1, branco);
			vetorS = new Vetor (O1.x, O1.y, O1.z, (ES.x-OS.x), (ES.y-OS.y), (ES.z-OS.z), 1, azulc);
	}
}

function SubtraiVetor(vetor1, vetor2, exibe)
{
	dummy = new THREE.Vector3().subVectors(vetor1.extremidade,vetor2.extremidade);
	this.SubtraiVetor = new Vetor (vetor1.origem.x,
												  vetor1.origem.y,
												  vetor1.origem.z,
												  dummy.x,
												  dummy.y,
												  dummy.z,
												  1 ,amarelo);
	if (exibe)
	{
			dummy = new THREE.Vector3().addVectors(vetor1.extremidade,vetor2.extremidade.negate());
			SegundoVetor = new Vetor (vetor1.origem.x,
                                           vetor1.origem.y,
										   vetor1.origem.z,
									       vetor2.extremidade.x,
										   vetor2.extremidade.y,
										   vetor2.extremidade.z,
										   1, azulc);
			
			// Utilizando linhas para criar componentes
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(vetor1.extremidade, dummy);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
			C1 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(C1);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push(vetor2.extremidade, dummy);
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: 0x888888, dashSize: 1, gapSize: 1 } );
			C2 = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(C2);
	}
	else
	{
			// PAREI AQUI... CANSADO PRA CARAMBA!!! CORRIGIR O VETOR ABAIXO...
			SegundoVetor = new Vetor (vetor2.extremidade.x,
													vetor2.extremidade.y,
													vetor2.extremidade.z,
													dummy.x,
												    dummy.y,
													dummy.z,
													1, branco);
	}
}


function UpdateVetor(nome)
{
	cena.remove(nome.Vetor);
}

function Componentes(px,py,pz)
{
			cor = 0xffaaff;
			// Utilizando linhas para criar componentes
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push( new THREE.Vector3(0, 0, pz), new THREE.Vector3(px, py, pz) );
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: cor, dashSize: 2, gapSize: 1 } );
			this.ComponenteZ = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(this.ComponenteZ);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push( new THREE.Vector3(px, py, 0), new THREE.Vector3(px, py, pz) );
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: cor, dashSize: 2, gapSize: 1 } );
			this.ComponenteXYZ = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(this.ComponenteXYZ);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push( new THREE.Vector3(0, 0, 0), new THREE.Vector3(px, py, 0) );
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: cor, dashSize: 2, gapSize: 1 } );
			this.ComponenteXY = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(this.ComponenteXY);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push( new THREE.Vector3(px, 0, 0), new THREE.Vector3(px, py, 0) );
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: cor, dashSize: 2, gapSize: 1 } );
			this.ComponenteX = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(this.ComponenteX);
			
			lineGeometry = new THREE.Geometry();
			vertArray = lineGeometry.vertices;
			vertArray.push( new THREE.Vector3(0, py, 0), new THREE.Vector3(px, py, 0) );
			lineGeometry.computeLineDistances();
			lineMaterial = new THREE.LineDashedMaterial( { color: cor, dashSize: 2, gapSize: 1 } );
			this.ComponenteY = new THREE.Line( lineGeometry, lineMaterial );
			cena.add(this.ComponenteY);
}

function UpdateComponentes(nome)
{
	cena.remove(nome.ComponenteZ);
	cena.remove(nome.ComponenteX);
	cena.remove(nome.ComponenteY);
	cena.remove(nome.ComponenteXY);
	cena.remove(nome.ComponenteXYZ);
}

//............................................................................................................. Trabalhar na rotina de construção de trajetórias........
//--------------------------------------------------------------------------------------------- Estudar element id para melhorar esta rotina
function Trajetoria(nome)
{
	if (ContTraj>0 && ContTraj<1301)		// 1301 é o número de objetos linhas para criar a trajetória (tentar alternativa que não baixe fps no futuro)
	{
	    var lineGeometry = new THREE.Geometry();
		var vertArray = lineGeometry.vertices;
		vertArray.push( new THREE.Vector3(oldx, oldy, oldz), new THREE.Vector3(nome.position.x, nome.position.y, nome.position.z));
		lineGeometry.computeLineDistances();
		var lineMaterial = new THREE.LineBasicMaterial( { color: 0xcc8888 } );
		lineT = new THREE.Line(lineGeometry, lineMaterial );
		cena.add(lineT);
	}
		
	oldx = nome.position.x
	oldy = nome.position.y
	oldz = nome.position.z
	
	ContTraj += 1;
}

function SistemaRetangular(n,boolx,booly,boolz)
{
	eixos = new THREE.AxisHelper(n);
	cena.add(eixos);

	if (boolx) 
	{
		// criando linhas "negativas" do eixo X
		var lineGeometry = new THREE.Geometry();
		var vertArray = lineGeometry.vertices;
		vertArray.push( new THREE.Vector3(0, 0, 0), new THREE.Vector3(-n, 0, 0) );
		lineGeometry.computeLineDistances();
		var lineMaterial = new THREE.LineDashedMaterial( { color: 0xff3333, dashSize: 2, gapSize: 1 } );
		var SistRetanLinhaNegX = new THREE.Line( lineGeometry, lineMaterial );
		cena.add(SistRetanLinhaNegX);	
	}
	if (booly) 
	{
		// criando linhas "negativas" do eixo Y
		var lineGeometry = new THREE.Geometry();
		var vertArray = lineGeometry.vertices;
		vertArray.push( new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -n, 0) );
		lineGeometry.computeLineDistances();
		var lineMaterial = new THREE.LineDashedMaterial( { color: 0x33ff33, dashSize: 2, gapSize: 1 } );
		var SistRetanLinhaNegY = new THREE.Line( lineGeometry, lineMaterial );
		cena.add(SistRetanLinhaNegY);	
	}
	if (boolz) 
	{
		// criando linhas "negativas" do eixo Y
		var lineGeometry = new THREE.Geometry();
		var vertArray = lineGeometry.vertices;
		vertArray.push( new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -n) );
		lineGeometry.computeLineDistances();
		var lineMaterial = new THREE.LineDashedMaterial( { color: 0x33333ff, dashSize: 2, gapSize: 1 } );
		var SistRetanLinhaNegZ = new THREE.Line( lineGeometry, lineMaterial );
		cena.add(SistRetanLinhaNegZ);	
	}
}

function SistemaRetangularL(n)
{
	this.SistemaRetangularL  = new THREE.AxisHelper(n);
	cena.add(this.SistemaRetangularL);
}

function Ligar(ObjetoPai,ObjetoFilho)
{
	ObjetoPai.add(ObjetoFilho);
}

function GradeXY(tamanho,divisao,bool)
{
	gridXY = new THREE.GridHelper(tamanho,divisao);
	gridXY.setColors( new THREE.Color(0x444400), new THREE.Color(0x663333) );
	gridXY.rotation.set(Math.PI*(1/2),0,0);
	if (bool) {gridXY.position.set(tamanho,tamanho,0 )} else {gridXY.position.set(0,0,0)};
	cena.add(gridXY);
}

function GradeYZ(tamanho,divisao,bool)
{
	gridYZ = new THREE.GridHelper(tamanho,divisao);
	gridYZ.setColors( new THREE.Color(0x444400), new THREE.Color(0x336633) );
	gridYZ.rotation.set(0,0,Math.PI*(1/2));
	if (bool) {gridYZ.position.set(0,tamanho,tamanho)} else {gridYZ.position.set(0,0,0)};
	cena.add(gridYZ);
}

function GradeXZ(tamanho,divisao,bool)
{
	gridXZ = new THREE.GridHelper(tamanho,divisao);
	gridXZ.setColors( new THREE.Color(0x444400), new THREE.Color(0x333366) );
	gridXZ.rotation.set(0,Math.PI*(1/2),0);
	if (bool) {gridXZ.position.set(tamanho,0,tamanho)} else {gridXZ.position.set(0,0,0)};
	cena.add(gridXZ);
}

function Plano(L1, L2, L1Seg, L2Seg, posX, posY, posZ, rotX, rotY, rotZ, cor, visivel, wire)
{
	//PlaneGeometry(width, height, widthSegments <opcional -default=1>, heightSegments <opcional -default =1>)
	var PlaneGeometry = new THREE.PlaneGeometry(L1, L2, L1Seg, L2Seg);
	var PlaneMaterial = new THREE.MeshBasicMaterial( {color: cor, side: THREE.DoubleSide, visible: visivel, wireframe: wire} );
	this.Plano = new THREE.Mesh( PlaneGeometry , PlaneMaterial );
	this.Plano.position.set(posX, posY, posZ);
	this.Plano.rotation.set(Math.PI*rotX, Math.PI*rotY, Math.PI*rotZ);
	cena.add( this.Plano);
}

// --------------------------------------------------------------------------------------------------------------------- Visão ortográfica
function Ortografica(boolx,booly,boolz,fator)
{
				camera = new THREE.OrthographicCamera( window.innerWidth / - fator,
																			 window.innerWidth / fator,
																			 window.innerHeight / fator, 
																			 window.innerHeight / - fator, 
																			 -500,20000 );
				if (boolx)
				{
					camera.up.set(0,0,1);
					camera.position.set(1,0,0);
					camera.lookAt(new THREE.Vector3(0,0,0));
					MovYZ=true;
				}
				if (booly)
				{
					camera.up.set(0,0,1);
					camera.position.set(0,-1,0);
					camera.lookAt(new THREE.Vector3(0,0,0));
					MovXZ=true;
				}
				if (boolz)
				{
					camera.up.set(0,0,1);
					//camera.rotation.set(0,0,Math.PI/2);
					camera.position.set(0,0,-1);
					MovXY=true;
				}
}

function UpdateOrtografica(nome)
{
	if (MovYZ)
	{
		if ( keyboard.pressed("W") ) {camera.position.z += -0.2;}
		if ( keyboard.pressed("S") )  {camera.position.z +=  0.2;}
		if ( keyboard.pressed("A") ) {camera.position.y += 0.2;}
		if ( keyboard.pressed("D") ) {camera.position.y += -0.2;}
		if ( keyboard.pressed("Z") )
		{
			camera.zoom += 0.01;
			camera.updateProjectionMatrix();
		}
		if ( keyboard.pressed("X") )
		{
			camera.zoom += -0.01;
			camera.updateProjectionMatrix();
		}
	}
	if (MovXZ)
	{
		if ( keyboard.pressed("W") ) {camera.position.z += -0.2;}
		if ( keyboard.pressed("S") )  {camera.position.z +=  0.2;}
		if ( keyboard.pressed("A") ) {camera.position.x += 0.2;}
		if ( keyboard.pressed("D") ) {camera.position.x += -0.2;}
		if ( keyboard.pressed("Z") )
		{
			camera.zoom += 0.01;
			camera.updateProjectionMatrix();
		}
		if ( keyboard.pressed("X") )
		{
			camera.zoom += -0.01;
			camera.updateProjectionMatrix();
		}
	}
	if (MovXY)
	{
		if ( keyboard.pressed("W") ) {camera.position.y += -0.2;}
		if ( keyboard.pressed("S") )  {camera.position.y +=  0.2;}
		if ( keyboard.pressed("A") ) {camera.position.x += 0.2;}
		if ( keyboard.pressed("D") ) {camera.position.x += -0.2;}
		if ( keyboard.pressed("Z") )
		{
			camera.zoom += 0.01;
			camera.updateProjectionMatrix();
		}
		if ( keyboard.pressed("X") )
		{
			camera.zoom += -0.01;
			camera.updateProjectionMatrix();
		}
	}
}



// INICIO RÁPIDO
function Inicio()
{
			//Escolhemos o renderer (neste caso o WebGL)
			renderer=new THREE.WebGLRenderer( {antialias: true});
			renderer.setSize (WLargura,WAltura);
			renderer.setClearColor(0xe7e7fa,1);
			document.body.appendChild (renderer.domElement);   
			
			// EVENTS
			THREEx.WindowResize(renderer, camera);
			THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

			// A primeira coisa a ser feita é criar uma cena:
			cena=new THREE.Scene();
			cena.position.set(0,0,0);
			
			// Cria o observador - que nada mas é que a câmera (neste caso uma pespectiva)
			camera=new THREE.PerspectiveCamera (fov, WLargura/WAltura, near, far);
			camera.up.set(0,0,1);
			cena.add(camera);
			
			camera.position.set(obx,oby,obz);
			camera.lookAt(new THREE.Vector3(oopx,oopy,oopz));
			
			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			controls.target = new THREE.Vector3(0, 0, 0);
			
			// Objetos presentes no Início
			Desempenho(true, false, false);
			SistemaGlobal = new SistemaRetangular(nscg,false,false,false);
			eixos.visible = false;
			
			GradeXY(60,5, false);
			gridXY.visible = false;
			GradeXZ(60,5, false);
			gridXZ.visible = false;
			GradeYZ(60,5, false);
			gridYZ.visible = false;
			
			// GUI DAS CÂMERAS
			var CameraGui = new dat.GUI();
			var parametroCG=
			{
				Perspectiva: true,
				OrtoXY: false,
				OrtoXZ: false,
				OrtoYZ: false,
				fator: 20,
			}
			var OnOff_Persp = CameraGui.add(parametroCG, 'Perspectiva').name('Perspectiva:').listen();
			var OnOff_XY = CameraGui.add(parametroCG, 'OrtoXY').name('Ortográfica XY:').listen();
			var OnOff_XZ = CameraGui.add(parametroCG, 'OrtoXZ').name('Ortográfica XZ:').listen();
			var OnOff_YZ = CameraGui.add(parametroCG, 'OrtoYZ').name('Ortográfica YZ:').listen();
			var fator = CameraGui.add( parametroCG, 'fator' ).name('Fator:');
			CameraGui.open();
			
			OnOff_Persp.onChange(function(value)
			{
				cena.remove(camera);
				camera=new THREE.PerspectiveCamera (fov, WLargura/WAltura, near, far);
				camera.up.set(0,0,1);
				camera.position.set(obx,oby,obz);
				camera.lookAt(new THREE.Vector3(oopx,oopy,oopz));
				cena.add(camera);
				CamOrbita();
				parametroCG.Perspectiva=true;
				parametroCG.OrtoXY=false;
				parametroCG.OrtoXZ=false;
				parametroCG.OrtoYZ=false;
			});
			OnOff_XY.onChange(function(value)
			{
				cena.remove(camera);
				Ortografica(true,false,false,parametroCG.fator);
				parametroCG.Perspectiva=false;
				parametroCG.OrtoXY=true;
				parametroCG.OrtoXZ=false;
				parametroCG.OrtoYZ=false;
			});
			OnOff_XZ.onChange(function(value)
			{
				cena.remove(camera);
				Ortografica(false,true,false,parametroCG.fator);
				parametroCG.Perspectiva=false;
				parametroCG.OrtoXY=false;
				parametroCG.OrtoXZ=true;
				parametroCG.OrtoYZ=false;
			});
			OnOff_YZ.onChange(function(value)
			{
				cena.remove(camera);
				Ortografica(false,false,true,parametroCG.fator);
				parametroCG.Perspectiva=false;
				parametroCG.OrtoXY=false;
				parametroCG.OrtoXZ=false;
				parametroCG.OrtoYZ=true;
			});
			fator.onChange(function(value)
			{
				parametroCG.fator=value;
			});
			
			//..............................................................................................................
			
			// CRIA DO MENU
			var gui = new dat.GUI();
			var parametro = 
			{
				Pausa: false,
				CorAmbiente: "#e7e7fa",
				tamanhoSC: 50,
				visibleSC: false,
				
				visibleXY: false,
				tamanhoXY: 50,
				divXY: 5,
				corXY: "#444400",
				corCXY: "#663333",
				
				visibleXZ: false,
				tamanhoXZ: 50,
				divXZ: 5,
				corXZ: "#444400",
				corCXZ: "#663333",
				
				visibleYZ: false,
				tamanhoYZ: 50,
				divYZ: 5,
				corYZ: "#444400",
				corCYZ: "#663333",
			};
			// Adiciona os parâmetros
			var OnOff_Pausa = gui.add( parametro, 'Pausa').name('Pausar?').listen();
			var CorAmb = gui.addColor( parametro, 'CorAmbiente' ).name('Cor Fundo:').listen();
			
			var folderSC = gui.addFolder('Sist. de Coordenadas');
			var tamanhoSC = folderSC.add(parametro,'tamanhoSC').min(0).max(100).step(1).name('Tamanho');
			var OnOff_SC = folderSC.add(parametro, 'visibleSC').name('Visível?').listen();
			folderSC.close();
			
			folderGXY = gui.addFolder('Grade XY');
			var OnOff_XY = folderGXY.add(parametro, 'visibleXY').name('Visível?').listen();
			var tamanhoXY = folderGXY.add(parametro,'tamanhoXY').min(0).max(100).step(1).name('Tamanho');
			var divXY = folderGXY.add(parametro,'divXY').min(1).max(10).step(1).name('Divisão');
			var corXY = folderGXY.addColor( parametro, 'corXY' ).name('Cor Grade:').listen();
			var corCXY = folderGXY.addColor( parametro, 'corCXY' ).name('Cor Central:').listen();
			folderGXY.close();
			
			folderGXZ = gui.addFolder('Grade XZ');
			var OnOff_XZ = folderGXZ.add(parametro, 'visibleXZ').name('Visível?').listen();
			var tamanhoXZ = folderGXZ.add(parametro,'tamanhoXZ').min(0).max(100).step(1).name('Tamanho');
			var divXZ = folderGXZ.add(parametro,'divXZ').min(1).max(10).step(1).name('Divisão');
			var corXZ = folderGXZ.addColor( parametro, 'corXZ' ).name('Cor Grade:').listen();
			var corCXZ = folderGXZ.addColor( parametro, 'corCXZ' ).name('Cor Central:').listen();
			folderGXZ.close();
			
			folderGYZ = gui.addFolder('Grade YZ');
			var OnOff_YZ = folderGYZ.add(parametro, 'visibleYZ').name('Visível?').listen();
			var tamanhoYZ = folderGYZ.add(parametro,'tamanhoYZ').min(0).max(100).step(1).name('Tamanho');
			var divYZ = folderGYZ.add(parametro,'divYZ').min(1).max(10).step(1).name('Divisão');
			var corYZ = folderGYZ.addColor( parametro, 'corYZ' ).name('Cor Grade:').listen();
			var corCYZ = folderGYZ.addColor( parametro, 'corCYZ' ).name('Cor Central:').listen();
			folderGYZ.close();
			
			// UPDATE QUANDO MUDAMOS OS PARÂMETROS
			// UPDATE DO SISTEMA DE COORDENADAS
			OnOff_Pausa.onChange(function(value)
			{
				//parametro.Pausa = value;
				pausa_animacao=value;
			});
			
			CorAmb.onChange(function(value)
			{
					renderer.setClearColor(value,1);
			});
			tamanhoSC.onChange(function(value)
			{
					cena.remove(eixos);
					eixos = new THREE.AxisHelper(value);
					cena.add(eixos)
					if (parametro.visibleSC==false) {eixos.visible=false;}
			});
			OnOff_SC.onChange(function(value)
			{
					eixos.visible=value;
					//eixos.visible=parametro.visibleSC
			});
			
			// UPDATE REFERENTE A GRADE XY
			OnOff_XY.onChange(function(value)
			{
					gridXY.visible=value;
			});
			tamanhoXY.onChange(function(value)
			{
					cena.remove(gridXY);
					gridXY = new THREE.GridHelper(value,5);
					gridXY.setColors( new THREE.Color(parametro.corCXY), new THREE.Color(parametro.corXY) );
					gridXY.rotation.set(Math.PI*(1/2),0,0);
					cena.add(gridXY);
					//GradeXY(value,parametro.divXY);
					if (parametro.visibleXY==false) {gridXY.visible=false;}
			});
			divXY.onChange(function(value)
			{
					cena.remove(gridXY);
					gridXY = new THREE.GridHelper(parametro.tamanhoXY,value);
					gridXY.setColors( new THREE.Color(parametro.corCXY), new THREE.Color(parametro.corXY) );
					gridXY.rotation.set(Math.PI*(1/2),0,0);
					cena.add(gridXY);
					//GradeXY(parametro.tamanhoXY,value);
					if (parametro.visibleXY==false) {gridXY.visible=false;}
			});
			corXY.onChange(function(value)
			{
					gridXY.setColors( new THREE.Color(parametro.corCXY), new THREE.Color(value) );
			});
			corCXY.onChange(function(value)
			{
					gridXY.setColors( new THREE.Color(value), new THREE.Color(parametro.corXY) );
			});
			
			//------------------------------------------------------------------------------------------------------------ Update referente a grade XZ
			OnOff_XZ.onChange(function(value)
			{
					gridXZ.visible=value;
			});
			tamanhoXZ.onChange(function(value)
			{
					cena.remove(gridXZ);
					gridXZ = new THREE.GridHelper(value,5);
					gridXZ.setColors( new THREE.Color(parametro.corCXZ), new THREE.Color(parametro.corXZ) );
					gridXZ.rotation.set(0,0,Math.PI*(1/2));
					cena.add(gridXZ);
					//GradeXY(value,parametro.divXY);
					if (parametro.visibleXZ==false) {gridXZ.visible=false;}
			});
			divXZ.onChange(function(value)
			{
					cena.remove(gridXZ);
					gridXZ = new THREE.GridHelper(parametro.tamanhoXZ,value);
					gridXZ.setColors( new THREE.Color(parametro.corCXZ), new THREE.Color(parametro.corXZ) );
					gridXZ.rotation.set(0,0,Math.PI*(1/2));
					cena.add(gridXZ);
					//GradeXY(parametro.tamanhoXY,value);
					if (parametro.visibleXZ==false) {gridXZ.visible=false;}
			});
			corXZ.onChange(function(value)
			{
					gridXZ.setColors( new THREE.Color(parametro.corCXZ), new THREE.Color(value) );
			});
			corCXZ.onChange(function(value)
			{
					gridXZ.setColors( new THREE.Color(value), new THREE.Color(parametro.corXZ) );
			});
			
			// UPDATE REFERENTE A GRADE YZ
			OnOff_YZ.onChange(function(value)
			{
					gridYZ.visible=value;
			});
			tamanhoYZ.onChange(function(value)
			{
					cena.remove(gridYZ);
					gridYZ = new THREE.GridHelper(value,5);
					gridYZ.setColors( new THREE.Color(parametro.corCYZ), new THREE.Color(parametro.corYZ) );
					gridYZ.rotation.set(0,Math.PI*(1/2),0);
					cena.add(gridYZ);
					//GradeXY(value,parametro.divXY);
					if (parametro.visibleYZ==false) {gridYZ.visible=false;}
			});
			divYZ.onChange(function(value)
			{
					cena.remove(gridYZ);
					gridYZ = new THREE.GridHelper(parametro.tamanhoYZ,value);
					gridYZ.setColors( new THREE.Color(parametro.corCYZ), new THREE.Color(parametro.corYZ) );
					gridYZ.rotation.set(0,Math.PI*(1/2),0);
					cena.add(gridYZ);
					//GradeXY(parametro.tamanhoXY,value);
					if (parametro.visibleYZ==false) {gridYZ.visible=false;}
			});
			corYZ.onChange(function(value)
			{
					gridYZ.setColors( new THREE.Color(parametro.corCYZ), new THREE.Color(value) );
			});
			corCYZ.onChange(function(value)
			{
					gridYZ.setColors( new THREE.Color(value), new THREE.Color(parametro.corYZ) );
			});
			
			//gui.add( parameters, 'a' ).name('Número');
			//gui.add( parameters, 'b' ).min(128).max(256).step(16).name('Slider');
			//gui.add( parameters, 'c' ).name('String');
			//gui.add( parameters, 'd' ).name('Boolean');
	
			//gui.addColor( parameters, 'e' ).name('Color');
	
			//var numberList = [1, 2, 3];
			//gui.add( parameters, 'v', numberList ).name('List');
	
			//var stringList = ["One", "Two", "Three"];
			//gui.add( parameters, 'w', stringList ).name('List');
	
			//gui.add( parameters, 'f' ).name('Say "Hello!"');
			//gui.add( parameters, 'g' ).name("Alert Message");
	
			//var folder1 = gui.addFolder('Coordinates');
			//folder1.add( parameters, 'x' );
			//folder1.add( parameters, 'y' );
			//folder1.add( parameters, 'z' );
			//folder1.close();
			gui.open(); 
}

// Rotinas externas - pesquisa da internet .................................................................................................................................................
 
function Texto2D( message, x, y, z, EL, EA, parameters ) 
{ 
     if ( parameters === undefined ) parameters = {}; 
      
     var fontface = parameters.hasOwnProperty("fontface") ?  
         parameters["fontface"] : "Arial"; 
      
     var fontsize = parameters.hasOwnProperty("fontsize") ?  
         parameters["fontsize"] : 18; 
      
     var borderThickness = parameters.hasOwnProperty("borderThickness") ?  
         parameters["borderThickness"] : 4; 
      
     var borderColor = parameters.hasOwnProperty("borderColor") ? 
         parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 }; 
      
     var fillColor = parameters.hasOwnProperty("fillColor") ? 
         parameters["fillColor"] : undefined; 
  
     var textColor = parameters.hasOwnProperty("textColor") ? 
         parameters["textColor"] : { r:0, g:0, b:255, a:1.0 }; 
  
     var radius = parameters.hasOwnProperty("radius") ? 
                 parameters["radius"] : 6; 
  
     var vAlign = parameters.hasOwnProperty("vAlign") ? 
                         parameters["vAlign"] : "center"; 
  
     var hAlign = parameters.hasOwnProperty("hAlign") ? 
                         parameters["hAlign"] : "center"; 
  
  
  
  
  
  
  
  
  
  
  
  
     var canvas = document.createElement('canvas'); 
     var context = canvas.getContext('2d'); 
      
     // set a large-enough fixed-size canvas  
     canvas.width = WLargura; 
     canvas.height = WAltura; 
      
     context.font = fontsize + "px " + fontface; 
     context.textBaseline = "alphabetic"; 
     context.textAlign = "left"; 
      
     // get size data (height depends only on font size) 
     var metrics = context.measureText( message ); 
     var textWidth = metrics.width; 
     
     var cx = canvas.width / 2; 
     var cy = canvas.height / 2; 
     var tx = textWidth/ 2.0; 
     var ty = fontsize / 2.0; 
  
     // then adjust for the justification 
     if ( vAlign == "bottom") 
         ty = 0; 
     else if (vAlign == "top") 
         ty = fontsize; 
      
     if (hAlign == "left") 
         tx = textWidth; 
     else if (hAlign == "right") 
         tx = 0; 
      
     // the DESCENDER_ADJUST is extra height factor for text below baseline: g,j,p,q. since we don't know the true bbox 
     roundRect(context, cx - tx , cy + ty + 0.28 * fontsize,  
             textWidth, fontsize * DESCENDER_ADJUST, radius, borderThickness, borderColor, fillColor); 
      
     // text color.  Note that we have to do this AFTER the round-rect as it also uses the "fillstyle" of the canvas 
     context.fillStyle = getCanvasColor(textColor); 
     context.fillText( message, cx - tx, cy + ty); 
   
    // canvas contents will be used for a texture 
     var texture = new THREE.Texture(canvas);
     texture.needsUpdate = true; 
     
	 
	
/*	
	var dynamicTexture = new THREEx.DynamicTexture(512,512)
	dynamicTexture.context.font	= "60px Times";
	dynamicTexture.texture.anisotropy = renderer.getMaxAnisotropy()
	// update the text
	dynamicTexture.clear()
	dynamicTexture.drawText(message,256, 256, 'white');
	dynamicTexture.needsUpdate = true;
*/
	 
	 
	 
	 
	 
	 
	 
     this.Sprite = new THREE.SpriteMaterial( { map: texture } ); 
     this.Texto2D = new THREE.Sprite( this.Sprite );	
	 this.Texto2D.needsUpdate = true;
      
     // we MUST set the scale to 2:1.  The canvas is already at a 2:1 scale, 
     // but the sprite itself is square: 1.0 by 1.0 
     // Note also that the size of the scale factors controls the actual size of the text-label 
     this.Texto2D.scale.set(EL,EA,1); 
      
     // set the sprite's position.  Note that this position is in the CENTER of the sprite 
     this.Texto2D.position.set(x, y, z); 
     cena.add(this.Texto2D); 
} 
  
function roundRect(ctx, x, y, w, h, r, borderThickness, borderColor, fillColor)  
{ 
     // no point in drawing it if it isn't going to be rendered 
     if (fillColor == undefined && borderColor == undefined)  
         return; 
  
     x -= borderThickness + r; 
     y += borderThickness + r; 
     w += borderThickness * 2 + r * 2; 
     h += borderThickness * 2 + r * 2; 
      
     ctx.beginPath(); 
     ctx.moveTo(x+r, y); 
     ctx.lineTo(x+w-r, y); 
     ctx.quadraticCurveTo(x+w, y, x+w, y-r); 
     ctx.lineTo(x+w, y-h+r); 
     ctx.quadraticCurveTo(x+w, y-h, x+w-r, y-h); 
     ctx.lineTo(x+r, y-h); 
     ctx.quadraticCurveTo(x, y-h, x, y-h+r); 
     ctx.lineTo(x, y-r); 
     ctx.quadraticCurveTo(x, y, x+r, y); 
     ctx.closePath(); 
      
     ctx.lineWidth = borderThickness; 
  
     // background color 
     // border color 
  
     // if the fill color is defined, then fill it 
     if (fillColor != undefined) { 
         ctx.fillStyle = getCanvasColor(fillColor); 
         ctx.fill(); 
     } 
      
     if (borderThickness > 0 && borderColor != undefined) { 
         ctx.strokeStyle = getCanvasColor(borderColor); 
         ctx.stroke(); 
     } 
} 

function getCanvasColor ( color ) { 
     return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")"; 
} 

function UpdateTexto2D(nome, mensagem)
{
	cena.remove(nome);
	
}

// Texto para a cena (3D)
function Texto(mensagem)
{
	var materialFront = new THREE.MeshPhongMaterial( { color: 0xff0000, shading: THREE.SmoothShading } );
	var materialSide = new THREE.MeshPhongMaterial( { color: 0x000088, shading: THREE.SmoothShading} );
	var materialArray = [ materialFront, materialSide ];
	
	this.textGeom = new THREE.TextGeometry( mensagem, {size: 5, 
																					    height: 5,
																						curveSegments: 10, 
																						font: "helvetiker", 
																						weight: "bold", 
																						style: "normal", 
																						bevelThickness: 10,
																						bevelSize: 8,
																						material: 0,
																						extrudeMaterial: 1});

	
	this.textGeom.computeBoundingBox();
	var textWidth = this.textGeom.boundingBox.max.x - this.textGeom.boundingBox.min.x;
	
	
	var textMaterial = new THREE.MeshFaceMaterial(materialArray);
	this.Texto = new THREE.Mesh(this.textGeom, textMaterial );
	cena.add(this.Texto);
	
	this.Texto.rotation.set(Math.PI / 2, 0,0);
	this.Texto.position.set(0,0,20);
	this.Texto.lookAt(camera.position);
}

function UpdateTexto(nome, mensagem)
{
	cena.remove(nome);
	Texto(mensagem);
}


// função de arredondamento
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

