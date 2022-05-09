let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Task 1 Find the samallest variable and return integer
console.log(parseInt(Math.min(a, b, c, d)));

// Task 2 use variable a , d one time to get 10000
console.log(Math.pow(a, parseInt(d)));

// Task 3 get integer "2" from d with 4 mehods 
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(+d.toFixed())

// Task 4 use variables b , d to get this values 
console.log((parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(+(Math.ceil(parseInt(b) / Math.ceil(d)).toFixed(2)))