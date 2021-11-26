{
    let  dogs = ["Bulldog", "Beagle", "DoobarDog"];


    let i = 0;
    let allDogs = "";
    while (i < dogs.lenght) {
        allDogs += dogs[i++] + " ";
    }
    console.log("While: " + allDogs)
}