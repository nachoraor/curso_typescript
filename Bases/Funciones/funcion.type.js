"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const addNumbers = (a, b) => a + b;
    const saludar = (nombre) => `Hola ${nombre}`;
    const salvarMundo = () => "El mundo esta salvado";
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = saludar;
    console.log(myFunction("Marta"));
    myFunction = salvarMundo;
    console.log(myFunction());
})();
