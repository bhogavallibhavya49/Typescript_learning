const str = "TypeScript with playground";   
let count = 0;

for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
}
console.log(`Vowels: ${count}`);

export {};

const nums: number[] = [5, -3, 0, 8, -1, 0];
let positive = 0, negative = 0, zero = 0;

for (let n of nums) {
    if (n > 0) positive++;
    else if (n < 0) negative++;
    else zero++;
}
console.log(`Positive:${positive}, Negative:${negative}, Zero:${zero}`);

