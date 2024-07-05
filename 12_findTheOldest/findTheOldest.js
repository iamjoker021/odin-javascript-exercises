const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        let age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        if (!oldestPerson.age || oldestPerson.age < age) {
            oldestPerson["age"] = age;
            oldestPerson["name"] = person.name;
        }
        return oldestPerson;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
