//carro

const carro={
    "marca":"toyota",
    "tipo":"sedan",
    "matricula":"PDA-123",
    "año":2010,

    miCarro: function(){
        console.log(`${this.marca} ${this.tipo} ${this.año}`)
    },

    "colores":["azul", "negro", "rojo"],
    "cerochoques":true,
    "percio":10500,
}

const puesto={
    1:"Primer puesto",
    2:"Segundo puesto",
    3:"Tercer puesto",
}
var posicion=3
for(let i=1; i<=3; i++) console.log(puesto[i])
//console.log(carro["colores"], carro.colores)

//shorthand syntax

const name="Pedro"
const edad=20
const persona={name , edad}

//console.log(carro.colores.length, carro.percio)
console.log(persona)

//JSON

const exitos={
    "Shakira":{
        2010:{
            "albun":"pies descalzos",
            "venta":30000
        },
        2011:{
            "albun":"romanticas",
            "venta":11000
        }
    }
}

console.log(exitos.Shakira[2011].venta)