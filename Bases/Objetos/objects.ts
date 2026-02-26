(() => {

    let flash : {name:string, age:number, powers: string[], getName?: () => string} ={
        name: "Barry Allen",
        age: 35,
        powers: ["Super velocidad" , "Viajar en el tiempo"]
    }

    flash = {
        name:"Clark Kent",
        age: 50,
        powers: ["Super fuerza"],
        getName(){
            return this.name;
        }
    }
    console.log(flash.getName)


})()