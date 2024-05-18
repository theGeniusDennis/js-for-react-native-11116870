//the processArray function
function processArray(numbers){
    return numbers.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}


//the formatArrayStrings function
function formatArrayStrings(strings, processedNums){
    return strings.map((str, index) => {
        if (processedNums[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    })
}

//Example Usage

const processedNums = processArray([1,2,3,4,5]);
const strings = ["Hello", "World" ,"JavaScript", "is", "fun"];
console.log(formatArrayStrings(strings, processedNums));