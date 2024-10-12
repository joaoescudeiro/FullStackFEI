let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

//FUNCOES CANVAS 1
function quadrado(x, y, largura, altura, cor_linha, cor_preenchimento){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor_linha;
    ctx.fillStyle = cor_preenchimento;
    ctx.strokeRect(x,y,largura,altura);
    ctx.fillRect(x,y,largura,altura);
    ctx.closePath();
}

function linha(largura,cor,xorigem,yorigem,xfinal,yfinal){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.strokeStyle = cor;
    ctx.moveTo(xorigem,yorigem);
    ctx.lineTo(xfinal,yfinal);
    ctx.stroke();
    ctx.closePath();
}

function arco(largura,cor_linha,cor_preenchimento,x,y,raio,anguloorigem,angulofinal){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.strokeStyle = cor_linha;
    ctx.fillStyle = cor_preenchimento;
    ctx.arc(x,y,raio,anguloorigem*Math.PI,angulofinal*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function texto(largura,cor,tamanhofonte,texto,x,y){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = cor;
    ctx.font = tamanhofonte
    ctx.fillText(texto,x,y);
    ctx.closePath();
}

//FUNCOES CANVAS 2
function quadrado2(x, y, largura, altura, cor_linha, cor_preenchimento){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = cor_linha;
    ctx2.fillStyle = cor_preenchimento;
    ctx2.strokeRect(x,y,largura,altura);
    ctx2.fillRect(x,y,largura,altura);
    ctx2.closePath();
}

function linha2(largura,cor,xorigem,yorigem,xfinal,yfinal){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.strokeStyle = cor;
    ctx2.moveTo(xorigem,yorigem);
    ctx2.lineTo(xfinal,yfinal);
    ctx2.stroke();
    ctx2.closePath();
}

function arco2(largura,cor_linha,cor_preenchimento,x,y,raio,anguloorigem,angulofinal){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.strokeStyle = cor_linha;
    ctx2.fillStyle = cor_preenchimento;
    ctx2.arc(x,y,raio,anguloorigem*Math.PI,angulofinal*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
}

function texto2(largura,cor,tamanhofonte,texto,x,y){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.fillStyle = cor;
    ctx2.font = tamanhofonte
    ctx2.fillText(texto,x,y);
    ctx2.closePath();
}

function linhafill2(largura,cor,corfill,a,b,c,d,e,f,g,h,i,j){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.fillStyle = corfill;
    ctx2.strokeStyle = cor;
    ctx2.moveTo(a,b);
    ctx2.lineTo(c,d);
    ctx2.lineTo(e,f);
    ctx2.lineTo(g,h);
    ctx2.lineTo(i,j);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

//CANVAS 1
quadrado(0,0,50,50,'blue','blue');
quadrado(250,0,50,50,'red','red');
quadrado(270,134,37,14,'aqua','aqua');
quadrado(270,152,37,14,'aqua','aqua');
quadrado(0,120,30,28,'aqua','aqua');
quadrado(0,152,30,28,'aqua','aqua');
quadrado(0,272,30,28,'yellow','yellow');
quadrado(0,244,30,28,'yellow','yellow');
quadrado(28,272,30,28,'yellow','yellow');
quadrado(272,272,30,28,'black','black');
quadrado(244,272,30,28,'black','black');
quadrado(272,244,30,28,'black','black');
quadrado(111,151,38,38,'red','red');

linha(1,'blue',0,0,150,150);
linha(1,'red',300,0,150,150);
linha(1,'green',0,150,300,150);
linha(1,'green',150,150,150,300);

arco(1,'green','transparent',150,150,59,1,2);
arco(1,'green','transparent',150,150,75,1,1.25);
arco(1,'green','transparent',150,150,75,1.75,2);
arco(1,'green','transparent',150,300,75,0,1.5);
arco(1,'green','transparent',150,300,60,1.5,2);
arco(1.5,'green','aqua',150,300,40,0,2);
arco(1.5,'green','yellow',70,220,14,0,2);
arco(1.5,'green','yellow',220,220,14,0,2);
arco(1.5,'blue','aqua',150,115,14,0,2);

texto(10,'black','20px Arial','Canvas',114,55);



//CANVAS 2
//sol
arco2(4,'yellow','yellow',310,90,40,0,2);
//chao
quadrado2(0,300,400,100,'gray','gray');
//casa
quadrado2(150,208,90,90,'brown','brown');
//janela 1 da casa
quadrado2(160,230,25,25,'aqua','aqua');
//janela 2 da casa
quadrado2(205,230,25,25,'aqua','aqua');
//porta da casa
quadrado2(187,257,16,41,'black','black');
//agua
quadrado2(0,300,50,100,'blue','blue');
//agua
quadrado2(0,350,130,50,'blue','blue');
//borda da agua
arco2(4,'blue','blue',-1,300,50,0,2);
//borda da agua
arco2(4,'blue','blue',125,401,50,0,2);
//tronco 1 arvore
quadrado2(53,257,16,41,'brown','brown');
//tronco 2 arvore
quadrado2(350,310,16,41,'brown','brown');
//folhas 1 arvore
arco2(4,'green','green',359,290,25,0,2);
//folhas 2 arvore
arco2(4,'green','green',61,240,25,0,2);
//telhado
linhafill2(2,'pink','pink',149,208,149,208,193,170,240,208,149,208)

