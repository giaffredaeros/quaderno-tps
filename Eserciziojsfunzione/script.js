// TODO scrivi lo script

const aInput=document.getElementById("a");
const bInput=document.getElementById("b");
const cInput=document.getElementById("c");

const btnCalcola = document.getElementById("btn-calcola");

const soluzione1=document.getElementById("soluzione1");
const soluzione2=document.getElementById("soluzione2");


btnCalcola.addEventListener("click",()=>{

    //il getElementbyId viene passato come stringa quindi dobbiamo passarlo come float
    let a=parseFloat(aInput.value);
    let b=parseFloat(bInput.value);
    let c=parseFloat(cInput.value);
    let risultato1;
    let risultato2;

    let delta = ((b)**2)-(4*a*c);

    if(isNaN(a)||isNaN(b)||isNaN(c)){

        risultato1="Non inserire lettere";
        soluzione1.textContent=risultato1

    }else{
        if(delta>0){
        risultato1=((-b)-(delta)**0.5)/(2*a);
        risultato2=((-b)+(delta)**0.5)/(2*a);

        soluzione1.textContent=risultato1;
        soluzione2.textContent=risultato2;

        }else if (delta<0){
            risultato1="Nessuna soluzione esistente";
            soluzione1.textContent=risultato1;

        }else if(delta==0){
            risultato1=((-b)+(delta)**0.5)/(2*a);

            soluzione1.textContent=risultato1;
        }


        ////////////////////CANVAS////////////////////////

        const canvas = document.getElementById('parabola');
        const ctx = canvas.getContext('2d');

        const centroX=canvas.width/2;
        const centroY=canvas.width/2;

        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 1;

        ctx.beginPath(); ctx.moveto(0,centroY); ctx.moveTo(canvas.width, centroY); ctx.Stroke();
        




    }
    
});


