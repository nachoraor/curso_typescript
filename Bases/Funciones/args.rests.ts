(() => {
const fullName = (firstName:string, ...restargs: string[]):string =>{
    return `${firstName} ${restargs}`
    }

    const superMan = fullName("Stark" , "Joseph" , "Kent")

    console.log (superMan);

})()