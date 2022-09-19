// Code your solution here
//findMatching()
function findMatching(drivers, name) {
    const comparison = driver => driver.toUpperCase() === name.toUpperCase();
    if (comparison) {
        return drivers.filter(comparison);
    }
    else return [];
}

//fuzzyMatch()
function fuzzyMatch(drivers, startingLetters) {
    const comparison = driver => driver.startsWith(startingLetters);
    if (comparison) {
        return drivers.filter(comparison);
    }
}

//matchName()
function matchName(drivers, str) {
    const comparison = string => string.name === str;
    return drivers.filter(comparison);
}