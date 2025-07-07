console.log("Welcome by Caesar Cipher Encryption!!");

// Alphabet als Array
const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Input der Satz oder das Wort
let phrase = process.argv[2];
// input der shift Number
const shiftNumber = parseInt(process.argv[3]);

//hinweis wenn nichts schreiben 
if (!phrase ) {
  console.log("Please write your message and your shift number");
  process.exit();
}
// alles wird klein geschrieben
phrase = phrase.toLowerCase();

//funktion für konvertieren der staz oder das wort 
function cesar() {
  let result = '';

  //  Schleife durch jeden Buchstaben im Satz
  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];

    //  Wenn der Buchstabe im Alphabet ist
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char); // finde der position für der alphabet
      let shiftedIndex = (index + shiftNumber) % 26; // die neue position 
      // wenn die shiftnumber ist negative
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }

      let newChar = alphabet[shiftedIndex]; // neue   Buchstabe
      result += newChar; // zum ergebnis hinzufügen
    } 
  }

  //zeig das Ergebnis
  console.log("Encrypted message:", result);
}
// funktion anrufen
cesar();

