// Exemplos de operadores Lógicos em javaScript

// Operador E Lógico (&&)
const a = true;
const b = false;
console.log(a && b);

// Operador OU Lógico (||)
const c = true;
const d = false;
console.log(c || d);

// operador Não LÓGICO (!)
const e = !true;
const f = !false;
console.log(e, f)

// combinações de valores lógicos 

const resultadoCom1 = (a || b) && !b;
const resultadoCom2 = !(a && b) || a;

console.log(`(true || false ) && !false: ${resultadoCom1}`);
console.log(`!(true && false) || true: ${resultadoCom2}`);