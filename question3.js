var variable = 10;

(()=>{
    console.log(variable);
    variable = 20;
    console.log(variable);
})();

console.log(variable);
var variable = 30;
console.log(variable);