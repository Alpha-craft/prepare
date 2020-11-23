// import prompt from 'prompt-sync'; #syntax ES6
const prompt = require('prompt-sync')();

console.log('\t\tPenjumlahan');

function tambah(a, b) {
    let hasil = a + b;
    return hasil;
}
coba1 = tambah(2, 6)
    // console.log(coba1)
inp1 = prompt('angka: ')
inp2 = prompt('angka: ')
coba2 = tambah(inp1, inp2)
console.log(coba2)