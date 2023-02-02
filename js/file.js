function splitMessage(message, delimiter){
    console.log(delimiter);
    const arr = message.split(delimiter);
    return arr;
}
const b = splitMessage('A love JS', ' ');
console.log(b);
// -------------------
function makeStringFromArray(array, delimiter){
    const string = array.join(delimiter);
    return string;
}
const c = makeStringFromArray(['js', 'is', 'cool'], ' ');
console.log(c);
// -----------------------
function checkFruit(fruit){
    const arr = ['яблуко', 'груша', 'слива'];
    const fruct = arr.includes(fruit);
    return fruct;
}
const t = checkFruit('груша');
console.log(t);
