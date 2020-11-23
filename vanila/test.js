const prompt = require('prompt-sync')();
console.log("1.Hello World");
console.log("2.Test");
let pilihan = prompt("Masukkan pilihan anda: ")
if (pilihan == "1") {
    console.log("Hello world")
} else {
    console.log("Test")
}