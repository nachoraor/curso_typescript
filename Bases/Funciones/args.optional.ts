(() => {

    const fullName = (firstName:string, lastName?:string) :string => {
    
    return `${firstName} ${lastName||"lastName not defined"}`;

    }

    const name = fullName ("Tony" );
    console.log({name})

})()