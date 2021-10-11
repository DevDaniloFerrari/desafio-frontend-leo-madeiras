import guid from "../utils/guid";

const addPerson = (person) => {

    person = {...person, id: guid() }

    let people = JSON.parse(localStorage.getItem('people'))

    if (people === null)
        people = [person];
    else
        people.push(person)

    localStorage.setItem('people', JSON.stringify(people))
}

const getPeople = () => {
    return JSON.parse(localStorage.getItem('people'))
}

const getPerson = (id) => {
    let people = JSON.parse(localStorage.getItem('people'))
    return people && people.find(x => x.id === id)
}

const deletePerson = (id) => {
    let people = JSON.parse(localStorage.getItem('people'))

    if (people === null)
        return

    var index = people.findIndex(x => x.id === id);

    ~index && people.splice(index, 1);
    localStorage.setItem('people', JSON.stringify(people))
}

const editPerson = (data) => {
    let people = JSON.parse(localStorage.getItem('people'))

    if (people === null)
        return

    var index = people.findIndex(x => x.id === data.id);

    people[index] = data;

    localStorage.setItem('people', JSON.stringify(people))
}

export { addPerson, getPeople, getPerson, deletePerson, editPerson }