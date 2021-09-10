// creare un array di oggetti ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso
// stampare a schermo la bici con peso minore

const biciclette = [
    {
        nome: 'Lombardo',
        peso: 20
    },
    {
        nome: 'Graziella',
        peso: 30
    },
    {
        nome: 'cletta',
        peso: 25
    }
]

// i due array sono lo stesso array che viene passato per riferimento
const bici2 = biciclette

// copio l'array usando lo spread operator
// !ATTENZIONE: i due array sono diversi, ma gli oggetti all'interno solo gli stessi
let bici3 = [...biciclette];
// let bici3 = [ bicicle[0], bicicle[1], bicicle[2] ];

// pusho un nuovo oggetto nel nuovo array, non sarà presente in biciclette
bici3.push({
    nome: 'push',
    peso: 28
})

console.log(biciclette)

// cerco la bici più leggera
let biciLeggera

for(var i = 0; i < biciclette.length; i++) {

    // console.log(biciclette[i])
    // alla prima iterazione bicileggere è undefined
    if(!biciLeggera) {
        // quindi 
        biciLeggera = biciclette[i]
        console.log(i,biciLeggera)
        continue
    }

    // dalla seconda iterazione in poi confronto i pesi
    // recuperoil peso dall'oggetto con il destructoring
    let { peso } = biciclette[i];
    // let peso = biciclette[i].peso;

    // console.log(peso,biciclette[i].peso)
    // confronto i pesi
    if(peso < biciLeggera.peso) {
        biciLeggera = biciclette[i]
    }
    console.log(i,biciLeggera)
    // console.log(biciclette[i],peso)
}

//creo una bici
let b = bici('mia',15)
//push la bici
biciclette.push(b)

console.log(biciclette)

//creao una nuova bici copiando un oggetto esistente
let copiaBiciLeggere = copiaBici(biciLeggera)
//aggiungo una nuova proprieta alla copia
copiaBiciLeggere.colore = 'rosso'

console.log(copiaBiciLeggere)


//creo array con solo nomi delle bici
// const nomiBiciclette = []

// console.log('for normale')
// for(let i = 0; i < 50; i++) {
//     let bici = biciclette[i]
//     console.log(bici)
// }

// console.log('for of')
// for(let bici of biciclette) {

//     console.log(bici)

//     for(let prop in bici) {
//         console.log(prop,bici[prop])
//     }

//     // let { nome } = bici
//     // nomiBiciclette.push(nome)
// }

// dove usare of o in?
// for..of -> sugli array
// for..in -> sugli oggetti

// funzione crea nuova bici
function bici(nome,peso) {
    return { nome, peso }
}

// funzione copia oggetto con destructuring
// function copiaBici(bici) {

//     let { nome, peso } = bici

//     return {nome,peso}
// }

// funzione copia oggetto con destructuring del parametro
// function copiaBici({ nome, peso }) {
//     return {nome,peso}
// }

// funzione copia oggetto con spread operator
function copiaBici(bici) {
    return {...bici}
}

// rest operator
function rest(...args) {
    console.log(args);
}

// creare un array di oggetti di squadre di calcio
// ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subuti.
// nome sarà l'unica proprietà da compilare 
// le altre sarnno a 0

// generare numeri random al posto degli 0 nelle proprietà
// punti fatti e falli subiti

// usando la destrutturazione creiamo un nuovo array
//  i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console


const squadreCalcio = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
        //metodo che ritorna la proprietà falli
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
        getFalli: function() {
            return this.falli
        }
    }
];

// ciclo for...of vedi più avanti
for(let squadra of squadreCalcio) {

    squadra.falli = getRandomInt(0,100)
    squadra.punti = getRandomInt(0,100)


}

console.log(squadreCalcio);

// creo un nuovo array con nome e falli
let arrayNomiFalli = []

for (const squadra of squadreCalcio) {
    
    // recupero i valori con il destructoring
    let {nome,falli} = squadra

    // creo un nuovo oggetto con le due proprieta
    let obj = {nome,falli}
    // let arr = [nome,falli] //esempio creando un array

    // console.log('La squadra: ' + 
    // nome + ' ha commesso ' 
    // + squadra.getFalli() + ' falli! birichini'
    // )

    // creo messaggio con il template literal
    let messaggio = `
    La squadra: ${ nome } ha commesso ${ squadra.getFalli() } falli!
    `
    console.log(messaggio)

    arrayNomiFalli.push(obj)
}

console.log(arrayNomiFalli)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const classeNome = 'active'
const id = 'pippo'

// contatenazione di stringhe
let html = 
'<ul class="lista">'+
    '<li class="list-item'+ classeNome +'">' + biciLeggera.peso + '</li>'+ 
    '<li class="list-item">' + biciLeggera.nome + '</li>'+ 
'</ul>';


// template literal
let htmlT = `
    <div class="nome">
        <h1 id="${ id }"  class="list-item ${ classeNome }">${ biciLeggera.peso }</h1>
        <h1 class="list-item">${ biciLeggera.nome }, ${ biciLeggera.peso } </h1>
    </div>
`

// console.log(htmlT)
document.querySelector('.container').innerHTML += htmlT


// console.log(document.querySelector('#pippo'))

// listener con function tradizionale
document.querySelector('#pippo').addEventListener('click',function() {
    console.log(this)
})

// listener con arro function
document.querySelector('#pippo').addEventListener('click',() => {
    // attenzione che cambia il valore del this, in questo caso this è uguale all'oggetto Window
    console.log(this)
})

// esempio arrow function
let arrwFn = (param1, param2) => {
    console.log(param1,param2)
}

let bellissima = {
    nome: 'Bellissima',
    punti: 0,
    falli: 0,
    getFalli: function() {
        return this.falli
    },
    // metodo dell'oggetto con arrow function
    impostaNome: (nome) => {
        console.log(this) //qui this è la Window
        this.nome = nome // quindi qui stiamo in realta facendo questo => Window.nome = nome
    }
}
//esercizio array da indici di un array

const insieme = ['gianna', 'aldo', 'xena', 'franca', 'kamala', 'ottavio', 'fabio', 'saul'];

let elementiDaAggiungere = arrayFromIndex(insieme,3,5);
console.log(elementiDaAggiungere);

function arrayFromIndex (array,indexMin,indexMax) {
    let insiemeNuovo = [];
    array.forEach((element,index) => { 
        if (index >= indexMin && index<= indexMax){
            insiemeNuovo.push(element);
        }
    }); 
    return insiemeNuovo;
}