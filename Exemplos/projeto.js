var sprite1;
var canvas1, context1, texture1;
// var DESCENDER_ADJUST = 1.28; 
var DESCENDER_ADJUST = 1;


// Declara as variáveis 
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
	 PosicaoDoObservador(30,30,30);
	 OlharPara(0,0,0);
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
		
		var txSprite = makeTextSprite( "vFL="+vFL, 0, 0, 30, 130, 60, { fontsize:18, fontface:"Arial", borderColor: {r:255, g:0, b:0, a:1.0},  
         borderThickness:4, fillColor: {r:255, g:0, b:0, a:0.3}, textColor:{r:255, g:255, b:255, a:0.9}, radius:0, vAlign:"center", hAlign:"left" }); 
        cena.add( txSprite ); 
	/*
		var spritey = makeTextSprite( "vFM = "+vFM, 
		{ fontsize: 8, borderColor: {r:40, g:150, b:150, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} },0,0,20 );
		//spritey.position.set(pL,0,0);
		//cena.add( spritey );
	*/
}

	

function Simulacao()
{
	if (pL<200) {pL=vFL*t};
	Lauro.CorpoExtenso.position.y = pL;
	
	if (pC<200) {pC=vFC*t};
	Cora.CorpoExtenso.position.y = pC;
	
	if (pM<200) {pM=vFM*t};
	Marta.CorpoExtenso.position.y = pM;
	
	t=t+0.1
	/*
	if (t>=150) {t=150} 
	if (pC>=200) {pC=200};
	if (pM>=200) {pM=200};
	*/
            
					
}

  /** 
   * Build a text sprite.  We use canvas to write the label in 2D then create a texture
   * from the canvas.  Three.js extracts the raster from the canvas and composites that
   * into the center of the texture. 
  */ 
function makeTextSprite( message, x, y, z, Ex, Ey, parameters ) 
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
      
     /* 
     // need to ensure that our canvas is always large enough 
     // to support the borders and justification, if any 
     // Note that this will fail for vertical text (e.g. Japanese)
     // The other problem with this approach is that the size of the canvas 
     // varies with the length of the text, so 72-point text is different 
     // sizes for different text strings.  There are ways around this 
     // by dynamically adjust the sprite scale etc. but not in this demo...
     var larger = textWidth > fontsize ? textWidth : fontsize;
     canvas.width = larger * 4; 
     canvas.height = larger * 2; 
     // need to re-fetch and refresh the context after resizing the canvas 
     context = canvas.getContext('2d'); 
     context.font = fontsize + "px " + fontface; 
     context.textBaseline = "alphabetic"; 
     context.textAlign = "left"; 
      metrics = context.measureText( message ); 
     textWidth = metrics.width; 
  
      console.log("canvas: " + canvas.width + ", " + canvas.height + ", texW: " + textWidth);
     */ 
      
     // find the center of the canvas and the half of the font width and height 
     // we do it this way because the sprite's position is the CENTER of the sprite 
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
     var texture = new THREE.Texture(canvas) 
     texture.needsUpdate = true; 
  
     var spriteMaterial = new THREE.SpriteMaterial( { map: texture } ); 
     var sprite = new THREE.Sprite( spriteMaterial ); 
      
     // we MUST set the scale to 2:1.  The canvas is already at a 2:1 scale, 
     // but the sprite itself is square: 1.0 by 1.0 
     // Note also that the size of the scale factors controls the actual size of the text-label 
     sprite.scale.set(Ex,Ey,1); 
      
     // set the sprite's position.  Note that this position is in the CENTER of the sprite 
     sprite.position.set(x, y, z); 
      
     return sprite;     
} 
  
/** 
 *  function for drawing rounded rectangles 
 */ 
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

 
 /** 
  * convenience for converting JSON color to rgba that canvas wants
  * Be nice to handle different forms (e.g. no alpha, CSS style, etc.)
  */ 
function getCanvasColor ( color ) { 
     return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")"; 
} 


  