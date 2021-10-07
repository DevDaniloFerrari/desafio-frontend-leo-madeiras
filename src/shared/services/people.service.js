const addPerson = (person) => {
    let people = JSON.parse(localStorage.getItem('people'))

    if (people == null)
        people = [person];
    else
        people.push(person)

    localStorage.setItem('people', JSON.stringify(people))
}

const getPeople = () => {
    return JSON.parse(localStorage.getItem('people'))
}

export { addPerson, getPeople }