//meu site vegano
window.onscroll = function(){
    const scroll =document.getElementById("scroll");
    if(document.body.scrollTop >300 || document.documentElement.scrollTop >300)
    {
        scroll .style.display = "block";
    }
    else{
        scroll .style.display ="none";
    }
};
document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth" //faz subir mais devagar

    });
});
function start(){
    const fimHora = new Date().getTime() +3600*1000;
    const horaElemento = document.getElementById('tempo');
    
    const interval = setInterval(function(){
        const now = new Date().getTime();
        const timeRegresso = fimHora - now;
        if(timeRegresso <= 0){
            clearInterval(interval);
            horaElemento.innerHTML = "A promoção acabou!";

        }
        else{
            const hora = Math.floor(timeRegresso / (1000 * 60 * 60));
            const minutos = Math.floor(timeRegresso % (1000 * 60 * 60) / (1000*60));
            const segundos = Math.floor(timeRegresso % (1000 * 60) / 1000 * 60);

            horaElemento.innerHTML = `${hora}h ${minutos}m ${segundos}s`;
        }
    }, 1000);
}
window.addEventListener('load', start);

let testeModal = 0;
function show (){
    const testimodal = document.querySelectorAll(".modais");
    testimodal.forEach((modal, index) => {
        modal.style.display = (index === testeModal) ? 'block' : 'none';
    });
    testeModal = (testeModal + 1) % testimodal.length;
}
window.addEventListener('load', function(){
    show();
    setInterval(show, 3000);
});
