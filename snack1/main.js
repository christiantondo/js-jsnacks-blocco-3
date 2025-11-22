// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const cars = [
    { brand: "Mclaren", model: "Senna", fueltype: "Benzina"},
    { brand: "Lexus", model: "LFA", fueltype: "Benzina"},
    { brand: "Ford", model: "Focus", fueltype: "Diesel"},
    { brand: "Volvo", model: "XC90", fueltype: "Diesel"},
    { brand: "Dacia", model: "Sandero", fueltype: "Gpl"},
    { brand: "Fiat", model: "Panda", fueltype: "Gpl"},
    { brand: "Porsche", model: "Taycan", fueltype: "Elettrica"},
    { brand: "Audi", model: "e-tron GT", fueltype: "Elettrica"},
    { brand: "Volkswagen", model: "eco up", fueltype: "Metano"},
    { brand: "Seat", model: "Ibiza", fueltype: "Metano"}
]


// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
const petrolCars = cars.filter(car => car.fueltype == "Benzina");
const dieselCars = cars.filter(car => car.fueltype == "Diesel");
const otherCars = cars.filter(car => car.fueltype != "Benzina" && car.fueltype != "Diesel");

// Infine stampa separatamente i 3 array. */
console.log("", petrolCars)
console.log("", dieselCars)
console.log("", otherCars)