//===> Exemplo Number

let num1: number = 23.1;
let num2: number = 0x78CF;
let num3: number =0o577;
let num4: number = 0b110001;

console.log('Number - Float...: ',num1);
console.log('Number - Hexadecimal...: ',num3);
console.log('Number - Octal...: ',num2);
console.log('Number - Binary...: ',num4);

//===> Exemplo BigInt

let big1: bigint =  9007199254740991n;
let big2: bigint =  0b1000000000000000000000000000000001000000000000000000000000000n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 9007199254740995n;

console.log('Bigint...: ',big1);
console.log('Bigint -Binary...: ',big2);
console.log('Bigint - Hexadecimal...: ',big3);
console.log('Bigint - Octal...: ',big4);
