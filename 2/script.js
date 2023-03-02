const a = parseFloat(prompt("a = ",));
const b = parseFloat(prompt("b = ",));
function sum(a, b) {
    return a + b;
}
alert(`${a} + ${b} = ` + sum(a,b));

function minus(a, b){
    return a - b;
}
alert(`${a} - ${b} = ` + minus(a,b));

function multiply(a, b){
    return a * b;
}
alert(`${a} * ${b} = ` + multiply(a,b));

function divide(a, b){
    return a / b;
}
alert(`${a} / ${b} = ` + divide(a,b));