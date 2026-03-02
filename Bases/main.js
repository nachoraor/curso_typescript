define("Ejercicios", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        // Tipos
        const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false;
        // Tuplas
        const parejaHeroes = [batman, superman];
        const villano = ['Lex Lutor', 5, true];
        // Arreglos
        const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        //Enumeraciones
        let fuerza;
        (function (fuerza) {
            fuerza[fuerza["flash"] = 0] = "flash";
            fuerza[fuerza["superman"] = 100] = "superman";
            fuerza[fuerza["batman"] = 20] = "batman";
            fuerza[fuerza["acuaman"] = 5] = "acuaman";
        })(fuerza || (fuerza = {}));
        const fuerzaFlash = fuerza.flash;
        const fuerzaSuperman = fuerza.superman;
        const fuerzaBatman = fuerza.batman;
        const fuerzaAcuaman = fuerza.acuaman;
        // Retorno de funciones
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        // Aserciones de Tipo
        const poder = '100';
        const largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
});
define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const a = 10;
        console.log(a);
    })();
});
define("Funciones/Ejercicio Funciones y objetos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
});
define("Funciones/arg.default", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Funciones/arg.required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName("Tony", "Stark");
        console.log({ name });
    })();
});
define("Funciones/args.optional", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName || "lastName not defined"}`;
        };
        const name = fullName("Tony");
        console.log({ name });
    })();
});
define("Funciones/args.rests", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, ...restargs) => {
            return `${firstName} ${restargs}`;
        };
        const superMan = fullName("Stark", "Joseph", "Kent");
        console.log(superMan);
    })();
});
define("Funciones/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let isSuperman = true;
        console.log(isSuperman);
    })();
});
define("Funciones/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 0] = "min";
            AudioLevel[AudioLevel["medium"] = 1] = "medium";
            AudioLevel[AudioLevel["max"] = 2] = "max";
        })(AudioLevel || (AudioLevel = {}));
        let currentAudio = AudioLevel.max;
        console.log(currentAudio);
        console.log(AudioLevel);
    })();
});
define("Funciones/funcion.type", ["require", "exports"], function (require, exports) {
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
});
define("Funciones/funciones", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = "Flash";
        function returnName() {
            return hero;
            const activatedBatisignal = () => {
                return "Batiseñal activada";
            };
            console.log(typeof activatedBatisignal);
            const heroName = returnName();
        }
    })();
});
define("Funciones/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avengers = 10;
        console.log(avengers);
        const villians = 20;
        if (avengers < villians) {
            console.log("Estamos en problemas");
        }
        else {
            console.log("Estamos salvados");
        }
        avengers: Number("55");
        console.log({ avengers });
    })();
});
define("Funciones/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = "Batman";
        const linternaVerde = "Linterna verde";
        const volcanNegro = "Heroe: Volcan negro";
        console.log(batman.toUpperCase());
        console.log(volcanNegro.toLowerCase());
    })();
});
define("Funciones/tuplas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = ["Dr Strange", 100];
        hero[0] = "Ironman";
        hero[1] = 50;
        console.log(hero);
    })();
});
define("Objetos/Ejercicio objetos typescript", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: 35,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
});
define("Objetos/objects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: "Barry Allen",
            age: 35,
            powers: ["Super velocidad", "Viajar en el tiempo"]
        };
        flash = {
            name: "Clark Kent",
            age: 50,
            powers: ["Super fuerza"],
            getName() {
                return this.name;
            }
        };
        console.log(flash.getName);
    })();
});
define("Objetos/union-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let myCustomVariable = "Fernando";
        console.log(myCustomVariable);
        myCustomVariable = 20;
        console.log(myCustomVariable);
    })();
});
