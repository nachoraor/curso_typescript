type Coche = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar ?: () => void
}





// Objetos
const batimovil: Coche =  {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villanos = {
    nombre: string;
    edad: number;
    mutante: boolean;
} 

const villanos: Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 35,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type heroe = {
  poder:string;
  estatura:number;
}


const charles: heroe = {
  poder:"psiquico",
  estatura: 1.78
};

type finalMundo = {
  lider:boolean;
  miembros: string[]
}

const apocalipsis: finalMundo = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: heroe | finalMundo;

mystique = charles;
mystique = apocalipsis;
