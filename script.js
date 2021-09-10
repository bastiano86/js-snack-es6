const insieme = ['gianna', 'aldo', 'xena', 'franca', 'kamala', 'ottavio', 'fabio'];

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