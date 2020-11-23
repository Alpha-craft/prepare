const prompt = require('prompt-sync')();

let name = prompt("Siapa nama anda? ")

let nama = "Ainurahman"
let umur = 17
let sekolah = "SMKN2 Surabaya"

console.log(`Hey ${name}`);
console.log(name.length);
for (let i in name) {
    console.log(name[i])
}
console.log(name.repeat(2));
// console.log(nama);
// console.log(umur);
// console.log(sekolah);

// console.log(typeof nama);
// console.log(typeof umur);
// console.log(typeof sekolah);