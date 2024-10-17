let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bola = {
    x: 10,
    y: 10,
    raio: 25,
    img: new Image(),
    desenhe: function(){
        this.img.src = "bola.png";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,300,300);

    bola.desenhe();
    requestAnimationFrame(animacao);
};

animacao();

document.addEventListener("mousemove",function(evento){
    let rect = canvas.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;
    console.log(x,y);

    bola.x = Math.max(0, Math.min(x - bola.raio, canvas.width - 2 * bola.raio));
    bola.y = Math.max(0, Math.min(y - bola.raio, canvas.height - 2 * bola.raio));
})
