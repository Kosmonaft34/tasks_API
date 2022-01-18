function helloFunc(name) {
    return 'Hello, ' + name
}

console.log( hello('John'));
const decoratedHelloFunc = toUpperCaseDecorator(helloFunc)
console.log( toUpperCaseDecorator('John'));
function toUpperCaseDecorator(fn) {
    return function (str) {
        return fn(str.toUpperCase())
    }
}