// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".


const btnAggiungi=document.getElementById("btn-aggiungi")
const item=document.getElementById("item");
const errore=document.getElementById("errore");
const ul=document.getElementById("lista");


btnAggiungi.addEventListener("click",()=>{

    const nome= item.value.trim();

    if(nome==""){
        errore.textContent = "inserisci un prodotto valido";
    }else{
        errore.textContent= "";
        const li = document.createElement("li");
        li.textContent=nome;

        //creiamo bottone
        const btnRimuovi=document.createElement("button");
        btnRimuovi.textContent="rimuovi"
        btnRimuovi.addEventListener("click", ()=>{
            li.remove();
        })

        //dove andiamo inserire le cose
        ul.appendChild(li);
        li.appendChild(btnRimuovi);

    }


    

    

    //creiamo elemnto li
    
    



});
