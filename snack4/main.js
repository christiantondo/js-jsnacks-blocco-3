// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const people = [
    { name: "Alessio", surname: "Mattei", age: "8" },
    { name: "Matteo", surname: "Sabatini", age: "25" },
    { name: "Simone", surname: "Angelini", age: "30" },
    { name: "Enrico", surname: "Mieli", age: "12" },
    { name: "Giovanni", surname: "Tondo", age: "52" },
    { name: "Giuseppe", surname: "Mieli", age: "81" }
]

// Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome e l’indicazione se può guidare, in base all’età.

// Nuovo array con all'interno
// const namePlusSurname = people.map(person => person.name + " " + person.surname)

const canTheyDrive = people.map(person => {
    const fullName = `${person.name} ${person.surname}`
    if (person.age >= 18) {
        console.log(fullName, "può guidare")
    } else
        console.log(fullName, "non può guidare")
})