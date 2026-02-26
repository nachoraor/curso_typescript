(() => {

    const addNumbers = (a:number, b:number) => a+b;
    const saludar = (nombre:string) => `Hola ${nombre}`;
    const salvarMundo = () => "El mundo esta salvado";

    let myFunction;

    myFunction=10;
    console.log(myFunction)

    myFunction = addNumbers;
    console.log (myFunction(1,2))

    myFunction = saludar
    console.log (myFunction("Marta"))

    myFunction = salvarMundo
    console.log (myFunction())

})()