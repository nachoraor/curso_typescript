(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert",
        vision: "Paul",
        activos: true,
        number: 4500
    }

    const {number, vision} = avengers
    console.log (number.toFixed(2),vision.toUpperCase())

    const avengersArr = ["Cap America" , "Ironman" , "Hulk"]
    const ironman = avengersArr[1]
    console.log ({ironman})


})()