//bucles

const milista = [2,4,5]


for (let i=0; i<milista.length; i++){
    //console.log(e)
}

const dobleArray = [];

//for (const e in milista) {
//    let d=milista[e]*milista[e]
//    dobleArray.push(d)
//}

//for (const e of milista) {
//    dobleArray.push(e*e)
//}

milista.forEach((e)=> dobleArray.push(e*e))

//Funciones js

const returnlista = milista.map((e)=>e*e)

console.log(milista)
console.log(dobleArray)
console.log(returnlista)