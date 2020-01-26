let spanishGreeting = "Hola, mundo!"
let frenchGreeting = "Bonjour tout le monde"
let defaultGreeting = "Hello, World!"


const language = (prompt("Welcome to Ironhack? What language do you prefer"));

if (language === "spanish" || language === "Spanish"){
    console.log(spanishGreeting);
}
else if (language === "french"|| language === "French") {
    console.log(frenchGreeting);
}
else {
    console.log(defaultGreeting);
}