//Import functions from arrayManipulation.js
const { processArray, formatArrayStrings} = require("./arrayManipulation");


function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }))
}

const originalNames = ["Alice", "Bob", "Charlie"];
const modifiedNames = formatArrayStrings(["Alice", "Bob", "Charlie"], processArray([2,3,4]));
console.log(createUserProfiles(originalNames, modifiedNames));